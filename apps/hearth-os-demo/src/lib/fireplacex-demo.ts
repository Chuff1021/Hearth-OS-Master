const today = () => new Date().toISOString().split("T")[0];
const daysAgo = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
};
const dateOnlyDaysAgo = (days: number) => daysAgo(days).slice(0, 10);

export const fireplacexBrand = {
  name: "Travis Industries",
  fullName: "Travis Industries Dealer Ops",
  poweredBy: "powered by Hearth-OS",
  userName: "Eric",
  userEmail: "eric@travis-demo.com",
  tagline: "Premium hearth manufacturing, dealer operations, installs, and service.",
};

export const demoTechs = [
  { id: "tech-fx-001", name: "Mason Reed", email: "mason.reed@travis-demo.com", phone: "(503) 555-0184", color: "#B91C1C", initials: "MR", role: "lead", active: true, skills: ["FireplaceX gas", "DaVinci installs", "Venting"], certifications: ["NFI Gas", "Travis Factory Certified"], hireDate: "2022-03-14" },
  { id: "tech-fx-002", name: "Elena Cruz", email: "elena.cruz@travis-demo.com", phone: "(503) 555-0147", color: "#d65050", initials: "EC", role: "tech", active: true, skills: ["Lopi wood", "Annual service", "Troubleshooting"], certifications: ["NFI Wood"], hireDate: "2023-06-02" },
  { id: "tech-fx-003", name: "Tyler Brooks", email: "tyler.brooks@travis-demo.com", phone: "(503) 555-0129", color: "#374151", initials: "TB", role: "tech", active: true, skills: ["Install helper", "Chase inspections", "Parts"], certifications: ["Apprentice"], hireDate: "2024-01-22" },
  { id: "tech-fx-004", name: "Nina Patel", email: "nina.patel@travis-demo.com", phone: "(503) 555-0166", color: "#7F1D1D", initials: "NP", role: "dispatcher", active: true, skills: ["Dispatch", "Permits", "Customer care"], certifications: [], hireDate: "2021-09-09" },
  { id: "tech-fx-005", name: "Owen Gallagher", email: "owen.gallagher@travis-demo.com", phone: "(503) 555-0190", color: "#111111", initials: "OG", role: "tech", active: true, skills: ["Pellet stoves", "Warranty", "Electrical"], certifications: ["NFI Pellet"], hireDate: "2020-11-18" },
  { id: "tech-fx-006", name: "Priya Shah", email: "priya.shah@travis-demo.com", phone: "(503) 555-0172", color: "#9f2626", initials: "PS", role: "admin", active: true, skills: ["Dealer ops", "A/R", "Purchase orders"], certifications: [], hireDate: "2019-04-08" },
] as const;

type ProductSeed = { sku: string; brand: string; name: string; category: string; unitPrice: number; cost: number; qty: number; reorder: number; location: string };

