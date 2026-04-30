import { seoMetadata } from "@/lib/seo-metadata";
import Link from "next/link";

export const metadata = seoMetadata({
  title: 'Returns & Exchanges',
  description: "Return and exchange guidance for fireplace parts, hearth appliances, accessories, damaged shipments, and order issues from A Cozy Fireplace",
  path: "/returns",
});

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6efe5]">
      <section className="relative overflow-hidden bg-[#001f3d] px-4 py-16 text-white md:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(253,228,40,0.24),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(255,179,107,0.12),transparent_24%)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#fde428]">Customer service</p>
          <h1 className="mt-5 text-[42px] font-black leading-[0.98] tracking-[-0.055em] md:text-[68px]">Returns & Exchanges</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d7e6f7]">Fireplace parts and hearth products must be matched carefully. Contact A Cozy Fireplace before returning an item so we can confirm eligibility, condition, packaging, and the correct next step.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        <div className="border border-[#c8d8e8] bg-[#ffffff] p-6 shadow-[0_24px_80px_rgba(32,20,10,0.10)] md:p-8">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#201914]">What to know</h2>
          <ul className="mt-6 grid gap-4">
            <li className="border border-[#c8d8e8] bg-[#f7fbff] px-5 py-4 text-[#52677d]">Return requests should be started before shipping anything back.</li>
            <li className="border border-[#c8d8e8] bg-[#f7fbff] px-5 py-4 text-[#52677d]">Special-order, installed, used, electrical, and gas components may be restricted by manufacturer policy.</li>
            <li className="border border-[#c8d8e8] bg-[#f7fbff] px-5 py-4 text-[#52677d]">Damaged or incorrect shipments should be reported as soon as possible with photos and order details.</li>
          </ul>
          <Link href="/contact" className="mt-8 inline-flex bg-[#fde428] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-[#fff06a]">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
