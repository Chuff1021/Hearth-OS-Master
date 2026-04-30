import Link from "next/link";
import Image from "next/image";
import { Flame, Search, ShieldCheck, Truck, Wrench } from "lucide-react";
import { defaultStoreConfig } from "@/lib/store-config";

const trustItems = [
  { icon: ShieldCheck, label: "In business since 1995" },
  { icon: Wrench, label: "Fireplace expertise" },
  { icon: Truck, label: "Three Illinois showrooms" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#001f3d] text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero/hero-fireplace.jpg"
          alt="Premium fireplace showroom living space"
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(255,122,24,0.28),transparent_34%),linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.92)_33%,rgba(5,5,5,0.58)_67%,rgba(5,5,5,0.30)_100%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[690px] max-w-[1640px] items-center gap-12 px-4 py-16 md:px-5 lg:grid-cols-[1.02fr_0.78fr] lg:py-24">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex max-w-full items-center gap-2 border border-[#fde428]/40 bg-black/45 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#fde428] backdrop-blur sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
            <Flame className="h-4 w-4 fill-[#fde428] text-[#fde428]" />
            A Cozy Fireplace · Est. 1995
          </div>

          <h1 className="max-w-4xl text-[38px] font-black leading-[1.08] tracking-[-0.035em] text-white md:text-[54px] xl:text-[66px]">
            A Warmer Home Starts at A Cozy Fireplace
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#eef6ff] md:text-xl">
            Shop fireplaces, inserts, stoves, gas logs, grills, glass doors, accessories, and replacement parts with help from a neighborhood hearth specialist serving Naperville, Crest Hill, and New Lenox.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/category/fireplaces"
              className="inline-flex items-center justify-center bg-[#fde428] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-[#fff06a]"
            >
              Shop Fireplaces
            </Link>
            <Link
              href="/category/parts"
              className="inline-flex items-center justify-center border border-white/30 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur transition hover:border-[#fde428] hover:text-[#fde428]"
            >
              Shop Parts
            </Link>
            <Link
              href="/service-appointment"
              className="inline-flex items-center justify-center border border-[#fde428]/50 bg-black/35 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#fde428] backdrop-blur transition hover:bg-[#fde428] hover:text-black"
            >
              Schedule Service
            </Link>
          </div>

          <form action="/search" method="GET" className="mt-9 max-w-2xl border border-white/15 bg-white p-2 shadow-2xl shadow-black/40">
            <div className="flex min-h-14 flex-col gap-2 sm:h-14 sm:flex-row sm:items-center sm:gap-0">
              <div className="flex h-12 min-w-0 flex-1 items-center sm:h-full">
                <Search className="ml-3 h-5 w-5 shrink-0 text-[#52677d] sm:ml-4" />
                <input
                  name="q"
                  placeholder="Search model, SKU, or part"
                  className="h-full min-w-0 flex-1 px-3 text-sm text-[#001f3d] outline-none sm:px-4 sm:text-base"
                />
              </div>
              <button className="h-12 bg-[#002e5b] px-5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#fde428] hover:text-black sm:h-full sm:px-6">
                Search
              </button>
            </div>
          </form>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 border border-white/10 bg-black/30 px-4 py-3 text-sm text-[#eef6ff] backdrop-blur">
                <Icon className="h-5 w-5 text-[#fde428]" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="ml-auto max-w-[500px] border border-[#fde428]/35 bg-black/55 p-6 shadow-2xl shadow-black/50 backdrop-blur">
            <Image
              src="/logo.png"
              alt={defaultStoreConfig.storeName}
              width={1100}
              height={1016}
              className="mx-auto h-auto w-full"
              priority
            />
            <div className="mt-6 border-t border-white/10 pt-5 text-center">
              <Link
                href="/design-tool"
                className="mx-auto inline-flex items-center justify-center bg-[#fde428] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-[#fff06a]"
              >
                Get Help Choosing a Fireplace
              </Link>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#dbe8f7]">
                Get help choosing the right fireplace, insert, stove, or gas log set for your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