export const travisProductCatalog: ProductSeed[] = [
  { sku: "FPX-4415-HO-GSR2", brand: "Fireplace Xtrordinair", name: "4415 HO GSR2 Clean Face Gas Fireplace", category: "Fireplace Xtrordinair Gas Fireplaces", unitPrice: 8940, cost: 5364, qty: 4, reorder: 2, location: "Showroom A" },
  { sku: "FPX-6015-HO-GSR2", brand: "Fireplace Xtrordinair", name: "6015 HO GSR2 Linear Gas Fireplace", category: "Fireplace Xtrordinair Gas Fireplaces", unitPrice: 11280, cost: 6768, qty: 2, reorder: 2, location: "Warehouse Gas" },
  { sku: "FPX-864-TRV-GSR2", brand: "Fireplace Xtrordinair", name: "864 TRV GSR2 Deluxe Gas Fireplace", category: "Fireplace Xtrordinair Gas Fireplaces", unitPrice: 6595, cost: 3957, qty: 5, reorder: 2, location: "Warehouse Gas" },
  { sku: "FPX-564-TV-GSR2", brand: "Fireplace Xtrordinair", name: "564 TV GSR2 Gas Fireplace", category: "Fireplace Xtrordinair Gas Fireplaces", unitPrice: 5295, cost: 3177, qty: 7, reorder: 3, location: "Warehouse Gas" },
  { sku: "FPX-3615-HO", brand: "Fireplace Xtrordinair", name: "3615 HO Gas Fireplace", category: "Fireplace Xtrordinair Gas Fireplaces", unitPrice: 7390, cost: 4434, qty: 3, reorder: 2, location: "Warehouse Gas" },
  { sku: "FPX-42-APEX", brand: "Fireplace Xtrordinair", name: "42 Apex Wood Fireplace", category: "Fireplace Xtrordinair Wood Fireplaces", unitPrice: 10250, cost: 6150, qty: 2, reorder: 1, location: "Warehouse Wood" },
  { sku: "FPX-44-ELITE", brand: "Fireplace Xtrordinair", name: "44 Elite Wood Fireplace", category: "Fireplace Xtrordinair Wood Fireplaces", unitPrice: 11395, cost: 6837, qty: 1, reorder: 1, location: "Warehouse Wood" },
  { sku: "FPX-36-ELITE", brand: "Fireplace Xtrordinair", name: "36 Elite Wood Fireplace", category: "Fireplace Xtrordinair Wood Fireplaces", unitPrice: 8895, cost: 5337, qty: 2, reorder: 1, location: "Warehouse Wood" },
  { sku: "LOPI-ANSWER-NG", brand: "Lopi", name: "Answer NexGen-Fyre Wood Insert", category: "Lopi Wood Inserts", unitPrice: 5280, cost: 3168, qty: 6, reorder: 3, location: "Warehouse Wood" },
  { sku: "LOPI-ENDEAVOR-NG", brand: "Lopi", name: "Endeavor NexGen-Fyre Wood Stove", category: "Lopi Wood Stoves", unitPrice: 4895, cost: 2937, qty: 4, reorder: 2, location: "Warehouse Wood" },
  { sku: "LOPI-LIBERTY-NG", brand: "Lopi", name: "Liberty NexGen-Fyre Wood Stove", category: "Lopi Wood Stoves", unitPrice: 5795, cost: 3477, qty: 3, reorder: 2, location: "Warehouse Wood" },
  { sku: "LOPI-ROCKPORT", brand: "Lopi", name: "Rockport Cast Iron Wood Stove", category: "Lopi Wood Stoves", unitPrice: 6495, cost: 3897, qty: 2, reorder: 1, location: "Showroom B" },
  { sku: "LOPI-CAPE-COD", brand: "Lopi", name: "Cape Cod Hybrid-Fyre Wood Stove", category: "Lopi Wood Stoves", unitPrice: 6995, cost: 4197, qty: 2, reorder: 1, location: "Showroom B" },
  { sku: "LOPI-BERKSHIRE-MV", brand: "Lopi", name: "Berkshire MV Gas Stove", category: "Lopi Gas Stoves", unitPrice: 4895, cost: 2937, qty: 5, reorder: 2, location: "Warehouse Gas" },
  { sku: "LOPI-GREENFIELD-MV", brand: "Lopi", name: "Greenfield MV Gas Stove", category: "Lopi Gas Stoves", unitPrice: 5295, cost: 3177, qty: 4, reorder: 2, location: "Warehouse Gas" },
  { sku: "LOPI-NORTHFIELD-MV", brand: "Lopi", name: "Northfield MV Gas Stove", category: "Lopi Gas Stoves", unitPrice: 4595, cost: 2757, qty: 4, reorder: 2, location: "Warehouse Gas" },
  { sku: "LOPI-AGP-PS", brand: "Lopi", name: "AGP Pellet Stove", category: "Lopi Pellet Stoves", unitPrice: 5295, cost: 3177, qty: 3, reorder: 2, location: "Pellet Row" },
  { sku: "LOPI-DEERFIELD-PS", brand: "Lopi", name: "Deerfield Pellet Stove", category: "Lopi Pellet Stoves", unitPrice: 5995, cost: 3597, qty: 2, reorder: 1, location: "Pellet Row" },
  { sku: "DV-60X12", brand: "DaVinci Custom Fireplaces", name: "DaVinci 60x12 Linear Fireplace", category: "DaVinci Custom Gas", unitPrice: 28600, cost: 17160, qty: 1, reorder: 1, location: "Project Bay" },
  { sku: "DV-66X20-PIER", brand: "DaVinci Custom Fireplaces", name: "DaVinci 66x20 Pier Fireplace", category: "DaVinci Custom Gas", unitPrice: 39900, cost: 23940, qty: 1, reorder: 1, location: "Project Bay" },
  { sku: "DV-72X20-ISLAND", brand: "DaVinci Custom Fireplaces", name: "DaVinci 72x20 Island Fireplace", category: "DaVinci Custom Gas", unitPrice: 46200, cost: 27720, qty: 1, reorder: 1, location: "Project Bay" },
  { sku: "DV-MAESTRO-36X48", brand: "DaVinci Custom Fireplaces", name: "DaVinci Maestro 36x48 Vertical Fireplace", category: "DaVinci Custom Gas", unitPrice: 51800, cost: 31080, qty: 1, reorder: 1, location: "Project Bay" },
  { sku: "FG-36-BURNER", brand: "Fire Garden", name: "Fire Garden 36-Inch Linear Burner", category: "Fire Garden Outdoor", unitPrice: 2495, cost: 1497, qty: 8, reorder: 3, location: "Outdoor Bay" },
  { sku: "FG-60-BURNER", brand: "Fire Garden", name: "Fire Garden 60-Inch Linear Burner", category: "Fire Garden Outdoor", unitPrice: 3495, cost: 2097, qty: 5, reorder: 2, location: "Outdoor Bay" },
  { sku: "FG-72-FIREPIT", brand: "Fire Garden", name: "Fire Garden 72-Inch Firepit System", category: "Fire Garden Outdoor", unitPrice: 5795, cost: 3477, qty: 3, reorder: 1, location: "Outdoor Bay" },
  { sku: "TEMP-TORCH-POST", brand: "Tempest Torch", name: "Tempest Torch Post Mount", category: "Fire Garden Outdoor", unitPrice: 1695, cost: 1017, qty: 10, reorder: 4, location: "Outdoor Bay" },
  { sku: "TEMP-LANTERN-50K", brand: "Tempest Torch", name: "Tempest Lantern 50K Post Mount", category: "Fire Garden Outdoor", unitPrice: 1895, cost: 1137, qty: 7, reorder: 3, location: "Outdoor Bay" },
];

