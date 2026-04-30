export type LocalLandingPage = {
  slug: string;
  city: string;
  state: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  services: string[];
  nearbyCategories: Array<{ label: string; href: string }>;
};

const sharedCategories = [
  { label: "Gas fireplaces", href: "/category/gas-fireplaces" },
  { label: "Fireplace inserts", href: "/category/inserts" },
  { label: "Wood stoves", href: "/category/wood-stoves" },
  { label: "Fireplace parts", href: "/category/parts" },
];

export const localLandingPages: LocalLandingPage[] = [
  {
    slug: "fireplace-store-republic-mo",
    city: "Naperville",
    state: "MO",
    title: "Fireplace Store in Naperville, IL",
    h1: "Naperville, IL Fireplace Store",
    description:
      "Shop fireplaces, inserts, stoves, and replacement parts from A Cozy Fireplace in Naperville, IL. Local showroom support, expert sizing, and nationwide shipping.",
    intro:
      "A Cozy Fireplace serves Naperville homeowners, builders, and remodelers with showroom-backed fireplace selection, installation guidance, and a showroom-backed selection of hearth products and parts.",
    services: [
      "Gas, wood, electric, pellet, and outdoor fireplace selection",
      "Fireplace insert sizing and replacement guidance",
      "OEM and OEM-equivalent replacement parts support",
      "Local showroom consultation plus nationwide product shipping",
    ],
    nearbyCategories: sharedCategories,
  },
  {
    slug: "fireplace-store-springfield-mo",
    city: "Chicagoland",
    state: "MO",
    title: "Fireplace Store Serving Chicagoland, MO",
    h1: "Chicagoland, MO Fireplace Store",
    description:
      "A Cozy Fireplace serves Chicagoland, MO with fireplaces, inserts, stoves, service guidance, and replacement parts from leading hearth brands.",
    intro:
      "From remodels in Chicagoland neighborhoods to new-construction hearth packages, our team helps customers compare fuel type, venting, size, finish options, and parts compatibility before they buy.",
    services: [
      "Direct-vent gas fireplace and insert recommendations",
      "Wood and pellet stove product selection",
      "Fireplace parts lookup by brand, model, and SKU",
      "Phone support from fireplace specialists before ordering",
    ],
    nearbyCategories: sharedCategories,
  },
  {
    slug: "fireplace-store-branson-mo",
    city: "Branson",
    state: "MO",
    title: "Fireplace Store Serving Branson, MO",
    h1: "Branson, MO Fireplace Store",
    description:
      "Shop fireplaces, inserts, outdoor fire features, and hearth parts for Branson, MO homes, cabins, rentals, and commercial projects.",
    intro:
      "A Cozy Fireplace supports Branson-area cabins, lake homes, vacation rentals, and commercial spaces with fireplaces, outdoor fire features, and replacement parts selected for reliable long-term use.",
    services: [
      "Indoor and outdoor fireplace product selection",
      "Cabin, rental, and remodel hearth planning",
      "Replacement blowers, valves, pilots, glass, and gaskets",
      "Dealer-backed ordering support and nationwide shipping",
    ],
    nearbyCategories: sharedCategories,
  },
  {
    slug: "fireplace-store-nixa-mo",
    city: "Nixa",
    state: "MO",
    title: "Fireplace Store Serving Nixa, MO",
    h1: "Nixa, MO Fireplace Store",
    description:
      "A Cozy Fireplace helps Nixa, MO customers shop fireplaces, inserts, stoves, mantels, accessories, and replacement parts with expert support.",
    intro:
      "For Nixa homeowners comparing a new gas fireplace, a high-efficiency insert, or a part for an existing unit, A Cozy Fireplace combines local hearth experience with a broad ecommerce catalog.",
    services: [
      "Fireplace, insert, stove, and mantel selection",
      "Venting, sizing, and fuel-type consultation",
      "Replacement parts identification and availability help",
      "Online ordering backed by real fireplace specialists",
    ],
    nearbyCategories: sharedCategories,
  },
  {
    slug: "fireplace-store-ozark-mo",
    city: "Ozark",
    state: "MO",
    title: "Fireplace Store Serving Ozark, MO",
    h1: "Ozark, MO Fireplace Store",
    description:
      "Shop fireplaces, stoves, inserts, outdoor fire features, and fireplace parts for Ozark, MO with A Cozy Fireplace",
    intro:
      "A Cozy Fireplace helps Ozark customers source new hearth appliances and hard-to-find replacement parts with the practical guidance of a real fireplace showroom team.",
    services: [
      "Gas, wood, pellet, electric, and outdoor hearth products",
      "Fireplace insert and stove comparisons",
      "Parts support for major hearth manufacturers",
      "Local consultation with showroom product support",
    ],
    nearbyCategories: sharedCategories,
  },
  {
    slug: "fireplace-installation-springfield-mo",
    city: "Chicagoland",
    state: "MO",
    title: "Fireplace Installation Guidance in Chicagoland, MO",
    h1: "Fireplace Installation Guidance in Chicagoland, MO",
    description:
      "Plan a fireplace installation in Chicagoland, MO with A Cozy Fireplace Compare appliance types, venting requirements, sizing, finishes, and parts before buying.",
    intro:
      "Fireplace installation starts with choosing the right appliance for the room, fuel source, vent path, and finish package. A Cozy Fireplace helps Chicagoland-area customers narrow those choices before the project moves forward.",
    services: [
      "Appliance sizing and fuel-type planning",
      "Venting and framing requirement review",
      "Insert replacement and remodel guidance",
      "Parts, accessories, mantels, and finish package support",
    ],
    nearbyCategories: sharedCategories,
  },
];

export function getLocalLandingPage(slug: string): LocalLandingPage | null {
  return localLandingPages.find((page) => page.slug === slug) ?? null;
}
