// White-label configuration for fireplace store customization
// Each store can override these settings with their own values

export interface StoreConfig {
  // Branding
  storeName: string;
  tagline: string;
  logo: string;
  favicon: string;
  
  // Contact Information
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  
  // Social Media
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    pinterest?: string;
  };
  
  // Theme Colors
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    headerBg: string;
    footerBg: string;
  };
  
  // Business Settings
  business: {
    hours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    showrooms: boolean;
    installationServices: boolean;
    freeShipping: {
      enabled: boolean;
      minimum: number;
    };
  };
  
  // SEO
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

// Default configuration — The Depot Fireplace and Stove Center
export const defaultStoreConfig: StoreConfig = {
  storeName: "The Depot Fireplace and Stove Center",
  tagline: "Illiana's largest hearth and grill retailer for fireplace, stove, grill, service, and installation projects.",
  logo: "/depot-logo.png",
  favicon: "/icon.png?v=depot-20260501",
  phone: "217-443-1060",
  email: "thedepot33@att.net",
  address: { street: "6 Southgate Ct.", city: "Tilton", state: "IL", zip: "61833" },
  social: { facebook: "", instagram: "", youtube: "" },
  theme: { primaryColor: "#b91806", secondaryColor: "#111111", accentColor: "#e8b900", headerBg: "#111111", footerBg: "#111111" },
  business: { hours: { weekdays: "8:30 AM - 4:00 PM", saturday: "9:00 AM - Noon", sunday: "Closed" }, showrooms: true, installationServices: true, freeShipping: { enabled: true, minimum: 499 } },
  seo: {
    metaTitle: "The Depot Fireplace and Stove Center",
    metaDescription: "The Depot Fireplace and Stove Center is Illiana's hearth and grill retailer in Tilton, Illinois, offering fireplaces, stoves, inserts, grills, service, parts, and installation.",
    keywords: ["The Depot Fireplace and Stove Center", "fireplace store Tilton IL", "fireplace installation Illiana", "Lopi stoves", "Fireplace Xtrordinair", "DaVinci fireplaces", "Green Mountain Grills", "MHP grills", "fireplace service", "hearth parts"],
  },
};

export const cozyBrandNames = [
  "Fireplace Xtrordinair", "Lopi", "Majestic", "Dimplex", "DaVinci Fireplaces", "Boral Stone Products", "Portland Willamette", "Stoll Industries", "Hargrove Gas Logs", "Hearth Classics", "MagraHearth", "Log Style Mantels", "Pearl Mantels", "Premier Mantel Co.", "Ironhaus", "Dagan Industries", "Green Mountain Grills", "MHP Grills", "LumberJack Cooking Pellets", "The Depot Fireplace and Stove Center",
];

export const cozyBrandSlugMap = new Map(
  cozyBrandNames.map((name) => [
    name.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
    name,
  ]),
);

export const cozyAllowedBrandSet = new Set(cozyBrandNames.map((name) => name.toLowerCase()));

// Product Categories for fireplace stores
export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  subcategories?: ProductCategory[];
}