const accessorySeeds: ProductSeed[] = [
  { sku: "ACC-GSR2-REMOTE", brand: "Travis Industries", name: "GSR2 Remote Control Kit", category: "Controls & Electrical", unitPrice: 389, cost: 156, qty: 24, reorder: 8, location: "Parts Wall" },
  { sku: "ACC-BLOWER-UNIV", brand: "Travis Industries", name: "Universal Blower Kit", category: "Blowers & Fans", unitPrice: 489, cost: 205, qty: 18, reorder: 6, location: "Parts Wall" },
  { sku: "ACC-GREENSTART", brand: "Lopi", name: "GreenStart Igniter Assembly", category: "Controls & Electrical", unitPrice: 725, cost: 340, qty: 9, reorder: 4, location: "Parts Wall" },
  { sku: "ACC-GLASS-BLK", brand: "Fireplace Xtrordinair", name: "Black Glass Media Kit", category: "Media & Faces", unitPrice: 345, cost: 138, qty: 16, reorder: 5, location: "Finish Kits" },
  { sku: "ACC-BIRCH-LOGS", brand: "Travis Industries", name: "Birch Log Set", category: "Media & Faces", unitPrice: 595, cost: 268, qty: 11, reorder: 4, location: "Finish Kits" },
  { sku: "ACC-ARTISAN-DD", brand: "Fireplace Xtrordinair", name: "Artisan Double Door Face", category: "Media & Faces", unitPrice: 1295, cost: 648, qty: 5, reorder: 2, location: "Finish Kits" },
  { sku: "VENT-6-58-PIPE", brand: "Travis Industries", name: "6-5/8 Direct Vent Pipe 48-Inch", category: "Venting", unitPrice: 189, cost: 86, qty: 44, reorder: 16, location: "Venting Rack" },
  { sku: "VENT-COAX-ELBOW", brand: "Travis Industries", name: "Direct Vent 90 Degree Elbow", category: "Venting", unitPrice: 149, cost: 66, qty: 32, reorder: 12, location: "Venting Rack" },
  { sku: "VENT-TERM-HORIZ", brand: "Travis Industries", name: "Horizontal Termination Cap", category: "Venting", unitPrice: 259, cost: 119, qty: 13, reorder: 5, location: "Venting Rack" },
  { sku: "SRV-GASKET-DOOR", brand: "Lopi", name: "Door Gasket Service Kit", category: "Service Parts", unitPrice: 79, cost: 22, qty: 38, reorder: 12, location: "Service Bins" },
  { sku: "SRV-THERMOCOUPLE", brand: "Travis Industries", name: "Thermocouple Replacement Kit", category: "Service Parts", unitPrice: 118, cost: 44, qty: 21, reorder: 8, location: "Service Bins" },
  { sku: "SRV-IGNITER", brand: "Travis Industries", name: "Piezo Igniter Assembly", category: "Service Parts", unitPrice: 96, cost: 31, qty: 26, reorder: 8, location: "Service Bins" },
];

export const demoInventoryItems = [...travisProductCatalog, ...accessorySeeds].map((item, index) => ({
  id: `invitem-${String(index + 1).padStart(3, "0")}`,
  qbItemId: `QB-TI-${String(index + 1).padStart(4, "0")}`,
  sku: item.sku,
  name: item.name,
  description: `${item.brand} demo catalog item for Travis Industries dealer workflows. SKU ${item.sku}.`,
  category: item.category,
  location: item.location,
  unitPrice: item.unitPrice,
  cost: item.cost,
  margin: ((item.unitPrice - item.cost) / item.unitPrice) * 100,
  quantityOnHand: item.qty,
  reorderLevel: item.reorder,
  isLowStock: item.qty <= item.reorder,
  isActive: true,
  isTracked: true,
  lastPaidCost: item.cost,
  lastPaidDate: dateOnlyDaysAgo((index % 12) + 3),
  lastPaidVendorId: "vendor-travis",
  avgPaidCost: Math.round(item.cost * (0.96 + (index % 5) * 0.015)),
  billCount: 2 + (index % 7),
  updatedAt: daysAgo(index % 9),
  lastSyncedAt: daysAgo(1),
}));

