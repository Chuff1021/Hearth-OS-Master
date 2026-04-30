const today = () => new Date().toISOString().split("T")[0];
const daysAgo = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
};

export const fireplacexBrand = {
  name: "Travis Industries",
  fullName: "Travis Industries Dealer Ops",
  poweredBy: "powered by Hearth-OS",
  userName: "Mason",
  userEmail: "mason@travis-demo.com",
  tagline: "Premium hearth manufacturing, dealer operations, installs, and service.",
};

export const demoTechs = [
  { id: "tech-fx-001", name: "Mason Reed", email: "mason.reed@fireplacex-demo.com", phone: "(503) 555-0184", color: "#B91C1C", initials: "MR", role: "lead", active: true, skills: ["Gas inserts", "DaVinci installs", "Venting"], certifications: ["NFI Gas", "Factory Certified"], hireDate: "2022-03-14" },
  { id: "tech-fx-002", name: "Elena Cruz", email: "elena.cruz@fireplacex-demo.com", phone: "(503) 555-0147", color: "#D97706", initials: "EC", role: "tech", active: true, skills: ["Wood inserts", "Annual service", "Troubleshooting"], certifications: ["NFI Wood"], hireDate: "2023-06-02" },
  { id: "tech-fx-003", name: "Tyler Brooks", email: "tyler.brooks@fireplacex-demo.com", phone: "(503) 555-0129", color: "#374151", initials: "TB", role: "tech", active: true, skills: ["Install helper", "Chase inspections", "Parts"], certifications: ["Apprentice"], hireDate: "2024-01-22" },
  { id: "tech-fx-004", name: "Nina Patel", email: "nina.patel@fireplacex-demo.com", phone: "(503) 555-0166", color: "#7F1D1D", initials: "NP", role: "dispatcher", active: true, skills: ["Dispatch", "Permits", "Customer care"], certifications: [], hireDate: "2021-09-09" },
] as const;

export const demoCustomers = [
  { id: "cust-fx-001", displayName: "Megan Carter", firstName: "Megan", lastName: "Carter", email: "megan.carter@example.com", phone: "(503) 555-0118", address: { line1: "1842 Alder Ridge Dr", city: "Lake Oswego", state: "OR", zip: "97034" }, balance: 3240, active: true, tags: ["FireplaceX", "Install"], totalJobs: 3, totalRevenue: 18950, notes: "Interested in black glass media upgrade.", createdAt: daysAgo(44), updatedAt: daysAgo(1) },
  { id: "cust-fx-002", displayName: "North Ridge Builders", firstName: "Avery", lastName: "Stone", companyName: "North Ridge Builders", email: "avery@northridge.example", phone: "(971) 555-0199", address: { line1: "720 Builder Way", city: "Bend", state: "OR", zip: "97702" }, balance: 12875, active: true, tags: ["Builder", "Multi-unit"], totalJobs: 8, totalRevenue: 64200, notes: "Builder account demo.", createdAt: daysAgo(90), updatedAt: daysAgo(2) },
  { id: "cust-fx-003", displayName: "Caleb Morris", firstName: "Caleb", lastName: "Morris", email: "caleb.morris@example.com", phone: "(360) 555-0133", address: { line1: "55 Fir Lane", city: "Vancouver", state: "WA", zip: "98660" }, balance: 0, active: true, tags: ["Service", "Parts"], totalJobs: 2, totalRevenue: 1490, notes: "Needs blower fitment verified.", createdAt: daysAgo(21), updatedAt: daysAgo(3) },
] as const;

