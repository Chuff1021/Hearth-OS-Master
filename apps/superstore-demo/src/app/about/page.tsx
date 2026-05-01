import { defaultStoreConfig } from "@/lib/store-config";
import { seoMetadata } from "@/lib/seo-metadata";
import { MapPin, Phone, Mail, Clock, Award, Users, Shield, Heart } from "lucide-react";

export const metadata = seoMetadata({
  title: "About A Cozy Fireplace",
  description: "Learn about A Cozy Fireplace, serving Naperville, Crest Hill, and New Lenox with fireplaces, inserts, stoves, gas logs, glass doors, grills, accessories, installation, and service since 1995.",
  path: "/about",
});

const locations = [
  { name: "Naperville", address: "503 W. 87th Street, Naperville, IL 60565", phone: "630-778-1781" },
  { name: "Crest Hill", address: "2124 Plainfield Road, Crest Hill, IL 60403", phone: "815-725-5556" },
  { name: "New Lenox", address: "390 N. Cedar Road, New Lenox, IL 60451", phone: "815-462-8889" },
];

const brands = ["Avalon", "Fireplace Xtrordinair", "Hearthstone", "Lopi", "Pacific Energy", "Vermont Castings", "Broilmaster", "Modern Home Products", "Solaire Infrared Grilling", "Design Specialties", "David Kimberly Door Company"];

export default function AboutPage() {
  const { address } = defaultStoreConfig;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

  return (
    <div className="bg-[#f7fbff]">
      <section className="relative bg-gradient-to-r from-[#002e5b] via-[#003f7d] to-[#002e5b] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#fde428]">Naperville · Crest Hill · New Lenox</p>
          <h1 className="mb-4 text-4xl font-black md:text-5xl">About {defaultStoreConfig.storeName}</h1>
          <p className="mx-auto max-w-3xl text-xl text-[#e7f0fb]">
            Your complete neighborhood fireplace, wood stove, gas grill, gas lamp, and fireplace accessories store since 1995.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#001f3d]">Our Story</h2>
            <div className="space-y-4 text-[#425466]">
              <p>
                A Cozy Fireplace has been helping Chicago-area homeowners plan, install, reface, decorate, and service hearth products since 1995.
                With locations in Naperville, Crest Hill, and New Lenox, the company focuses on quality products, experienced installation, and personal consultation.
              </p>
              <p>
                The team helps customers choose from wood fireplaces, gas direct-vent fireplaces, gas and wood inserts, freestanding stoves, glass doors, gas logs,
                fireplace tools, screens, log baskets, grills, and decorative accessories.
              </p>
              <p>
                A Cozy Fireplace emphasizes American-made products, long-tenured installers, and more than 100 years of collective hearth experience. The goal is simple:
                help every customer find the fireplace, stove, insert, or service solution that makes their home warmer and more comfortable.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#c8d8e8]">
            <h3 className="mb-6 text-xl font-semibold text-[#001f3d]">Why Choose A Cozy Fireplace?</h3>
            <ul className="space-y-4">
              {[
                [Award, "Established Since 1995", "Three local showrooms and decades of hearth experience."],
                [Users, "Experienced Team", "Installers and service staff with deep product knowledge."],
                [Shield, "Quality Products", "A carefully selected lineup of trusted fireplace, stove, grill, gas log, and glass door brands."],
                [Heart, "Customer First", "Personal consultations built around what you want from your fireplace."],
              ].map(([Icon, title, text]) => (
                <li key={String(title)} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#002e5b]" />
                  <div><span className="font-medium text-[#001f3d]">{String(title)}</span><p className="text-sm text-[#52677d]">{String(text)}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#edf5ff] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#001f3d]">Brands Featured in This White-Label Demo</h2>
            <p className="mx-auto max-w-2xl text-[#52677d]">Based on A Cozy Fireplace product-line references and current dealer positioning.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => <div key={brand} className="rounded-xl bg-white px-4 py-3 text-center font-semibold text-[#002e5b] shadow-sm ring-1 ring-[#c8d8e8]">{brand}</div>)}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#001f3d]">Visit A Cozy Fireplace</h2>
            <p className="text-[#52677d]">Come see fireplaces, inserts, stoves, gas logs, glass doors, grills, and accessories in person.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((location) => (
              <div key={location.name} className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-[#c8d8e8]">
                <MapPin className="mx-auto mb-3 h-8 w-8 text-[#002e5b]" />
                <h3 className="mb-1 font-semibold text-[#001f3d]">{location.name}</h3>
                <p className="text-sm text-[#52677d]">{location.address}</p>
                <p className="mt-2 text-sm font-semibold text-[#002e5b]">{location.phone}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-[#c8d8e8]"><Phone className="mx-auto mb-3 h-8 w-8 text-[#002e5b]" /><h3 className="mb-1 font-semibold text-[#001f3d]">Main Phone</h3><p className="text-sm text-[#52677d]">{defaultStoreConfig.phone}</p></div>
            <div className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-[#c8d8e8]"><Mail className="mx-auto mb-3 h-8 w-8 text-[#002e5b]" /><h3 className="mb-1 font-semibold text-[#001f3d]">Email</h3><p className="text-sm text-[#52677d]">{defaultStoreConfig.email}</p></div>
            <div className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-[#c8d8e8]"><Clock className="mx-auto mb-3 h-8 w-8 text-[#002e5b]" /><h3 className="mb-1 font-semibold text-[#001f3d]">Hours</h3><p className="text-sm text-[#52677d]">Mon-Fri: {defaultStoreConfig.business.hours.weekdays}<br />Sat: {defaultStoreConfig.business.hours.saturday}</p></div>
          </div>
          <p className="sr-only">Primary configured address: {fullAddress}</p>
        </div>
      </section>
    </div>
  );
}