export const demoCustomers = [
  { id: "cust-fx-001", displayName: "Megan Carter", firstName: "Megan", lastName: "Carter", email: "megan.carter@example.com", phone: "(503) 555-0118", address: { line1: "1842 Alder Ridge Dr", city: "Lake Oswego", state: "OR", zip: "97034" }, balance: 3240, active: true, tags: ["FireplaceX", "Install"], totalJobs: 3, totalRevenue: 18950, notes: "Interested in black glass media upgrade for 4415 HO.", createdAt: daysAgo(44), updatedAt: daysAgo(1) },
  { id: "cust-fx-002", displayName: "North Ridge Builders", firstName: "Avery", lastName: "Stone", companyName: "North Ridge Builders", email: "avery@northridge.example", phone: "(971) 555-0199", address: { line1: "720 Builder Way", city: "Bend", state: "OR", zip: "97702" }, balance: 12875, active: true, tags: ["Builder", "DaVinci"], totalJobs: 8, totalRevenue: 64200, notes: "Builder account demo: DaVinci multi-unit opportunity.", createdAt: daysAgo(90), updatedAt: daysAgo(2) },
  { id: "cust-fx-003", displayName: "Caleb Morris", firstName: "Caleb", lastName: "Morris", email: "caleb.morris@example.com", phone: "(360) 555-0133", address: { line1: "55 Fir Lane", city: "Vancouver", state: "WA", zip: "98660" }, balance: 0, active: true, tags: ["Lopi", "Service"], totalJobs: 2, totalRevenue: 1490, notes: "Needs Lopi blower fitment verified.", createdAt: daysAgo(21), updatedAt: daysAgo(3) },
  { id: "cust-fx-004", displayName: "Sarah Jensen", firstName: "Sarah", lastName: "Jensen", email: "sarah.jensen@example.com", phone: "(425) 555-0192", address: { line1: "901 Cedar Hollow", city: "Bellevue", state: "WA", zip: "98004" }, balance: 7295, active: true, tags: ["Lopi", "Wood Stove"], totalJobs: 4, totalRevenue: 22480, notes: "Cape Cod replacement consult.", createdAt: daysAgo(70), updatedAt: daysAgo(4) },
  { id: "cust-fx-005", displayName: "Horizon Remodel Group", firstName: "Dana", lastName: "Li", companyName: "Horizon Remodel Group", email: "dana@horizon-remodel.example", phone: "(206) 555-0144", address: { line1: "400 Market St", city: "Seattle", state: "WA", zip: "98101" }, balance: 0, active: true, tags: ["Trade", "FireplaceX"], totalJobs: 6, totalRevenue: 48100, notes: "Repeat remodeler account.", createdAt: daysAgo(120), updatedAt: daysAgo(5) },
  { id: "cust-fx-006", displayName: "Dawson Lake House", firstName: "Evan", lastName: "Dawson", email: "evan.dawson@example.com", phone: "(541) 555-0168", address: { line1: "17 Lakeview Rd", city: "Sisters", state: "OR", zip: "97759" }, balance: 18600, active: true, tags: ["DaVinci", "Luxury"], totalJobs: 1, totalRevenue: 51800, notes: "DaVinci Maestro vertical fireplace concept.", createdAt: daysAgo(17), updatedAt: daysAgo(0) },
  { id: "cust-fx-007", displayName: "Willamette Patio Co.", firstName: "Jordan", lastName: "Fields", companyName: "Willamette Patio Co.", email: "orders@willamettepatio.example", phone: "(503) 555-0157", address: { line1: "220 River Pkwy", city: "Portland", state: "OR", zip: "97214" }, balance: 2495, active: true, tags: ["Fire Garden", "Outdoor"], totalJobs: 5, totalRevenue: 16780, notes: "Outdoor burner and Tempest Torch package.", createdAt: daysAgo(53), updatedAt: daysAgo(6) },
  { id: "cust-fx-008", displayName: "TLC in Oklahoma", firstName: "Taylor", lastName: "Cole", companyName: "TLC in Oklahoma", email: "tlc.ok@example.com", phone: "(405) 555-0181", address: { line1: "318 Prairie Wind", city: "Norman", state: "OK", zip: "73069" }, balance: 0, active: true, tags: ["Testimonial", "Lopi"], totalJobs: 1, totalRevenue: 5795, notes: "Long-time stove owner testimonial demo account.", createdAt: daysAgo(200), updatedAt: daysAgo(20) },
] as const;

export const demoInvoices = [
  { id: "inv-fx-001", invoiceNumber: "TI-2026-1048", customerId: "cust-fx-001", customerName: "Megan Carter", jobNumber: "TI-J1048", jobTitle: "4415 HO GSR2 install deposit", issueDate: today(), dueDate: today(), status: "sent", subtotal: 12000, taxRate: 0, taxAmount: 0, totalAmount: 12000, balance: 3240, lineItems: [{ id: "line-1", description: "Fireplace Xtrordinair 4415 HO GSR2 install package", qty: 1, unitPrice: 12000, total: 12000 }], notes: "Demo invoice", createdAt: daysAgo(3), updatedAt: daysAgo(1) },
  { id: "inv-fx-002", invoiceNumber: "TI-2026-1049", customerId: "cust-fx-002", customerName: "North Ridge Builders", jobNumber: "TI-J1049", jobTitle: "DaVinci builder rough-in package", issueDate: dateOnlyDaysAgo(2), dueDate: today(), status: "overdue", subtotal: 12875, taxRate: 0, taxAmount: 0, totalAmount: 12875, balance: 12875, lineItems: [{ id: "line-1", description: "DaVinci rough-in and venting package", qty: 1, unitPrice: 12875, total: 12875 }], notes: "Demo invoice", createdAt: daysAgo(6), updatedAt: daysAgo(2) },
  { id: "inv-fx-003", invoiceNumber: "TI-2026-1050", customerId: "cust-fx-003", customerName: "Caleb Morris", jobNumber: "TI-J1050", jobTitle: "Lopi blower kit service", issueDate: dateOnlyDaysAgo(4), dueDate: dateOnlyDaysAgo(1), status: "paid", subtotal: 489, taxRate: 0, taxAmount: 0, totalAmount: 489, balance: 0, lineItems: [{ id: "line-1", description: "Lopi compatible blower kit", qty: 1, unitPrice: 489, total: 489 }], notes: "Demo invoice", createdAt: daysAgo(5), updatedAt: daysAgo(1) },
  { id: "inv-fx-004", invoiceNumber: "TI-2026-1051", customerId: "cust-fx-006", customerName: "Dawson Lake House", jobNumber: "TI-J1051", jobTitle: "DaVinci Maestro concept deposit", issueDate: dateOnlyDaysAgo(1), dueDate: today(), status: "sent", subtotal: 51800, taxRate: 0, taxAmount: 0, totalAmount: 51800, balance: 18600, lineItems: [{ id: "line-1", description: "DaVinci Maestro 36x48 Vertical Fireplace", qty: 1, unitPrice: 51800, total: 51800 }], notes: "Luxury concept demo", createdAt: daysAgo(2), updatedAt: daysAgo(0) },
  { id: "inv-fx-005", invoiceNumber: "TI-2026-1052", customerId: "cust-fx-007", customerName: "Willamette Patio Co.", jobNumber: "TI-J1052", jobTitle: "Fire Garden outdoor package", issueDate: dateOnlyDaysAgo(6), dueDate: dateOnlyDaysAgo(1), status: "sent", subtotal: 8285, taxRate: 0, taxAmount: 0, totalAmount: 8285, balance: 2495, lineItems: [{ id: "line-1", description: "Fire Garden 60-Inch Burner + Tempest Torch", qty: 1, unitPrice: 8285, total: 8285 }], notes: "Outdoor demo", createdAt: daysAgo(6), updatedAt: daysAgo(2) },
] as const;

