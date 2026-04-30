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

// Default configuration — A Cozy Fireplace
export const defaultStoreConfig: StoreConfig = {
  storeName: "A Cozy Fireplace",
  tagline: "Your complete neighborhood fireplace, wood stove, gas grill, gas lamp and fireplace accessories store.",
  logo: "/acozy-logo.png",
  favicon: "/icon.png?v=acozy-20260430-hr",
  
  phone: "630-778-1781",
  email: "acozyfp@aol.com",
  address: {
    street: "503 W. 87th Street",
    city: "Naperville",
    state: "IL",
    zip: "60565",
  },
  
  social: {
    facebook: "https://www.facebook.com/acozyfireplace",
    instagram: "",
    youtube: "",
  },
  
  theme: {
    primaryColor: "#002e5b",
    secondaryColor: "#001f3d",
    accentColor: "#fde428",
    headerBg: "#002e5b",
    footerBg: "#001f3d",
  },
  
  business: {
    hours: {
      weekdays: "10:00 AM - 6:00 PM",
      saturday: "10:00 AM - 5:00 PM",
      sunday: "Closed",
    },
    showrooms: true,
    installationServices: true,
    freeShipping: {
      enabled: true,
      minimum: 499,
    },
  },
  
  seo: {
    metaTitle: "A Cozy Fireplace",
    metaDescription: "A Cozy Fireplace sells and installs fireplaces, inserts, stoves, grills, gas logs, glass doors, accessories, and replacement parts across Naperville, Crest Hill, and New Lenox, Illinois.",
    keywords: [
      "A Cozy Fireplace",
      "fireplace store Naperville IL",
      "fireplace store Crest Hill IL",
      "fireplace store New Lenox IL",
      "gas fireplace inserts",
      "wood stoves",
      "gas logs",
      "glass fireplace doors",
      "BBQ grills",
      "fireplace parts",
      "Lopi",
      "Fireplace Xtrordinair",
      "Avalon",
      "Hearthstone",
      "Pacific Energy",
      "Vermont Castings",
      "Broilmaster",
    ],
  },
};