export const productCategories: ProductCategory[] = [
  { id: "fireplaces", name: "Fireplaces", slug: "fireplaces", description: "Wood, gas, electric, linear, and DaVinci fireplaces from The Depot's showroom lines", image: "/depot/FPX_36_elite.jpg", subcategories: [
    { id: "gas-fireplaces", name: "Gas Fireplaces", slug: "gas-fireplaces", description: "Small, medium, large, and linear gas fireplaces", image: "/depot/fpx_864_ho.jpg" },
    { id: "wood-fireplaces", name: "Wood Fireplaces", slug: "wood-fireplaces", description: "High-efficiency and open wood-burning fireplaces", image: "/depot/FPX_36_elite.jpg" },
    { id: "electric-fireplaces", name: "Electric Fireplaces", slug: "electric-fireplaces", description: "Electric fireplaces for flexible room updates", image: "/depot/FPX_electric.jpg" },
  ]},
  { id: "inserts", name: "Stoves & Inserts", slug: "inserts", description: "Wood, gas, and pellet inserts plus freestanding stoves from Lopi and Fireplace Xtrordinair", image: "/depot/Cape_Cod_Wood_Insert.jpg", subcategories: [
    { id: "gas-inserts", name: "Gas Inserts", slug: "gas-inserts", description: "Gas fireplace inserts for existing fireplaces", image: "/depot/dvl_insert.jpg" },
    { id: "wood-inserts", name: "Wood Inserts", slug: "wood-inserts", description: "Efficient wood inserts from Travis-family lines", image: "/depot/Cape_Cod_Wood_Insert.jpg" },
    { id: "pellet-inserts", name: "Pellet Inserts", slug: "pellet-inserts", description: "Pellet inserts and heating options", image: "/depot/Pellet___Gas_Stoves.JPG" },
    { id: "wood-stoves", name: "Wood Stoves", slug: "wood-stoves", description: "Freestanding wood stoves", image: "/depot/cape-cod_main.jpg" },
    { id: "gas-stoves", name: "Gas Stoves", slug: "gas-stoves", description: "Freestanding gas stoves", image: "/depot/Greenfield_Gas_Stove.jpg" },
  ]},
  { id: "bbq-grills", name: "Grills", slug: "bbq-grills", description: "Green Mountain pellet grills, MHP gas grills, and LumberJack cooking pellets", image: "/depot/mhp-grill-family.jpg" },
  { id: "stone-products", name: "Stone & Mantels", slug: "stone-products", description: "Stone, mantels, hearth pads, and fireplace refacing materials", image: "/depot/Boral_Lime_tone-Cedar-1.jpg" },
  { id: "doors-screens", name: "Doors & Screens", slug: "doors-screens", description: "Fireplace doors, glass doors, screens, and custom metal hearth fronts", image: "/depot/Portland_Willamete_doors.jpg" },
  { id: "logs-media", name: "Gas Logs", slug: "logs-media", description: "Gas log sets and hearth media from showroom-supported lines", image: "/depot/RUSTIC_20TIMBERS.jpg" },
  { id: "accessories", name: "Accessories", slug: "accessories", description: "Tool kits, screens, log baskets, hearth pads, and fireplace accessories", image: "/depot/industrial-fireplace-tool-set-c.jpg", subcategories: [
    { id: "mantels", name: "Mantels & Hearth", slug: "mantels", description: "Mantels, hearth pads, and refacing products", image: "/depot/Mantels.jpg" },
    { id: "remotes-controls", name: "Tools & Accessories", slug: "remotes-controls", description: "Tools, screens, and hearth accessories", image: "/depot/industrial-fireplace-tool-set-c.jpg" },
  ]},
  { id: "parts", name: "Parts & Service", slug: "parts", description: "Factory-trained service support and replacement parts for hearth products", image: "/depot/Van_Driver_Side.JPG" },
];

// Product interface
export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  salePrice?: number;
  contactForPricing?: boolean;
  categoryId: string;
  subcategoryId?: string;
  brand: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isNew: boolean;
  isBestSeller: boolean;
}

