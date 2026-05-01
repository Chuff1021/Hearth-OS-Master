"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Phone, ShieldAlert } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { defaultStoreConfig } from "@/lib/store-config";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export default function CheckoutPage() {
  const { items, getSubtotal, getShipping, getTax, getTotal } = useCartStore();

  const orderSummary = items
    .map((item) => `${item.quantity} x ${item.product.name} (${item.product.sku ?? item.product.id})`)
    .join("\n");
  const mailtoHref = `mailto:${defaultStoreConfig.email}?subject=${encodeURIComponent("Online order / quote request")}&body=${encodeURIComponent(`Hello A Cozy Fireplace,\n\nI would like help completing this order or quote request:\n\n${orderSummary}\n\nEstimated subtotal: ${formatPrice(getSubtotal())}\nEstimated shipping shown online: ${formatPrice(getShipping())}\nEstimated tax shown online: ${formatPrice(getTax())}\nEstimated total shown online: ${formatPrice(getTotal())}\n\nName:\nPhone:\nShipping address:\nQuestions / notes:\n`)}`;

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#f6efe5] px-4 py-16 text-center">
        <h1 className="text-3xl font-black tracking-[-0.04em] text-[#001f3d]">Your cart is empty</h1>
        <p className="mx-auto mt-3 max-w-xl text-[#52677d]">Add fireplaces, parts, or accessories before requesting help with an order.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 bg-[#fde428] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#fff06a]">
          <ArrowLeft className="h-4 w-4" /> Continue shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6efe5]">
      <section className="relative overflow-hidden bg-[#001f3d] px-4 py-16 text-white md:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(253,228,40,0.24),transparent_30%)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#fde428]">Order request</p>
          <h1 className="mt-5 text-[42px] font-black leading-[0.98] tracking-[-0.055em] md:text-[68px]">Complete your order with A Cozy Fireplace.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d7e6f7]">
            Online card checkout is temporarily disabled for launch safety. We are not collecting card numbers on this website until a real payment processor is connected. Send this cart to A Cozy Fireplace and we&apos;ll confirm price, availability, shipping, and payment options directly.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[1fr_0.42fr]">
        <div className="border border-[#c8d8e8] bg-white p-6 shadow-[0_24px_80px_rgba(32,20,10,0.10)] md:p-8">
          <div className="flex items-start gap-4 border border-[#ffd0a3] bg-[#f7fbff] p-5">
            <ShieldAlert className="mt-1 h-6 w-6 shrink-0 text-[#fde428]" />
            <div>
              <h2 className="text-2xl font-black tracking-[-0.04em] text-[#001f3d]">No payment information is collected here.</h2>
              <p className="mt-2 text-sm leading-6 text-[#52677d]">This protects customers and keeps the live site honest while payment/order infrastructure is finished.</p>
            </div>
          </div>

          <h3 className="mt-8 text-xl font-black text-[#001f3d]">Cart items</h3>
          <div className="mt-4 divide-y divide-[#c8d8e8] border border-[#c8d8e8]">
            {items.map((item) => (
              <div key={item.product.id} className="grid gap-3 p-4 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="font-black text-[#001f3d]">{item.product.name}</p>
                  <p className="mt-1 text-sm text-[#52677d]">Qty: {item.quantity}{item.product.sku ? ` · SKU: ${item.product.sku}` : ""}</p>
                </div>
                <div className="font-black text-[#001f3d]">{formatPrice((item.product.salePrice ?? item.product.price) * item.quantity)}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={mailtoHref} className="inline-flex items-center justify-center gap-2 bg-[#fde428] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-[#fff06a]">
              <Mail className="h-4 w-4" /> Email this cart
            </a>
            <a href={`tel:${defaultStoreConfig.phone}`} className="inline-flex items-center justify-center gap-2 border border-[#001f3d] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#001f3d] transition hover:bg-[#001f3d] hover:text-white">
              <Phone className="h-4 w-4" /> Call {defaultStoreConfig.phone}
            </a>
          </div>
        </div>

        <aside className="h-fit border border-[#c8d8e8] bg-[#ffffff] p-6 shadow-[0_24px_80px_rgba(32,20,10,0.08)]">
          <h2 className="text-xl font-black text-[#001f3d]">Estimated summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-[#52677d]">Subtotal</span><span className="font-bold text-[#001f3d]">{formatPrice(getSubtotal())}</span></div>
            <div className="flex justify-between"><span className="text-[#52677d]">Shipping estimate</span><span className="font-bold text-[#001f3d]">{formatPrice(getShipping())}</span></div>
            <div className="flex justify-between"><span className="text-[#52677d]">Tax estimate</span><span className="font-bold text-[#001f3d]">{formatPrice(getTax())}</span></div>
            <div className="flex justify-between border-t border-[#c8d8e8] pt-4 text-lg"><span className="font-black text-[#001f3d]">Estimated total</span><span className="font-black text-[#fde428]">{formatPrice(getTotal())}</span></div>
          </div>
          <p className="mt-5 text-xs leading-5 text-[#52677d]">Final availability, freight, tax, and payment method must be confirmed by A Cozy Fireplace</p>
        </aside>
      </section>
    </main>
  );
}
