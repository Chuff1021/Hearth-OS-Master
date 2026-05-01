import { MapPin, Navigation, Phone } from "lucide-react";

const showrooms = [
  {
    name: "Naperville Showroom",
    shortName: "Naperville",
    address: "503 W. 87th Street",
    city: "Naperville, IL 60565",
    phone: "630-778-1781",
    mapQuery: "A Cozy Fireplace 503 W 87th Street Naperville IL 60565",
    position: "left-[20%] top-[12%]",
  },
  {
    name: "Crest Hill Showroom",
    shortName: "Crest Hill",
    address: "2124 Plainfield Road",
    city: "Crest Hill, IL 60403",
    phone: "815-725-5556",
    mapQuery: "A Cozy Fireplace 2124 Plainfield Road Crest Hill IL 60403",
    position: "left-[27%] top-[72%]",
  },
  {
    name: "New Lenox Showroom",
    shortName: "New Lenox",
    address: "390 N. Cedar Road",
    city: "New Lenox, IL 60451",
    phone: "815-462-8889",
    mapQuery: "A Cozy Fireplace 390 N Cedar Road New Lenox IL 60451",
    position: "left-[79%] top-[87%]",
  },
];

export function ShowroomMap() {
  const allLocationsQuery = encodeURIComponent(
    "A Cozy Fireplace Naperville Crest Hill New Lenox IL"
  );
  const mapBBox = "-88.22,41.48,-87.90,41.76";

  return (
    <section className="relative overflow-hidden bg-[#f7fbff] px-4 py-16 md:px-6 md:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#002e5b]/35 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#002e5b]">
            Three Local Showrooms
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#001f3d] md:text-5xl">
            Visit A Cozy Fireplace in Naperville, Crest Hill, or New Lenox.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#52677d] md:text-lg">
            Stop into the showroom closest to you for fireplace planning, inserts,
            stoves, gas logs, grills, glass doors, accessories, parts, and service
            help from an experienced local hearth team.
          </p>

          <div className="mt-8 grid gap-4">
            {showrooms.map((showroom) => (
              <article
                key={showroom.name}
                className="group border border-[#c8d8e8] bg-white p-5 shadow-[0_18px_55px_rgba(0,46,91,0.08)] transition hover:-translate-y-0.5 hover:border-[#002e5b]/55 hover:shadow-[0_24px_70px_rgba(0,46,91,0.14)]"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#002e5b] text-[#fde428]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-black text-[#001f3d]">{showroom.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#52677d]">
                      {showroom.address}<br />{showroom.city}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={`tel:${showroom.phone.replace(/[^0-9]/g, "")}`}
                        className="inline-flex items-center gap-2 bg-[#fde428] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#001f3d] transition hover:bg-[#fff06a]"
                      >
                        <Phone className="h-3.5 w-3.5" /> {showroom.phone}
                      </a>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(showroom.mapQuery)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border border-[#002e5b]/20 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#002e5b] transition hover:border-[#002e5b] hover:bg-[#002e5b] hover:text-white"
                      >
                        <Navigation className="h-3.5 w-3.5" /> Directions
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="overflow-hidden border border-[#002e5b]/20 bg-white shadow-[0_28px_90px_rgba(0,46,91,0.18)]">
          <div className="relative min-h-[560px] bg-[#d9e6ee]">
            <iframe
              title="A Cozy Fireplace showroom map"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(mapBBox)}&layer=mapnik`}
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0 grayscale-[15%] saturate-[0.95]"
            />

            <div className="pointer-events-none absolute inset-0">
              {showrooms.map((showroom) => (
                <a
                  key={showroom.name}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(showroom.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`pointer-events-auto group absolute ${showroom.position} z-10 -translate-x-1/2 -translate-y-full`}
                  aria-label={`Open directions to ${showroom.name}`}
                >
                  <div className="relative flex flex-col items-center">
                    <div className="absolute top-8 h-11 w-11 rounded-full bg-[#002e5b]/25 blur-md" />
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#fde428] text-[#002e5b] shadow-[0_16px_40px_rgba(0,46,91,0.42)] transition group-hover:-translate-y-1 group-hover:scale-105">
                      <MapPin className="h-7 w-7 fill-[#002e5b]" />
                    </div>
                    <div className="mt-2 whitespace-nowrap border border-[#002e5b]/15 bg-white px-3 py-2 text-center shadow-[0_12px_30px_rgba(0,46,91,0.22)]">
                      <p className="text-sm font-black text-[#001f3d]">{showroom.shortName}</p>
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#002e5b]">A Cozy Fireplace</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3 border border-[#002e5b]/15 bg-white/95 p-4 shadow-[0_18px_45px_rgba(0,46,91,0.16)] sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#002e5b]">Showroom Map</p>
                <p className="mt-1 text-sm font-semibold text-[#52677d]">Real map view with fixed pins for all three A Cozy Fireplace locations.</p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${allLocationsQuery}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#002e5b] px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#001f3d]"
              >
                <Navigation className="h-3.5 w-3.5" /> Open Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