export const demoJobs = [
  { id: "job-fx-001", jobNumber: "TI-J1048", title: "FireplaceX 4415 HO install", customerId: "cust-fx-001", customerName: "Megan Carter", propertyAddress: "1842 Alder Ridge Dr, Lake Oswego, OR", fireplaceUnit: { brand: "Fireplace Xtrordinair", model: "4415 HO GSR2", nickname: "Great room", type: "gas fireplace" }, jobType: "installation", status: "in_progress", priority: "high", scheduledDate: today(), scheduledTimeStart: "09:00", scheduledTimeEnd: "12:30", assignedTechs: [demoTechs[0], demoTechs[2]].map(({ id, name, color }) => ({ id, name, color })), totalAmount: 12000, notes: "Set unit, verify vent path, confirm black glass upgrade.", createdAt: daysAgo(8), updatedAt: daysAgo(0) },
  { id: "job-fx-002", jobNumber: "TI-J1049", title: "DaVinci linear site measure", customerId: "cust-fx-002", customerName: "North Ridge Builders", propertyAddress: "720 Builder Way, Bend, OR", fireplaceUnit: { brand: "DaVinci", model: "See-Thru Linear 48x20", nickname: "Lot 12 model home", type: "custom gas" }, jobType: "estimate", status: "scheduled", priority: "normal", scheduledDate: today(), scheduledTimeStart: "13:30", scheduledTimeEnd: "15:00", assignedTechs: [demoTechs[1]].map(({ id, name, color }) => ({ id, name, color })), totalAmount: 28600, notes: "Builder wants three finish options.", createdAt: daysAgo(5), updatedAt: daysAgo(1) },
  { id: "job-fx-003", jobNumber: "TI-J1050", title: "Lopi blower kit fitment", customerId: "cust-fx-003", customerName: "Caleb Morris", propertyAddress: "55 Fir Lane, Vancouver, WA", fireplaceUnit: { brand: "Lopi", model: "Endeavor NexGen-Fyre", nickname: "Family room", type: "wood insert" }, jobType: "service", status: "completed", priority: "normal", scheduledDate: today(), scheduledTimeStart: "08:00", scheduledTimeEnd: "09:00", assignedTechs: [demoTechs[1]].map(({ id, name, color }) => ({ id, name, color })), totalAmount: 489, notes: "Completed demo service call.", completedAt: daysAgo(0), createdAt: daysAgo(4), updatedAt: daysAgo(0) },
  { id: "job-fx-004", jobNumber: "TI-J1051", title: "DaVinci Maestro consult", customerId: "cust-fx-006", customerName: "Dawson Lake House", propertyAddress: "17 Lakeview Rd, Sisters, OR", fireplaceUnit: { brand: "DaVinci", model: "Maestro 36x48", nickname: "Lake room", type: "custom gas" }, jobType: "estimate", status: "scheduled", priority: "high", scheduledDate: today(), scheduledTimeStart: "15:30", scheduledTimeEnd: "17:00", assignedTechs: [demoTechs[0]].map(({ id, name, color }) => ({ id, name, color })), totalAmount: 51800, notes: "Bring finish samples and venting checklist.", createdAt: daysAgo(2), updatedAt: daysAgo(0) },
  { id: "job-fx-005", jobNumber: "TI-J1052", title: "Fire Garden outdoor startup", customerId: "cust-fx-007", customerName: "Willamette Patio Co.", propertyAddress: "220 River Pkwy, Portland, OR", fireplaceUnit: { brand: "Fire Garden", model: "60-Inch Burner", nickname: "Patio display", type: "outdoor fire" }, jobType: "service", status: "scheduled", priority: "normal", scheduledDate: today(), scheduledTimeStart: "11:00", scheduledTimeEnd: "12:00", assignedTechs: [demoTechs[4]].map(({ id, name, color }) => ({ id, name, color })), totalAmount: 2495, notes: "Outdoor flame pattern tune.", createdAt: daysAgo(3), updatedAt: daysAgo(0) },
] as const;

