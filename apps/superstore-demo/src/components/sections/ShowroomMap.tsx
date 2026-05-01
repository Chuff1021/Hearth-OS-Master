import { MapPin, Navigation, Phone } from "lucide-react";

const showrooms = [
  {
    name: "Naperville Showroom",
    shortName: "Naperville",
    address: "503 W. 87th Street",
    city: "Naperville, IL 60565",
    phone: "630-778-1781",
    mapQuery: "A Cozy Fireplace 503 W 87th Street Naperville IL 60565",
    position: "left-[31%] top-[34%]",
  },
  {
    name: "Crest Hill Showroom",
    shortName: "Crest Hill",
    address: "2124 Plainfield Road",
    city: "Crest Hill, IL 60403",
    phone: "815-725-5556",
    mapQuery: "A Cozy Fireplace 2124 Plainfield Road Crest Hill IL 60403",
    position: "left-[50%] top-[50%]",
  },
  {
    name: "New Lenox Showroom",
    shortName: "New Lenox",
    address: "390 N. Cedar Road",
    city: "New Lenox, IL 60451",
    phone: "815-462-8889",
    mapQuery: "A Cozy Fireplace 390 N Cedar Road New Lenox IL 60451",
    position: "left-[67%] top-[67%]",
  },
];

export function ShowroomMap() {
  const allLocationsQuery = encodeURIComponent(
    "A Cozy Fireplace Naperville Crest Hill New Lenox IL"
  );

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
          <div className="relative min-h-[560px] bg-[#dcecf7]">
            <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(90deg,rgba(0,46,91,0.08)_1px,transparent_1px),linear-gradient(rgba(0,46,91,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_28%,rgba(253,228,40,0.24),transparent_22%),radial-gradient(circle_at_68%_70%,rgba(0,46,91,0.14),transparent_26%)]" />

            <div className="absolute left-[8%] right-[10%] top-[42%] h-3 -rotate-[9deg] rounded-full bg-white/85 shadow-[0_0_0_1px_rgba(0,46,91,0.16)]" />
            <div className="absolute bottom-[18%] left-[20%] right-[12%] h-3 rotate-[16deg] rounded-full bg-white/85 shadow-[0_0_0_1px_rgba(0,46,91,0.16)]" />
            <div className="absolute bottom-[12%] left-[47%] top-[12%] w-3 rotate-[5deg] rounded-full bg-white/85 shadow-[0_0_0_1px_rgba(0,46,91,0.16)]" />
            <div className="absolute left-[18%] top-[18%] rounded-full bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#52677d]">Naperville</div>
            <div className="absolute left-[50%] top-[38%] rounded-full bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#52677d]">Crest Hill</div>
            <div className="absolute bottom-[20%] right-[12%] rounded-full bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#52677d]">New Lenox</div>

            {showrooms.map((showroom) => (
              <a
                key={showroom.name}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(showroom.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className={`group absolute ${showroom.position} z-10 -translate-x-1/2 -translate-y-full`}
                aria-label={`Open directions to ${showroom.name}`}
              >
                <div className="relative flex flex-col items-center">
                  <div className="absolute top-8 h-10 w-10 rounded-full bg-[#002e5b]/18 blur-md transition group-hover:bg-[#002e5b]/28" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#fde428] text-[#002e5b] shadow-[0_16px_40px_rgba(0,46,91,0.35)] transition group-hover:-translate-y-1 group-hover:scale-105">
                    <MapPin className="h-7 w-7 fill-[#002e5b]" />
                  </div>
                  <div className="mt-2 whitespace-nowrap border border-[#002e5b]/15 bg-white px-3 py-2 text-center shadow-[0_12px_30px_rgba(0,46,91,0.18)]">
                    <p className="text-sm font-black text-[#001f3d]">{showroom.shortName}</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#002e5b]">A Cozy Fireplace</p>
                  </div>
                </div>
              </a>
            ))}

            <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3 border border-[#002e5b]/15 bg-white/95 p-4 shadow-[0_18px_45px_rgba(0,46,91,0.16)] sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#002e5b]">Showroom Map</p>
                <p className="mt-1 text-sm font-semibold text-[#52677d]">Three marked A Cozy Fireplace locations in Chicago’s western and southwest suburbs.</p>
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
