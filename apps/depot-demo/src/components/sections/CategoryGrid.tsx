import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame } from "lucide-react";
import { productCategories } from "@/lib/store-config";

const categoryVisuals: Record<string, string> = {
  fireplaces: "/products-upgraded/gas-fireplaces/fpx-34dvldeluxeemberglo-3.webp",
  inserts: "/products-upgraded/gas-inserts/lopi-evergreennexgenhybridinsert.webp",
  stoves: "/products-upgraded/wood-stoves/lopi-evergreennexgenhybrid.webp",
  "bbq-grills": "/depot/mhp-grill-family.jpg",
  "logs-media": "/depot/Hearth_Classics.jpg",
  "doors-screens": "/depot/Portland_Willamete_doors.jpg",
  "stone-products": "/depot/Boral_Lime_tone-Cedar-1.jpg",
  accessories: "/products-upgraded/accessories/doors-screens/pilgrim-44-inch-forged-iron-fireplace-screen-with-doors-3.webp",
  parts: "/products/parts/insert-ret.jpg",
};

export function CategoryGrid() {
  return (
    <section className="relative overflow-hidden border-t border-[#f0dfcc] bg-[#fbf4ea] py-16 text-[#111111] md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(253,228,40,0.18),transparent_28%),radial-gradient(circle_at_84%_30%,rgba(255,184,105,0.22),transparent_24%),linear-gradient(180deg,#fffaf3_0%,#f6eadb_52%,#fffaf3_100%)]" />
      <div className="absolute left-1/2 top-0 h-px w-[84%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#e8b900]/65 to-transparent" />

      <div className="relative mx-auto max-w-[1640px] px-4 md:px-5">
        <div className="mb-10 grid gap-6 border-b border-[#c8d8e8] pb-8 lg:grid-cols-[0.95fr_0.55fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.26em] text-[#b91806]">
              <Flame className="h-4 w-4 fill-[#e8b900] text-[#e8b900]" />
              Shop By Category
            </p>
            <h2 className="mt-4 text-[36px] font-black leading-[1.02] tracking-[-0.045em] text-[#111111] md:text-[54px]">
              Shop Fireplaces, Stoves & Inserts, Grills, Stone, Doors, Gas Logs, Parts, and Service
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#5f5140]">
Find the right product line for your project, then visit the Tilton showroom for sizing, finish choices, installation planning, service, and parts support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {productCategories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group relative min-h-[330px] overflow-hidden border border-white/70 bg-white/62 shadow-[0_24px_70px_rgba(82,48,17,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#e8b900]/75 hover:bg-white/80 hover:shadow-[0_30px_90px_rgba(253,228,40,0.20)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/25 to-[#e8b900]/10 opacity-80" />
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#e8b900]/18 blur-3xl transition group-hover:bg-[#e8b900]/32" />

              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#efe2d2]">
                <Image
                  src={categoryVisuals[category.id] ?? category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105 group-hover:saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d120b]/55 via-transparent to-white/10" />
              </div>

              <div className="relative flex min-h-[150px] flex-col px-5 py-5">
                <h3 className="text-xl font-black tracking-[-0.03em] text-[#111111] transition-colors group-hover:text-[#b91806]">
                  {category.name}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6b5d50]">
                  {category.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-5 text-sm font-black uppercase tracking-[0.12em] text-[#b91806]">
                  <span>Shop now</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
