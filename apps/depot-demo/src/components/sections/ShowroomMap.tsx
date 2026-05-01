import { MapPin, Navigation, Phone } from "lucide-react";

const showroom = {
  name: "Tilton Showroom",
  address: "6 Southgate Ct.",
  city: "Tilton, IL 61833",
  phone: "217-443-1060",
  email: "thedepot33@att.net",
  mapQuery: "The Depot Fireplace and Stove Center 6 Southgate Ct Tilton IL 61833",
};

export function ShowroomMap() {
  const embedQuery = encodeURIComponent(showroom.mapQuery);

  return (
    <section className="relative overflow-hidden bg-[#f7efd6] px-4 py-16 md:px-6 md:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b91806]/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#b91806]">Tilton Showroom</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#111111] md:text-5xl">
            Visit The Depot Fireplace and Stove Center in Tilton, Illinois.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5140] md:text-lg">
            Stop into the 2,400 sq. ft. showroom for fireplaces, stoves, inserts, grills, stone, mantels, parts, service, and installation help from a factory-trained Illiana hearth team.
          </p>

          <article className="mt-8 border border-[#d9c48d] bg-white p-5 shadow-[0_18px_55px_rgba(17,17,17,0.10)]">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#111111] text-[#e8b900]">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-black text-[#111111]">{showroom.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[#5f5140]">{showroom.address}<br />{showroom.city}</p>
                <p className="mt-2 text-sm font-semibold text-[#5f5140]">Mon-Fri 8:30 AM-4:00 PM · Sat 9:00 AM-Noon</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={`tel:${showroom.phone.replace(/[^0-9]/g, "")}`} className="inline-flex items-center gap-2 bg-[#e8b900] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#111111] transition hover:bg-[#ffd94a]">
                    <Phone className="h-3.5 w-3.5" /> {showroom.phone}
                  </a>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(showroom.mapQuery)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#111111]/20 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#111111] transition hover:border-[#111111] hover:bg-[#111111] hover:text-white">
                    <Navigation className="h-3.5 w-3.5" /> Directions
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="min-h-[520px] overflow-hidden border border-[#111111]/20 bg-white shadow-[0_28px_90px_rgba(17,17,17,0.18)]">
          <iframe title="The Depot Fireplace and Stove Center showroom map" src={`https://www.google.com/maps?q=${embedQuery}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[520px] w-full" />
        </div>
      </div>
    </section>
  );
}