export const demoInvoices = [
  { id: "inv-fx-001", invoiceNumber: "FX-2026-1048", customerId: "cust-fx-001", customerName: "Megan Carter", jobNumber: "FX-J1048", jobTitle: "4415 HO GSR2 install deposit", issueDate: today(), dueDate: today(), status: "sent", subtotal: 12000, taxRate: 0, taxAmount: 0, totalAmount: 12000, balance: 3240, lineItems: [{ id: "line-1", description: "Fireplace Xtrordinair 4415 HO GSR2 install package", qty: 1, unitPrice: 12000, total: 12000 }], notes: "Demo invoice", createdAt: daysAgo(3), updatedAt: daysAgo(1) },
  { id: "inv-fx-002", invoiceNumber: "FX-2026-1049", customerId: "cust-fx-002", customerName: "North Ridge Builders", jobNumber: "FX-J1049", jobTitle: "Builder rough-in package", issueDate: daysAgo(2).slice(0,10), dueDate: today(), status: "overdue", subtotal: 12875, taxRate: 0, taxAmount: 0, totalAmount: 12875, balance: 12875, lineItems: [{ id: "line-1", description: "DaVinci rough-in and venting package", qty: 1, unitPrice: 12875, total: 12875 }], notes: "Demo invoice", createdAt: daysAgo(6), updatedAt: daysAgo(2) },
  { id: "inv-fx-003", invoiceNumber: "FX-2026-1050", customerId: "cust-fx-003", customerName: "Caleb Morris", jobNumber: "FX-J1050", jobTitle: "Blower kit service", issueDate: daysAgo(4).slice(0,10), dueDate: daysAgo(1).slice(0,10), status: "paid", subtotal: 489, taxRate: 0, taxAmount: 0, totalAmount: 489, balance: 0, lineItems: [{ id: "line-1", description: "FireplaceX compatible blower kit", qty: 1, unitPrice: 489, total: 489 }], notes: "Demo invoice", createdAt: daysAgo(5), updatedAt: daysAgo(1) },
] as const;

export const demoJobs = [
  { id: "job-fx-001", jobNumber: "FX-J1048", title: "FireplaceX 4415 HO install", customerId: "cust-fx-001", customerName: "Megan Carter", propertyAddress: "1842 Alder Ridge Dr, Lake Oswego, OR", fireplaceUnit: { brand: "FireplaceX", model: "4415 HO GSR2", nickname: "Great room", type: "gas fireplace" }, jobType: "installation", status: "in_progress", priority: "high", scheduledDate: today(), scheduledTimeStart: "09:00", scheduledTimeEnd: "12:30", assignedTechs: [demoTechs[0], demoTechs[2]].map(({ id, name, color }) => ({ id, name, color })), totalAmount: 12000, notes: "Set unit, verify vent path, confirm black glass upgrade.", createdAt: daysAgo(8), updatedAt: daysAgo(0) },
  { id: "job-fx-002", jobNumber: "FX-J1049", title: "DaVinci linear site measure", customerId: "cust-fx-002", customerName: "North Ridge Builders", propertyAddress: "720 Builder Way, Bend, OR", fireplaceUnit: { brand: "DaVinci", model: "See-Thru Linear 48x20", nickname: "Lot 12 model home", type: "custom gas" }, jobType: "estimate", status: "scheduled", priority: "normal", scheduledDate: today(), scheduledTimeStart: "13:30", scheduledTimeEnd: "15:00", assignedTechs: [demoTechs[1]].map(({ id, name, color }) => ({ id, name, color })), totalAmount: 0, notes: "Builder wants three finish options.", createdAt: daysAgo(5), updatedAt: daysAgo(1) },
  { id: "job-fx-003", jobNumber: "FX-J1050", title: "Lopi blower kit fitment", customerId: "cust-fx-003", customerName: "Caleb Morris", propertyAddress: "55 Fir Lane, Vancouver, WA", fireplaceUnit: { brand: "Lopi", model: "Endeavor NexGen-Fyre", nickname: "Family room", type: "wood insert" }, jobType: "service", status: "completed", priority: "normal", scheduledDate: today(), scheduledTimeStart: "08:00", scheduledTimeEnd: "09:00", assignedTechs: [demoTechs[1]].map(({ id, name, color }) => ({ id, name, color })), totalAmount: 489, notes: "Completed demo service call.", completedAt: daysAgo(0), createdAt: daysAgo(4), updatedAt: daysAgo(0) },
] as const;

export const demoActivity = [
  { id: "act-fx-001", type: "payment", title: "Payment received", description: "FX-2026-1050 · $489.00 · card", actor: "Caleb Morris", amount: 489, at: new Date().toISOString(), href: "/payments", status: null },
  { id: "act-fx-002", type: "invoice", title: "Invoice sent", description: "FX-2026-1048 · $12,000.00 · $3,240.00 open", actor: "Megan Carter", amount: 12000, at: daysAgo(1), href: "/invoices", status: "sent" },
  { id: "act-fx-003", type: "estimate", title: "Estimate sent", description: "FX-EST-2217 · $28,600.00", actor: "North Ridge Builders", amount: 28600, at: daysAgo(2), href: "/estimates", status: "pending" },
  { id: "act-fx-004", type: "po", title: "PO sent", description: "PO-FX-778 · $8,940.00", actor: "Travis Industries Demo Supply", amount: 8940, at: daysAgo(3), href: "/purchase-orders", status: "open" },
] as const;
