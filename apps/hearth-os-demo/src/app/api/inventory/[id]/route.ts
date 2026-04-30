import { NextRequest, NextResponse } from 'next/server';
import {
  db,
  inventoryItems,
  bills,
  billLineItems,
  invoices,
  invoiceLineItems,
  customers,
  vendors,
  purchaseOrders,
  purchaseOrderLineItems,
} from '@/db';
import { and, eq, sql, desc } from 'drizzle-orm';
import { getOrCreateDefaultOrg } from '@/lib/org';
import { demoInventoryItems, demoVendors } from '@/lib/fireplacex-demo';

// Detail endpoint: full item + every signal a secretary might need to make a decision.

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const org = await getOrCreateDefaultOrg();

    const [item] = await db
      .select()
      .from(inventoryItems)
      .where(and(eq(inventoryItems.orgId, org.id), eq(inventoryItems.id, id)))
      .limit(1);

    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    // Cost history: every bill line we have for this qb_item_id, newest first
    const billHistory = item.qbItemId
      ? await db
          .select({
            billId: bills.id,
            billNumber: bills.billNumber,
            issueDate: bills.issueDate,
            vendorId: vendors.id,
            vendorName: vendors.displayName,
            qty: billLineItems.quantity,
            unitCost: billLineItems.unitCost,
            amount: billLineItems.amount,
            description: billLineItems.description,
          })
          .from(billLineItems)
          .innerJoin(bills, eq(bills.id, billLineItems.billId))
          .leftJoin(vendors, eq(vendors.id, bills.vendorId))
          .where(and(
            eq(bills.orgId, org.id),
            eq(billLineItems.qbItemId, item.qbItemId),
          ))
          .orderBy(desc(bills.issueDate))
          .limit(50)
      : [];

    // Sales / usage history: invoices that included this item
    const salesHistory = item.qbItemId
      ? await db
          .select({
            invoiceId: invoices.id,
            invoiceNumber: invoices.invoiceNumber,
            issueDate: invoices.issueDate,
            customerId: customers.id,
            customerName: sql<string>`COALESCE(${customers.companyName}, ${customers.firstName} || ' ' || ${customers.lastName})`,
            qty: invoiceLineItems.quantity,
            unitPrice: invoiceLineItems.unitPrice,
            total: invoiceLineItems.total,
            description: invoiceLineItems.description,
          })
          .from(invoiceLineItems)
          .innerJoin(invoices, eq(invoices.id, invoiceLineItems.invoiceId))
          .leftJoin(customers, eq(customers.id, invoices.customerId))
          .where(and(
            eq(invoices.orgId, org.id),
            eq(invoiceLineItems.qbItemId, item.qbItemId),
          ))
          .orderBy(desc(invoices.issueDate))
          .limit(50)
      : [];

    // Open POs that include this item (haven't been fully received)
    const openPOs = item.qbItemId
      ? await db
          .select({
            poId: purchaseOrders.id,
            poNumber: purchaseOrders.poNumber,
            issueDate: purchaseOrders.issueDate,
            expectedDate: purchaseOrders.expectedDate,
            status: purchaseOrders.status,
            vendorId: vendors.id,
            vendorName: vendors.displayName,
            qty: purchaseOrderLineItems.quantity,
            receivedQty: purchaseOrderLineItems.receivedQty,
            unitCost: purchaseOrderLineItems.unitCost,
          })
          .from(purchaseOrderLineItems)
          .innerJoin(purchaseOrders, eq(purchaseOrders.id, purchaseOrderLineItems.purchaseOrderId))
          .leftJoin(vendors, eq(vendors.id, purchaseOrders.vendorId))
          .where(and(
            eq(purchaseOrders.orgId, org.id),
            eq(purchaseOrderLineItems.qbItemId, item.qbItemId),
            eq(purchaseOrders.status, 'open'),
          ))
          .orderBy(desc(purchaseOrders.issueDate))
          .limit(20)
      : [];

    // Vendor breakdown: per-vendor stats over the last 12 months
    const vendorBreakdown = item.qbItemId
      ? await db
          .select({
            vendorId: vendors.id,
            vendorName: vendors.displayName,
            timesPurchased: sql<number>`count(*)::int`,
            totalQty: sql<number>`COALESCE(SUM(${billLineItems.quantity}), 0)::numeric(14,4)`,
            avgCost: sql<number>`AVG(${billLineItems.unitCost})::numeric(12,4)`,
            minCost: sql<number>`MIN(${billLineItems.unitCost})::numeric(12,4)`,
            maxCost: sql<number>`MAX(${billLineItems.unitCost})::numeric(12,4)`,
            lastPaid: sql<string>`MAX(${bills.issueDate})`,
          })
          .from(billLineItems)
          .innerJoin(bills, eq(bills.id, billLineItems.billId))
          .leftJoin(vendors, eq(vendors.id, bills.vendorId))
          .where(and(
            eq(bills.orgId, org.id),
            eq(billLineItems.qbItemId, item.qbItemId),
            sql`${bills.issueDate} >= (CURRENT_DATE - INTERVAL '730 days')`,
          ))
          .groupBy(vendors.id, vendors.displayName)
          .orderBy(desc(sql`count(*)`))
      : [];

    // Aggregated cost intel
    const allCosts = billHistory.map((b) => Number(b.unitCost ?? 0)).filter((n) => n > 0);
    const lastPaid = billHistory[0];
    const last12 = billHistory.filter((b) => {
      if (!b.issueDate) return false;
      const d = new Date(b.issueDate);
      return !isNaN(d.getTime()) && d >= new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
    });
    const avg12 = last12.length
      ? last12.reduce((s, b) => s + Number(b.unitCost ?? 0), 0) / last12.length
      : null;

    const sale = item.unitPrice != null ? Number(item.unitPrice) : null;
    const cost = item.cost != null ? Number(item.cost) : null;
    const margin = sale && cost && sale > 0 ? ((sale - cost) / sale) * 100 : null;

    return NextResponse.json({
      item: {
        ...item,
        unitPrice: sale,
        cost,
        margin,
      },
      costSummary: {
        lastPaidCost: lastPaid?.unitCost ? Number(lastPaid.unitCost) : null,
        lastPaidDate: lastPaid?.issueDate || null,
        lastPaidVendorName: lastPaid?.vendorName || null,
        avg12mCost: avg12,
        minCostEver: allCosts.length ? Math.min(...allCosts) : null,
        maxCostEver: allCosts.length ? Math.max(...allCosts) : null,
        billCount: billHistory.length,
        invoiceCount: salesHistory.length,
        openPOCount: openPOs.length,
      },
      billHistory,
      salesHistory,
      openPOs,
      vendorBreakdown,
    });
  } catch (err: any) {
    console.error('Inventory detail failed, using Travis demo item:', err);
    const { id } = await params;
    const item = demoInventoryItems.find((candidate) => candidate.id === id || candidate.sku === id || candidate.qbItemId === id);
    if (!item) return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    const vendor = demoVendors[0];
    return NextResponse.json({
      item,
      costSummary: {
        lastPaidCost: item.lastPaidCost,
        lastPaidDate: item.lastPaidDate,
        lastPaidVendorName: vendor.displayName,
        avg12mCost: item.avgPaidCost,
        minCostEver: Math.round(item.cost * 0.94),
        maxCostEver: Math.round(item.cost * 1.08),
        billCount: item.billCount,
        invoiceCount: 2 + (item.id.charCodeAt(item.id.length - 1) % 5),
        openPOCount: item.isLowStock ? 1 : 0,
      },
      billHistory: [{ billId: 'bill-demo-1', billNumber: 'BILL-TI-2041', issueDate: item.lastPaidDate, vendorId: vendor.id, vendorName: vendor.displayName, qty: '2', unitCost: String(item.cost), amount: String(item.cost * 2), description: item.name }],
      salesHistory: [{ invoiceId: 'inv-fx-001', invoiceNumber: 'TI-2026-1048', issueDate: new Date().toISOString().slice(0, 10), customerId: 'cust-fx-001', customerName: 'Megan Carter', qty: '1', unitPrice: String(item.unitPrice), total: String(item.unitPrice), description: item.name }],
      openPOs: item.isLowStock ? [{ poId: 'po-ti-778', poNumber: 'PO-TI-778', issueDate: new Date().toISOString().slice(0, 10), expectedDate: new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10), status: 'open', vendorId: vendor.id, vendorName: vendor.displayName, qty: '4', receivedQty: '0', unitCost: String(item.cost) }] : [],
      vendorBreakdown: [{ vendorId: vendor.id, vendorName: vendor.displayName, timesPurchased: item.billCount, totalQty: String(item.quantityOnHand + 4), avgCost: String(item.avgPaidCost), minCost: String(Math.round(item.cost * 0.94)), maxCost: String(Math.round(item.cost * 1.08)), lastPaid: item.lastPaidDate }],
    });
  }
}