export const demoVendors = [
  { id: "vendor-travis", qbVendorId: "QB-V-001", displayName: "Travis Industries Demo Supply", companyName: "Travis Industries", email: "orders@travis-demo.example", phone: "(425) 555-0100", is1099: false, isActive: true, addressLine1: "House of Fire", city: "Mukilteo", state: "WA", zip: "98275", accountNumber: "TI-DEMO", paymentTerms: "Net 30", balance: 18425, billCount: 9, openBillCount: 3, poCount: 6, openPOCount: 4, lastActivity: daysAgo(1) },
  { id: "vendor-venting", qbVendorId: "QB-V-002", displayName: "Northwest Venting Supply", companyName: "Northwest Venting Supply", email: "orders@nwventing.example", phone: "(503) 555-0101", is1099: false, isActive: true, addressLine1: "1420 Industrial Way", city: "Portland", state: "OR", zip: "97230", accountNumber: "VENT-402", paymentTerms: "Net 15", balance: 4200, billCount: 5, openBillCount: 1, poCount: 3, openPOCount: 1, lastActivity: daysAgo(4) },
  { id: "vendor-stone", qbVendorId: "QB-V-003", displayName: "Cascade Stone & Mantel", companyName: "Cascade Stone & Mantel", email: "sales@cascadestone.example", phone: "(360) 555-0102", is1099: false, isActive: true, addressLine1: "88 Quarry Rd", city: "Vancouver", state: "WA", zip: "98660", accountNumber: "STONE-118", paymentTerms: "Net 30", balance: 0, billCount: 3, openBillCount: 0, poCount: 2, openPOCount: 0, lastActivity: daysAgo(12) },
] as const;

export const demoActivity = [
  { id: "act-fx-001", type: "payment", title: "Payment received", description: "TI-2026-1050 · $489.00 · card", actor: "Caleb Morris", amount: 489, at: new Date().toISOString(), href: "/payments", status: null },
  { id: "act-fx-002", type: "invoice", title: "Invoice sent", description: "TI-2026-1048 · $12,000.00 · $3,240.00 open", actor: "Megan Carter", amount: 12000, at: daysAgo(1), href: "/invoices", status: "sent" },
  { id: "act-fx-003", type: "estimate", title: "Estimate sent", description: "TI-EST-2217 · $28,600.00", actor: "North Ridge Builders", amount: 28600, at: daysAgo(2), href: "/estimates", status: "pending" },
  { id: "act-fx-004", type: "po", title: "PO sent", description: "PO-TI-778 · $8,940.00", actor: "Travis Industries Demo Supply", amount: 8940, at: daysAgo(3), href: "/purchase-orders", status: "open" },
] as const;

export const demoEstimates = [
  { Id: "est-ti-001", DocNumber: "TI-EST-2217", TxnDate: dateOnlyDaysAgo(2), ExpirationDate: dateOnlyDaysAgo(-28), PrivateNote: "DaVinci builder package", BillEmail: { Address: "avery@northridge.example" }, CustomerRef: { value: "cust-fx-002", name: "North Ridge Builders" }, TotalAmt: 28600, status: "pending", Line: [{ Id: "1", Amount: 28600, Description: "DaVinci 60x12 Linear Fireplace builder package", DetailType: "SalesItemLineDetail", SalesItemLineDetail: { ItemRef: { value: "DV-60X12", name: "DaVinci 60x12 Linear Fireplace" }, Qty: 1, UnitPrice: 28600 } }] },
  { Id: "est-ti-002", DocNumber: "TI-EST-2218", TxnDate: dateOnlyDaysAgo(1), ExpirationDate: dateOnlyDaysAgo(-29), PrivateNote: "FireplaceX premium gas package", BillEmail: { Address: "megan.carter@example.com" }, CustomerRef: { value: "cust-fx-001", name: "Megan Carter" }, TotalAmt: 12000, status: "accepted", Line: [{ Id: "1", Amount: 8940, Description: "Fireplace Xtrordinair 4415 HO GSR2", DetailType: "SalesItemLineDetail", SalesItemLineDetail: { ItemRef: { value: "FPX-4415-HO-GSR2", name: "4415 HO GSR2" }, Qty: 1, UnitPrice: 8940 } }, { Id: "2", Amount: 345, Description: "Black Glass Media Kit", DetailType: "SalesItemLineDetail", SalesItemLineDetail: { ItemRef: { value: "ACC-GLASS-BLK", name: "Black Glass Media Kit" }, Qty: 1, UnitPrice: 345 } }] },
];

export function demoInventoryResponse(params?: URLSearchParams) {
  const q = (params?.get("q") || "").toLowerCase();
  const filter = params?.get("filter") || "tracked";
  const category = params?.get("category") || "";
  const limit = Math.min(500, Math.max(20, parseInt(params?.get("limit") || "100", 10)));
  const page = Math.max(1, parseInt(params?.get("page") || "1", 10));
  let items = demoInventoryItems.filter((item) => !q || [item.name, item.sku, item.description, item.category].some((v) => String(v || "").toLowerCase().includes(q)));
  if (category) items = items.filter((item) => item.category === category);
  if (filter === "low_stock") items = items.filter((item) => item.isLowStock);
  if (filter === "no_cost") items = items.filter((item) => !item.cost);
  const totalCount = items.length;
  const paged = items.slice((page - 1) * limit, page * limit);
  const categories = Array.from(new Set(demoInventoryItems.map((item) => item.category))).sort();
  const trackedItems = demoInventoryItems.filter((item) => item.isTracked).length;
  const lowStockCount = demoInventoryItems.filter((item) => item.isLowStock).length;
  const totalValue = demoInventoryItems.reduce((sum, item) => sum + item.quantityOnHand * item.cost, 0);
  return { items: paged, page, limit, totalCount, stats: { totalItems: demoInventoryItems.length, trackedItems, untrackedItems: 0, lowStockCount, noCostCount: 0, totalValue }, categories };
}

