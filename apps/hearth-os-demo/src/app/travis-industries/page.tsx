import Link from "next/link";
import { travisDemo } from "@/lib/travis-demo-data";

const toneClass: Record<string, string> = {
  green: "border-emerald-200 bg-emerald-50 text-emerald-900",
  amber: "border-amber-200 bg-amber-50 text-amber-950",
  blue: "border-sky-200 bg-sky-50 text-sky-950",
  purple: "border-violet-200 bg-violet-50 text-violet-950",
};

export const metadata = {
  title: "Travis Industries powered by Hearth-OS Demo",
  description:
    "Demo Hearth-OS operating dashboard for Travis Industries dealer ecommerce, service, parts, payments, and manufacturer analytics workflows.",
};

export default function TravisIndustriesDemoPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#201914]">
      <section className="relative overflow-hidden bg-[#12100d] px-6 py-10 text-white md:px-10 md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(245,122,24,0.24),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.12),transparent_20%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ff9a3d]">
                Manufacturer Demo Environment
              </p>
              <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.055em] md:text-7xl">
                {travisDemo.manufacturer} powered by {travisDemo.poweredBy}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#e8d8c4]">
                A white-label dealer operating platform connecting Travis-branded ecommerce, service intake, parts fitment, payment processing, and Hearth-OS dealer workflows.
              </p>
            </div>
            <div className="min-w-[280px] border border-white/15 bg-white/[0.08] p-5 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffb36b]">Demo dealer</p>
              <p className="mt-2 text-2xl font-black">{travisDemo.demoDealer}</p>
              <p className="mt-2 text-sm text-[#e8d8c4]">{travisDemo.territory}</p>
              <p className="mt-4 text-xs text-[#bda68f]">{travisDemo.period}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {travisDemo.brands.map((brand) => (
              <span key={brand} className="rounded-full border border-[#ff7a18]/35 bg-[#ff7a18]/10 px-4 py-2 text-sm font-bold text-[#ffd6ad]">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-6 py-8 md:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {travisDemo.kpis.map((kpi) => (
            <div key={kpi.label} className={`border p-5 shadow-sm ${toneClass[kpi.tone]}`}>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] opacity-75">{kpi.label}</p>
              <p className="mt-3 text-4xl font-black tracking-[-0.04em]">{kpi.value}</p>
              <p className="mt-3 text-sm leading-6 opacity-80">{kpi.note}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.45fr_0.9fr]">
          <section className="border border-[#dfd2c1] bg-white p-6 shadow-[0_24px_80px_rgba(32,20,10,0.08)]">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b84d13]">Superstore intake</p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">Website orders and service requests landing in Hearth-OS</h2>
              </div>
              <Link href="/" className="text-sm font-black uppercase tracking-[0.14em] text-[#b84d13] hover:text-[#ff7a18]">
                Open Hearth-OS dashboard
              </Link>
            </div>

            <div className="mt-6 overflow-hidden border border-[#eadfce]">
              <div className="grid grid-cols-[0.7fr_1fr_1.2fr_0.7fr_1fr] bg-[#211812] px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#ffd6ad]">
                <span>Event</span><span>Customer</span><span>Product / SKU</span><span>Value</span><span>Status</span>
              </div>
              {travisDemo.ecommerceEvents.map((event) => (
                <div key={event.id} className="grid grid-cols-[0.7fr_1fr_1.2fr_0.7fr_1fr] gap-3 border-t border-[#eadfce] px-4 py-4 text-sm">
                  <div><p className="font-black">{event.id}</p><p className="mt-1 text-xs text-[#806f60]">{event.type}</p></div>
                  <div><p className="font-bold">{event.customer}</p><p className="mt-1 text-xs text-[#806f60]">{event.source}</p></div>
                  <div><p className="font-bold">{event.product}</p><p className="mt-1 text-xs text-[#806f60]">{event.sku}</p></div>
                  <div className="font-black text-[#1d5f39]">{event.value}</div>
                  <div><p className="font-bold text-[#7a3d12]">{event.status}</p><p className="mt-1 text-xs text-[#806f60]">{event.nextStep}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="border border-[#dfd2c1] bg-white p-6 shadow-[0_24px_80px_rgba(32,20,10,0.08)]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b84d13]">Payment revenue model</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">Processing economics demo</h2>
            <p className="mt-3 text-sm leading-6 text-[#6f6255]">
              Illustrative numbers only. This panel is designed to help manufacturer partners understand the payment-volume opportunity across authorized dealers.
            </p>
            <div className="mt-6 grid gap-3">
              {travisDemo.paymentModel.map((item) => (
                <div key={item.label} className="flex items-center justify-between border border-[#eadfce] bg-[#fff8ef] px-4 py-3">
                  <span className="text-sm text-[#6f6255]">{item.label}</span>
                  <span className="font-black text-[#201914]">{item.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <section className="border border-[#dfd2c1] bg-white p-6 shadow-[0_24px_80px_rgba(32,20,10,0.08)]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b84d13]">Service operations</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">Dealer service board</h2>
            <div className="mt-6 space-y-3">
              {travisDemo.serviceRequests.map((request) => (
                <div key={`${request.window}-${request.customer}`} className="border border-[#eadfce] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-black">{request.customer}</p>
                      <p className="mt-1 text-sm text-[#6f6255]">{request.job}</p>
                    </div>
                    <span className="rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#7a3d12]">{request.status}</span>
                  </div>
                  <p className="mt-3 text-sm text-[#806f60]">{request.window} · Tech: {request.tech}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border border-[#dfd2c1] bg-[#211812] p-6 text-white shadow-[0_24px_80px_rgba(32,20,10,0.16)]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ff9a3d]">Manufacturer visibility</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">What Travis can see across the network</h2>
            <div className="mt-6 grid gap-3">
              {travisDemo.analytics.map((item) => (
                <div key={item} className="border border-white/10 bg-white/[0.06] px-4 py-4 text-sm leading-6 text-[#f1dfca]">
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="border border-[#dfd2c1] bg-white p-6 shadow-[0_24px_80px_rgba(32,20,10,0.08)]">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b84d13]">Demo build notes</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">Safe test-data environment</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-[#6f6255]">
            This Travis Industries demo uses synthetic dealer, customer, order, service, and payment data. The next integration pass should connect the demo Superstore intake forms to a Hearth-OS demo API contract so quote requests, service appointments, and parts-fitment requests appear here automatically.
          </p>
        </section>
      </section>
    </main>
  );
}