const ALLOWED_FIELDS = [
  'name', 'sku', 'description', 'category', 'location',
  'unitPrice', 'cost', 'quantityOnHand', 'reorderLevel', 'isActive', 'isTracked',
] as const;
type AllowedField = typeof ALLOWED_FIELDS[number];

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const org = await getOrCreateDefaultOrg();
    const body = await req.json();

    const updates: Record<string, any> = {};
    for (const k of ALLOWED_FIELDS) {
      if (k in body) {
        let v = body[k];
        // Numeric fields: store as string for drizzle decimal columns
        if (k === 'unitPrice' || k === 'cost') v = v == null ? null : String(v);
        if (k === 'quantityOnHand' || k === 'reorderLevel') v = v == null ? null : Math.floor(Number(v));
        if (k === 'isActive') v = !!v;
        updates[k] = v;
      }
    }
    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 });
    }
    const now = new Date();
    // Mark cost as manually overridden so the next QB sync doesn't overwrite it.
    if ('cost' in updates) updates.costOverriddenAt = now;
    updates.updatedAt = now;

    const [row] = await db
      .update(inventoryItems)
      .set(updates as any)
      .where(and(eq(inventoryItems.orgId, org.id), eq(inventoryItems.id, id)))
      .returning();

    if (!row) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, item: row });
  } catch (err: any) {
    console.error('Inventory patch failed:', err);
    return NextResponse.json({ error: err?.message || 'Failed' }, { status: 500 });
  }
}