export const cozyBrandNames = [
  "Avalon",
  "Fireplace Xtrordinair",
  "Hearthstone",
  "Lopi",
  "Pacific Energy",
  "Vermont Castings",
  "Broilmaster",
  "Modern Home Products",
  "Solaire Infrared Grilling",
  "Design Specialties",
  "David Kimberly Door Company",
  "Portland Willamette",
  "Residential Retreat",
  "Stoll",
  "A Cozy Fireplace",
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
  {
    id: "fireplaces",
    name: "Fireplaces",
    slug: "fireplaces",
    description: "Wood, gas, and electric fireplace options for remodels, new construction, and showroom planning",
    image: "/products-upgraded/wood-fireplaces/fpx-42apex-3.webp",
    subcategories: [
      { id: "gas-fireplaces", name: "Gas Fireplaces", slug: "gas-fireplaces", description: "Direct-vent and gas fireplace options", image: "/categories/gas-fireplaces.jpg" },
      { id: "wood-fireplaces", name: "Wood Fireplaces", slug: "wood-fireplaces", description: "Traditional and efficient wood-burning fireplaces", image: "/categories/wood-fireplaces.jpg" },
      { id: "electric-fireplaces", name: "Electric Fireplaces", slug: "electric-fireplaces", description: "Electric fireplaces for flexible installs", image: "/categories/electric-fireplaces.jpg" },
    ],
  },
  {
    id: "inserts",
    name: "Inserts",
    slug: "inserts",
    description: "Gas, wood, pellet, and electric inserts to upgrade an existing fireplace",
    image: "/categories/inserts.jpg",
    subcategories: [
      { id: "gas-inserts", name: "Gas Inserts", slug: "gas-inserts", description: "Efficient gas fireplace inserts", image: "/categories/gas-inserts.jpg" },
      { id: "wood-inserts", name: "Wood Inserts", slug: "wood-inserts", description: "High-efficiency wood-burning inserts", image: "/categories/wood-inserts.jpg" },
      { id: "pellet-inserts", name: "Pellet Inserts", slug: "pellet-inserts", description: "Convenient pellet-burning inserts", image: "/categories/pellet-inserts.jpg" },
      { id: "electric-inserts", name: "Electric Inserts", slug: "electric-inserts", description: "Easy-install electric fireplace inserts", image: "/categories/electric-inserts.jpg" },
    ],
  },
  {
    id: "stoves",
    name: "Stoves",
    slug: "stoves",
    description: "Freestanding gas and wood stoves from A Cozy Fireplace's hearth brands",
    image: "/categories/stoves.jpg",
    subcategories: [
      { id: "wood-stoves", name: "Wood Stoves", slug: "wood-stoves", description: "Classic and high-efficiency wood stoves", image: "/categories/wood-stoves.jpg" },
      { id: "gas-stoves", name: "Gas Stoves", slug: "gas-stoves", description: "Clean-burning gas stoves", image: "/categories/gas-stoves.jpg" },
    ],
  },
  {
    id: "bbq-grills",
    name: "BBQ Grills",
    slug: "bbq-grills",
    description: "American-made grills from Broilmaster, Modern Home Products, and Solaire Infrared Grilling",
    image: "/categories/outdoor.jpg",
  },
  {
    id: "logs-media",
    name: "Gas Logs",
    slug: "logs-media",
    description: "Vented and vent-free gas log options, burners, and decorative media",
    image: "/categories/logs-media.jpg",
  },
  {
    id: "doors-screens",
    name: "Glass Doors",
    slug: "doors-screens",
    description: "Fireplace glass doors and screens from Design Specialties, David Kimberly, Stoll, and more",
    image: "/categories/doors-screens.jpg",
  },
  {
    id: "stone-products",
    name: "Stone Products",
    slug: "stone-products",
    description: "Stone veneer and fireplace refacing products for hearth remodels",
    image: "/categories/mantels.jpg",
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    description: "Tools, screens, log baskets, remotes, controls, hearth protection, and finishing accessories",
    image: "/categories/accessories.jpg",
    subcategories: [
      { id: "mantels", name: "Mantels & Hearth", slug: "mantels", description: "Mantels, surrounds, and hearth protection", image: "/categories/mantels.jpg" },
      { id: "remotes-controls", name: "Remotes & Controls", slug: "remotes-controls", description: "Fireplace remotes, receivers, thermostats, and controls", image: "/categories/remote-controls.jpg" },
    ],
  },
  {
    id: "parts",
    name: "Parts",
    slug: "parts",
    description: "Replacement parts and fitment help by appliance type, brand, model, or SKU",
    image: "/categories/parts.jpg",
  },
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

// Sample products for demo
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
    subcategoryId: "electric-fireplaces",
    brand: "Dimplex",
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
    id: "cozy-broilmaster-grill",
    sku: "COZY-BROILMASTER-GRILL",
    name: "Broilmaster Premium Gas Grill",
    slug: "broilmaster-premium-gas-grill",
    description: "American-made Broilmaster gas grill options available through A Cozy Fireplace showrooms.",
    shortDescription: "Broilmaster outdoor grilling configured with showroom support.",
    price: 0,
    contactForPricing: true,
    categoryId: "bbq-grills",
    brand: "Broilmaster",
    images: ["/categories/outdoor.jpg"],
    features: ["American-made outdoor grill", "Multiple cooking configurations", "Showroom consultation available"],
    specifications: { Fuel: "Gas", Category: "BBQ Grills" },
    inStock: true,
    stockQuantity: 3,
    rating: 4.8,
    reviewCount: 18,
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "cozy-mhp-grill",
    sku: "COZY-MHP-GRILL",
    name: "Modern Home Products Gas Grill",
    slug: "modern-home-products-gas-grill",
    description: "Modern Home Products grill options for outdoor cooking projects through A Cozy Fireplace.",
    shortDescription: "MHP gas grills for backyard cooking and outdoor living.",
    price: 0,
    contactForPricing: true,
    categoryId: "bbq-grills",
    brand: "Modern Home Products",
    images: ["/categories/outdoor.jpg"],
    features: ["Outdoor gas grill", "Dealer configuration support", "Showroom ordering help"],
    specifications: { Fuel: "Gas", Category: "BBQ Grills" },
    inStock: true,
    stockQuantity: 2,
    rating: 4.7,
    reviewCount: 11,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "cozy-solaire-grill",
    sku: "COZY-SOLAIRE-INFRARED",
    name: "Solaire Infrared Grill",
    slug: "solaire-infrared-grill",
    description: "Solaire Infrared Grilling products available for customers planning a premium outdoor grill setup.",
    shortDescription: "Infrared outdoor grilling from Solaire.",
    price: 0,
    contactForPricing: true,
    categoryId: "bbq-grills",
    brand: "Solaire Infrared Grilling",
    images: ["/categories/outdoor.jpg"],
    features: ["Infrared grilling", "Premium outdoor cooking", "Dealer supported selection"],
    specifications: { Fuel: "Gas", Category: "BBQ Grills" },
    inStock: true,
    stockQuantity: 2,
    rating: 4.8,
    reviewCount: 9,
    isFeatured: true,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "cozy-design-specialties-door",
    sku: "COZY-DS-DOOR",
    name: "Design Specialties Fireplace Glass Door",
    slug: "design-specialties-fireplace-glass-door",
    description: "Custom fireplace glass door planning from Design Specialties through A Cozy Fireplace.",
    shortDescription: "Design Specialties glass doors for fireplace refresh projects.",
    price: 0,
    contactForPricing: true,
    categoryId: "doors-screens",
    brand: "Design Specialties",
    images: ["/categories/doors-screens.jpg"],
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
    id: "cozy-david-kimberly-door",
    sku: "COZY-DK-DOOR",
    name: "David Kimberly Fireplace Door",
    slug: "david-kimberly-fireplace-door",
    description: "David Kimberly Door Company fireplace door options for custom hearth finishing.",
    shortDescription: "David Kimberly fireplace doors with dealer fitment help.",
    price: 0,
    contactForPricing: true,
    categoryId: "doors-screens",
    brand: "David Kimberly Door Company",
    images: ["/categories/doors-screens.jpg"],
    features: ["Custom fireplace doors", "Finish and style options", "Local showroom help"],
    specifications: { Category: "Glass Doors" },
    inStock: true,
    stockQuantity: 3,
    rating: 4.8,
    reviewCount: 8,
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "cozy-stoll-door",
    sku: "COZY-STOLL-DOOR",
    name: "Stoll Fireplace Door",
    slug: "stoll-fireplace-door",
    description: "Stoll fireplace door and screen options available for fireplace refresh and remodel projects.",
    shortDescription: "Stoll fireplace doors and screens for custom hearth projects.",
    price: 0,
    contactForPricing: true,
    categoryId: "doors-screens",
    brand: "Stoll",
    images: ["/categories/doors-screens.jpg"],
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
    id: "cozy-gas-log-set",
    sku: "COZY-GAS-LOGS",
    name: "A Cozy Fireplace Gas Log Set",
    slug: "a-cozy-fireplace-gas-log-set",
    description: "Vented and vent-free gas log options selected with help from A Cozy Fireplace's showroom staff.",
    shortDescription: "Gas log sets, burners, and media selected for your fireplace.",
    price: 0,
    contactForPricing: true,
    categoryId: "logs-media",
    brand: "A Cozy Fireplace",
    images: ["/categories/logs-media.jpg"],
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
    id: "cozy-stone-refacing",
    sku: "COZY-STONE-REFACE",
    name: "A Cozy Fireplace Stone Refacing Package",
    slug: "a-cozy-fireplace-stone-refacing-package",
    description: "Stone veneer and fireplace refacing products for homeowners updating an existing hearth wall.",
    shortDescription: "Stone products and refacing guidance from A Cozy Fireplace.",
    price: 0,
    contactForPricing: true,
    categoryId: "stone-products",
    brand: "A Cozy Fireplace",
    images: ["/categories/mantels.jpg"],
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