export function demoCustomerCenterResponse(params?: URLSearchParams) {
  const q = (params?.get("q") || "").toLowerCase();
  const filter = (params?.get("filter") || "active").toLowerCase();
  let items = demoCustomers.map((c) => {
    const customerInvoices = demoInvoices.filter((i) => i.customerId === c.id);
    const balance = customerInvoices.reduce((sum, i) => sum + i.balance, 0);
    const totalRevenue = customerInvoices.reduce((sum, i) => sum + i.totalAmount, 0) || c.totalRevenue;
    return { id: c.id, qbCustomerId: c.id, displayName: c.displayName, firstName: c.firstName, lastName: c.lastName, companyName: "companyName" in c ? c.companyName || null : null, email: c.email || null, phone: c.phone || null, source: "demo", isActive: c.active, balance, invoiceCount: customerInvoices.length, openInvoiceCount: customerInvoices.filter((i) => i.balance > 0).length, paymentCount: customerInvoices.filter((i) => i.status === "paid").length, totalRevenue, lastActivity: c.updatedAt };
  });
  if (q) items = items.filter((i) => [i.displayName, i.companyName, i.email, i.phone].some((v) => String(v || "").toLowerCase().includes(q)));
  if (filter === "with_balance") items = items.filter((i) => i.balance > 0);
  if (filter === "inactive") items = [];
  const totals = items.reduce((acc, x) => ({ customers: acc.customers + 1, balance: acc.balance + x.balance, openInvoices: acc.openInvoices + x.openInvoiceCount, revenue: acc.revenue + x.totalRevenue }), { customers: 0, balance: 0, openInvoices: 0, revenue: 0 });
  const totalDue = demoInvoices.reduce((sum, i) => sum + i.balance, 0);
  const overdue = demoInvoices.filter((i) => i.status === "overdue");
  const revenueYTD = demoInvoices.reduce((sum, i) => sum + i.totalAmount, 0);
  return { items, totals, moneyBar: { totalDue, openInvoiceCount: demoInvoices.filter((i) => i.balance > 0).length, overdueAmount: overdue.reduce((sum, i) => sum + i.balance, 0), overdueCount: overdue.length, revenueYTD, ytdInvoiceCount: demoInvoices.length } };
}

export function demoVendorResponse() {
  const items = demoVendors.map((vendor) => ({ ...vendor }));
  const totals = items.reduce((acc, x) => ({ vendors: acc.vendors + 1, balance: acc.balance + x.balance, openBills: acc.openBills + x.openBillCount, openPOs: acc.openPOs + x.openPOCount }), { vendors: 0, balance: 0, openBills: 0, openPOs: 0 });
  return { items, totals, moneyBar: { totalOwed: totals.balance, openBillCount: totals.openBills, overdueAmount: 4200, overdueCount: 1, openPOValue: 73800, openPOCount: totals.openPOs, ytdSpend: 184200, ytdBillCount: 17 } };
}

function demoInvoiceProfitRows() {
  return demoInvoices.map((invoice, index) => {
    const cogs = Math.round(invoice.subtotal * (0.52 + (index % 3) * 0.04));
    const billable = Math.round(invoice.subtotal * (0.08 + (index % 2) * 0.03));
    const profit = invoice.subtotal - cogs - billable;
    const margin = invoice.subtotal > 0 ? (profit / invoice.subtotal) * 100 : null;
    return {
      id: invoice.id,
      invoiceNumber: invoice.invoiceNumber,
      issueDate: invoice.issueDate,
      status: invoice.status,
      customerId: invoice.customerId,
      customerName: invoice.customerName,
      revenue: invoice.subtotal,
      taxPassthrough: 0,
      tax: invoice.taxAmount,
      billed: invoice.totalAmount,
      cogs,
      billable,
      profit,
      margin,
      balance: invoice.balance,
    };
  });
}

export function demoProfitByJobResponse(params?: URLSearchParams) {
  const page = Math.max(1, parseInt(params?.get("page") || "1", 10));
  const limit = Math.min(500, Math.max(20, parseInt(params?.get("limit") || "100", 10)));
  let items = demoInvoiceProfitRows();
  const q = (params?.get("q") || "").toLowerCase();
  if (q) items = items.filter((i) => [i.invoiceNumber, i.customerName, i.status].some((v) => v.toLowerCase().includes(q)));
  const totalCount = items.length;
  const revenue = items.reduce((sum, i) => sum + i.revenue, 0);
  const cogs = items.reduce((sum, i) => sum + i.cogs, 0);
  const billable = items.reduce((sum, i) => sum + i.billable, 0);
  const profit = items.reduce((sum, i) => sum + i.profit, 0);
  const balance = items.reduce((sum, i) => sum + i.balance, 0);
  const margins = items.filter((i) => i.margin != null).map((i) => i.margin as number);
  const paged = items.slice((page - 1) * limit, page * limit);
  return {
    items: paged,
    page,
    limit,
    totalCount,
    windowStats: {
      invoiceCount: items.length,
      revenue,
      taxPassthrough: 0,
      tax: 0,
      billed: revenue,
      cogs,
      billable,
      totalCost: cogs + billable,
      profit,
      margin: revenue > 0 ? (profit / revenue) * 100 : null,
      avgMarginPerInvoice: margins.length ? margins.reduce((a, b) => a + b, 0) / margins.length : null,
      unprofitableCount: items.filter((i) => i.profit < 0).length,
      balance,
      bestProfit: items.length ? Math.max(...items.map((i) => i.profit)) : null,
      worstProfit: items.length ? Math.min(...items.map((i) => i.profit)) : null,
    },
  };
}