// Showroom-style products for the white-label catalog
export const sampleProducts: Product[] = [
  {
    id: "prod-001",
    sku: "GFP-5000",
    name: "Superior 42\" Direct Vent Gas Fireplace",
    slug: "superior-42-direct-vent-gas-fireplace",
    description: "Experience the warmth and beauty of a real fire with the Superior 42\" Direct Vent Gas Fireplace. This stunning fireplace features a realistic flame presentation with hand-painted ceramic logs, creating an authentic wood-burning appearance without the hassle. The direct vent technology ensures safe, efficient operation while maintaining excellent indoor air quality. Perfect for larger living spaces, this fireplace delivers up to 40,000 BTUs of comforting heat.",
    shortDescription: "42\" direct vent gas fireplace with 40,000 BTU output and realistic flame presentation.",
    price: 2499.99,
    salePrice: 2299.99,
    categoryId: "fireplaces",
    subcategoryId: "gas-fireplaces",
    brand: "Superior",
    images: ["/products/fireplace-1.jpg", "/products/fireplace-1-alt.jpg"],
    features: [
      "40,000 BTU output",
      "Direct vent technology",
      "Hand-painted ceramic logs",
      "Variable flame height control",
      "Remote control included",
      "Optional blower kit available",
    ],
    specifications: {
      "Width": "42 inches",
      "Height": "32 inches",
      "Depth": "18 inches",
      "BTU Output": "40,000",
      "Efficiency": "83%",
      "Vent Type": "Direct Vent",
      "Fuel Type": "Natural Gas / Propane",
    },
    inStock: true,
    stockQuantity: 15,
    rating: 4.8,
    reviewCount: 127,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "prod-002",
    sku: "WS-3000",
    name: "Vogelzang Defender Wood Stove",
    slug: "vogelzang-defender-wood-stove",
    description: "The Vogelzang Defender Wood Stove combines classic design with modern efficiency. EPA certified and capable of heating up to 2,400 square feet, this robust wood stove is perfect for those who appreciate the traditional warmth of a wood fire. The large viewing window provides an excellent view of the flames, while the air wash system keeps the glass clean.",
    shortDescription: "EPA certified wood stove heats up to 2,400 sq ft with classic design.",
    price: 1299.99,
    categoryId: "stoves",
    subcategoryId: "wood-stoves",
    brand: "Vogelzang",
    images: ["/products/stove-1.jpg"],
    features: [
      "Heats up to 2,400 sq ft",
      "EPA Certified",
      "Up to 78% efficiency",
      "Large viewing window",
      "Air wash glass cleaning system",
      "Firebrick lined firebox",
    ],
    specifications: {
      "Max BTU": "68,000",
      "Heating Area": "2,400 sq ft",
      "Firebox Capacity": "3.0 cu ft",
      "Log Length": "21 inches",
      "Efficiency": "78%",
      "Emissions": "1.63 g/hr",
    },
    inStock: true,
    stockQuantity: 8,
    rating: 4.6,
    reviewCount: 89,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "prod-003",
    sku: "EFP-2000",
    name: "Dimplex 50\" Linear Electric Fireplace",
    slug: "dimplex-50-linear-electric-fireplace",
    description: "Transform your space with the Dimplex 50\" Linear Electric Fireplace. This sleek, modern fireplace features Dimplex's patented flame technology for the most realistic electric flame effect on the market. With multiple flame colors, brightness settings, and heat options, you can customize your experience to match any mood or season.",
    shortDescription: "50\" linear electric fireplace with realistic flame effects and multi-color LED lighting.",
    price: 1599.99,
    categoryId: "fireplaces",
    subcategoryId: "fireplaces",
    brand: "DaVinci Fireplaces",
    images: ["/products/electric-1.jpg"],
    features: [
      "Patented flame technology",
      "Multi-color flame options",
      "Adjustable brightness",
      "Thermostat controlled heater",
      "No venting required",
      "Remote control included",
    ],
    specifications: {
      "Width": "50 inches",
      "Height": "20 inches",
      "Depth": "5 inches",
      "Heater Output": "5,000 BTU",
      "Voltage": "120V",
      "Watts": "1,500W",
    },
    inStock: true,
    stockQuantity: 22,
    rating: 4.7,
    reviewCount: 156,
    isFeatured: true,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: "prod-004",
    sku: "GI-4000",
    name: "Napoleon 36\" High Efficiency Gas Insert",
    slug: "napoleon-36-high-efficiency-gas-insert",
    description: "Convert your drafty, inefficient wood-burning fireplace into an efficient heating source with the Napoleon 36\" High Efficiency Gas Insert. This premium insert features Napoleon's exclusive PHAZERAMIC burner system for incredibly realistic flames and even heat distribution. The included blower helps circulate warm air throughout your room.",
    shortDescription: "36\" high efficiency gas insert with PHAZERAMIC burner and included blower.",
    price: 3299.99,
    salePrice: 2999.99,
    categoryId: "inserts",
    subcategoryId: "gas-inserts",
    brand: "Napoleon",
    images: ["/products/insert-1.jpg"],
    features: [
      "PHAZERAMIC burner system",
      "Up to 85% efficiency",
      "Variable heat control",
      "Included blower",
      "Battery backup ignition",
      "Multiple trim options",
    ],
    specifications: {
      "Width": "36 inches",
      "BTU Input": "40,000",
      "Efficiency": "85%",
      "Heating Area": "2,000 sq ft",
      "Vent Type": "Direct Vent",
      "Fuel Type": "Natural Gas / Propane",
    },
    inStock: true,
    stockQuantity: 6,
    rating: 4.9,
    reviewCount: 78,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "prod-005",
    sku: "PS-2500",
    name: "Harman P68 Pellet Stove",
    slug: "harman-p68-pellet-stove",
    description: "The Harman P68 Pellet Stove represents the pinnacle of pellet stove technology. With automatic ignition, room sensing temperature control, and a massive 76 lb hopper capacity, this stove provides up to 68,000 BTUs of consistent, efficient heat. The easy-to-use controls and minimal maintenance make it perfect for whole-home heating.",
    shortDescription: "Premium pellet stove with 76 lb hopper and automatic temperature control.",
    price: 4199.99,
    categoryId: "stoves",
    subcategoryId: "pellet-stoves",
    brand: "Harman",
    images: ["/products/pellet-1.jpg"],
    features: [
      "68,000 BTU output",
      "76 lb hopper capacity",
      "Automatic ignition",
      "Room sensing temperature control",
      "Up to 86% efficiency",
      "Whisper-quiet operation",
    ],
    specifications: {
      "Max BTU": "68,000",
      "Hopper Capacity": "76 lbs",
      "Heating Area": "2,800 sq ft",
      "Efficiency": "86%",
      "Emissions": "0.8 g/hr",
      "Burn Time": "Up to 48 hours",
    },
    inStock: true,
    stockQuantity: 4,
    rating: 4.9,
    reviewCount: 203,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "prod-006",
    sku: "FP-1000",
    name: "Outland Living 36\" Fire Pit Table",
    slug: "outland-living-36-fire-pit-table",
    description: "Create the perfect outdoor gathering space with the Outland Living 36\" Fire Pit Table. This elegant propane fire pit table provides warmth and ambiance without the smoke and mess of a traditional wood fire. The decorative glass beads and realistic flame create a stunning focal point for your patio or deck.",
    shortDescription: "36\" propane fire pit table with decorative glass beads and auto-ignition.",
    price: 599.99,
    categoryId: "outdoor",
    subcategoryId: "fire-pits",
    brand: "Outland Living",
    images: ["/products/firepit-1.jpg"],
    features: [
      "36\" diameter table",
      "Propane powered",
      "Auto-ignition system",
      "Decorative glass beads included",
      "Weather-resistant cover included",
      "CSA approved",
    ],
    specifications: {
      "Diameter": "36 inches",
      "Height": "25 inches",
      "BTU Output": "50,000",
      "Fuel Type": "Propane",
      "Weight": "52 lbs",
      "Material": "Steel with UV-resistant finish",
    },
    inStock: true,
    stockQuantity: 18,
    rating: 4.5,
    reviewCount: 67,
    isFeatured: false,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: "depot-green-mountain-grill",
    sku: "DEPOT-GMG-GRILL",
    name: "Green Mountain Pellet Grill",
    slug: "green-mountain-pellet-grill",
    description: "Green Mountain pellet grill options available through The Depot Fireplace and Stove Center showrooms.",
    shortDescription: "Green Mountain pellet grilling configured with showroom support.",
    price: 0,
    contactForPricing: true,
    categoryId: "bbq-grills",
    brand: "Green Mountain Grills",
    images: ["/depot/mhp-grill-family.jpg"],
    features: ["Pellet grill options", "Multiple cooking configurations", "Showroom consultation available"],
    specifications: { Fuel: "Pellet", Category: "Grills" },
    inStock: true,
    stockQuantity: 3,
    rating: 4.8,
    reviewCount: 18,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "depot-dimplex-electric",
    sku: "DEPOT-DIMPLEX-ELECTRIC",
    name: "Dimplex Electric Fireplace",
    slug: "dimplex-electric-fireplace",
    description: "Dimplex electric fireplace options available through The Depot Fireplace and Stove Center showrooms.",
    shortDescription: "Dimplex electric fireplaces for flexible room updates.",
    price: 0,
    contactForPricing: true,
    categoryId: "electric-fireplaces",
    brand: "Dimplex",
    images: ["/depot/FPX_electric.jpg"],
    features: ["Electric fireplace", "Flexible room placement", "Showroom ordering help"],
    specifications: { Fuel: "Electric", Category: "Electric Fireplaces" },
    inStock: true,
    stockQuantity: 2,
    rating: 4.7,
    reviewCount: 11,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "depot-davinci-fireplace",
    sku: "DEPOT-DAVINCI",
    name: "DaVinci Custom Fireplace",
    slug: "davinci-custom-fireplace",
    description: "DaVinci custom fireplace options for architectural hearth projects.",
    shortDescription: "Architectural custom fireplace options from DaVinci.",
    price: 0,
    contactForPricing: true,
    categoryId: "fireplaces",
    brand: "DaVinci Fireplaces",
    images: ["/depot/DaVinci_Earls_mod.jpg"],
    features: ["Custom fireplace planning", "Architectural design support", "Dealer supported selection"],
    specifications: { Fuel: "Electric", Category: "Electric Fireplaces" },
    inStock: true,
    stockQuantity: 2,
    rating: 4.8,
    reviewCount: 9,
    isFeatured: true,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "depot-portland-willamette-door",
    sku: "DEPOT-PW-DOOR",
    name: "Portland Willamette Fireplace Glass Door",
    slug: "portland-willamette-fireplace-door",
    description: "Custom fireplace glass door planning from Portland Willamette through The Depot Fireplace and Stove Center.",
    shortDescription: "Portland Willamette glass doors for fireplace refresh projects.",
    price: 0,
    contactForPricing: true,
    categoryId: "doors-screens",
    brand: "Portland Willamette",
    images: ["/depot/Portland_Willamete_doors.jpg"],
    features: ["Custom sizing", "Multiple finishes", "Showroom measurement support"],
    specifications: { Category: "Glass Doors" },
    inStock: true,
    stockQuantity: 4,
    rating: 4.9,
    reviewCount: 16,
    isFeatured: true,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "depot-hargrove-gas-logs",
    sku: "DEPOT-HARGROVE-LOGS",
    name: "Hargrove Gas Log Set",
    slug: "hargrove-gas-log-set",
    description: "Hargrove gas log options available through The Depot Fireplace and Stove Center.",
    shortDescription: "Hargrove vented and vent-free gas log options.",
    price: 0,
    contactForPricing: true,
    categoryId: "logs-media",
    brand: "Hargrove Gas Logs",
    images: ["/depot/RUSTIC_20TIMBERS.jpg"],
    features: ["Gas log sets", "Burner and media options", "Local showroom help"],
    specifications: { Category: "Gas Logs" },
    inStock: true,
    stockQuantity: 3,
    rating: 4.8,
    reviewCount: 8,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "depot-stoll-door",
    sku: "DEPOT-STOLL-DOOR",
    name: "Stoll Fireplace Door",
    slug: "stoll-fireplace-door",
    description: "Stoll fireplace door and screen options available for fireplace refresh and remodel projects.",
    shortDescription: "Stoll fireplace doors and screens for custom hearth projects.",
    price: 0,
    contactForPricing: true,
    categoryId: "doors-screens",
    brand: "Stoll Industries",
    images: ["/depot/Portland_Willamete_doors.jpg"],
    features: ["Custom door options", "Screen options", "Showroom design support"],
    specifications: { Category: "Glass Doors" },
    inStock: true,
    stockQuantity: 2,
    rating: 4.7,
    reviewCount: 7,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "depot-gas-log-set",
    sku: "DEPOT-GAS-LOGS",
    name: "The Depot Fireplace and Stove Center Gas Log Set",
    slug: "the-depot-gas-log-set",
    description: "Vented and vent-free gas log options selected with help from The Depot Fireplace and Stove Center's showroom staff.",
    shortDescription: "Gas log sets, burners, and media selected for your fireplace.",
    price: 0,
    contactForPricing: true,
    categoryId: "logs-media",
    brand: "The Depot Fireplace and Stove Center",
    images: ["/depot/RUSTIC_20TIMBERS.jpg"],
    features: ["Vented and vent-free options", "Burner and media choices", "Fitment help available"],
    specifications: { Category: "Gas Logs" },
    inStock: true,
    stockQuantity: 6,
    rating: 4.8,
    reviewCount: 14,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "depot-stone-refacing",
    sku: "DEPOT-STONE-REFACE",
    name: "The Depot Fireplace and Stove Center Stone Refacing Package",
    slug: "the-depot-stone-refacing-package",
    description: "Stone veneer and fireplace refacing products for homeowners updating an existing hearth wall.",
    shortDescription: "Stone products and refacing guidance from The Depot Fireplace and Stove Center.",
    price: 0,
    contactForPricing: true,
    categoryId: "stone-products",
    brand: "The Depot Fireplace and Stove Center",
    images: ["/depot/Boral_Lime_tone-Cedar-1.jpg"],
    features: ["Stone veneer planning", "Fireplace refacing", "Showroom material guidance"],
    specifications: { Category: "Stone Products" },
    inStock: true,
    stockQuantity: 5,
    rating: 4.7,
    reviewCount: 10,
    isFeatured: false,
    isNew: true,
    isBestSeller: false,
  },
];
