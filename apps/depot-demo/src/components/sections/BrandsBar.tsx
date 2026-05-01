import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { cozyBrandNames } from "@/lib/store-config";

const brandGroups = [
  { label: "Fireplaces", brands: ["Fireplace Xtrordinair", "Majestic", "Dimplex", "DaVinci Fireplaces"] },
  { label: "Stoves & Inserts", brands: ["Lopi", "Fireplace Xtrordinair"] },
  { label: "Grills", brands: ["Green Mountain Grills", "MHP Grills", "LumberJack Cooking Pellets"] },
  { label: "Other Products", brands: ["Boral Stone Products", "Portland Willamette", "Stoll Industries", "Hargrove Gas Logs"] },
  { label: "Mantels & Hearth", brands: ["Hearth Classics", "MagraHearth", "Log Style Mantels", "Pearl Mantels"] },
  { label: "Accessories", brands: ["Premier Mantel Co.", "Ironhaus", "Dagan Industries"] },
];

function slugifyBrand(name: string) {
  return name.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function BrandsBar() {
  return (
    <section className="relative overflow-hidden border-t border-[#e8b900]/20 bg-[#111111] py-16 text-white md:py-20" id="featured-brands">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(253,228,40,0.18),transparent_30%),radial-gradient(circle_at_84%_66%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,#111111_0%,#111111_58%,#001426_100%)]" />
      <div className="relative mx-auto max-w-[1640px] px-4 md:px-5">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_0.55fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.26em] text-[#e8b900]">
              <ShieldCheck className="h-4 w-4 text-[#e8b900]" />
              The Depot Fireplace and Stove Center Brand Lines
            </p>
            <h2 className="mt-4 text-[34px] font-black leading-[1.04] tracking-[-0.045em] text-white md:text-[52px]">
              Brands available through The Depot Fireplace and Stove Center.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#f7efd6]">
            Browse the fireplace, stove, grill, gas log, glass door, stone, and accessory manufacturers represented across The Depot Fireplace and Stove Center's showroom product lines.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4 xl:grid-cols-4">
          {brandGroups.map((group) => (
            <div key={group.label} className="border border-white/12 bg-white/[0.06] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e8b900]">{group.label}</p>
              <div className="mt-4 grid gap-3">
                {group.brands.map((brand) => (
                  <Link
                    key={brand}
                    href={`/brand/${slugifyBrand(brand)}`}
                    className="group flex min-h-16 items-center justify-between border border-white/12 bg-white px-4 py-3 text-[#111111] transition hover:-translate-y-0.5 hover:border-[#e8b900] hover:shadow-[0_18px_42px_rgba(253,228,40,0.22)]"
                  >
                    <span className="text-base font-black tracking-[-0.02em]">{brand}</span>
                    <ArrowRight className="h-4 w-4 text-[#111111] transition group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/brand"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-sm backdrop-blur-md transition hover:border-[#e8b900] hover:bg-[#e8b900] hover:text-black"
          >
            View The Depot Brands <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