export function demoSalesByCustomerResponse(params?: URLSearchParams) {
  const limit = Math.min(2000, Math.max(20, parseInt(params?.get("limit") || "500", 10)));
  const rows = demoCustomerCenterResponse(params).items.map((customer) => {
    const invoices = demoInvoices.filter((invoice) => invoice.customerId === customer.id);
    const revenue = invoices.reduce((sum, i) => sum + i.totalAmount, 0) || customer.totalRevenue;
    const cogs = Math.round(revenue * 0.58);
    const profit = revenue - cogs;
    return {
      customerId: customer.id,
      customerName: customer.displayName,
      email: customer.email,
      phone: customer.phone,
      revenue,
      cogs,
      profit,
      margin: revenue > 0 ? Number(((profit / revenue) * 100).toFixed(1)) : null,
      openBalance: customer.balance,
      invoiceCount: customer.invoiceCount,
      lastSale: customer.lastActivity,
    };
  }).sort((a, b) => b.revenue - a.revenue);
  return {
    customers: rows.slice(0, limit),
    totals: {
      revenue: rows.reduce((sum, r) => sum + r.revenue, 0),
      openBalance: rows.reduce((sum, r) => sum + r.openBalance, 0),
      invoiceCount: demoInvoices.length,
      customerCount: rows.length,
    },
    window: { since: params?.get("since") || null, until: params?.get("until") || null },
  };
}

export function demoSalesByItemResponse(params?: URLSearchParams) {
  const limit = Math.min(1000, Math.max(20, parseInt(params?.get("limit") || "200", 10)));
  const top = demoInventoryItems.slice(0, 18).map((item, index) => {
    const qty = index % 4 === 0 ? 1 : 2 + (index % 5);
    const revenue = qty * item.unitPrice;
    const cogs = qty * item.cost;
    const profit = revenue - cogs;
    return {
      qbItemId: item.qbItemId,
      name: item.name,
      sku: item.sku,
      qty,
      revenue,
      cogs,
      profit,
      margin: revenue > 0 ? Number(((profit / revenue) * 100).toFixed(1)) : null,
      avgPrice: item.unitPrice,
      invoiceCount: 1 + (index % 4),
      lastSold: dateOnlyDaysAgo(index % 30),
    };
  }).sort((a, b) => b.revenue - a.revenue);
  return {
    items: top.slice(0, limit),
    totals: {
      revenue: top.reduce((sum, item) => sum + item.revenue, 0),
      qty: top.reduce((sum, item) => sum + item.qty, 0),
      profit: top.reduce((sum, item) => sum + item.profit, 0),
      itemCount: top.length,
    },
    window: { since: params?.get("since") || null, until: params?.get("until") || null },
  };
}

export function demoArAgingResponse(params?: URLSearchParams) {
  const onlyOverdue = params?.get("onlyOverdue") === "true";
  const buckets = { current: 0, d1_30: 0, d31_60: 0, d61_90: 0, d91_plus: 0 };
  const customers = demoInvoices
    .filter((invoice) => invoice.balance > 0)
    .map((invoice, index) => {
      const bucket = invoice.status === "overdue" ? "d1_30" : "current";
      if (onlyOverdue && bucket === "current") return null;
      buckets[bucket as keyof typeof buckets] += invoice.balance;
      const customer = demoCustomers.find((c) => c.id === invoice.customerId);
      return {
        customerId: invoice.customerId,
        customerName: invoice.customerName,
        customerEmail: customer?.email || null,
        customerPhone: customer?.phone || null,
        buckets: { current: 0, d1_30: 0, d31_60: 0, d61_90: 0, d91_plus: 0, [bucket]: invoice.balance },
        totalBalance: invoice.balance,
        invoices: [{
          id: invoice.id,
          number: invoice.invoiceNumber,
          issueDate: invoice.issueDate,
          dueDate: invoice.dueDate,
          balance: invoice.balance,
          totalAmount: invoice.totalAmount,
          daysOverdue: bucket === "current" ? 0 : 12 + index,
          bucket,
        }],
      };
    })
    .filter(Boolean)
    .sort((a: any, b: any) => b.totalBalance - a.totalBalance);
  const grandTotal = Object.values(buckets).reduce((a, b) => a + b, 0);
  const overdueTotal = buckets.d1_30 + buckets.d31_60 + buckets.d61_90 + buckets.d91_plus;
  return { customers, buckets, grandTotal, overdueTotal, invoiceCount: customers.length, customerCount: customers.length };
}
