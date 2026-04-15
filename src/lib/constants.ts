export const SITE = {
  name: "Prime Path Trucking",
  tagline: "We Handle the Paperwork. You Drive.",
  phone: "+1-800-000-0000", // TODO: replace with real toll-free number
  phoneDisplay: "1-800-000-0000",
  whatsapp: "https://wa.me/10000000000", // TODO: replace with real WhatsApp Business number
  email: "dispatch@primepathtucking.com", // TODO: confirm email
  address: "", // TODO: client to provide US company address
  url: "https://primepathtucking.com",
} as const;

export const EQUIPMENT_TYPES = [
  { slug: "dry-van",            label: "Dry Van",             rpm: "$2.00 – $3.50" },
  { slug: "reefer",             label: "Reefer",              rpm: "$2.50 – $4.00" },
  { slug: "flatbed",            label: "Flatbed",             rpm: "$2.80 – $4.50" },
  { slug: "step-deck",          label: "Step Deck",           rpm: "$3.00 – $5.00" },
  { slug: "power-only",         label: "Power Only",          rpm: "$1.80 – $3.00" },
  { slug: "hotshot",            label: "Hotshot",             rpm: "$1.50 – $3.00" },
  { slug: "box-trucks",         label: "Box Trucks",          rpm: "$1.50 – $2.80" },
  { slug: "sprinter-cargo-vans",label: "Sprinter/Cargo Vans", rpm: "$1.20 – $2.50" },
] as const;

export type EquipmentSlug = (typeof EQUIPMENT_TYPES)[number]["slug"];

export const PRICING_TIERS = [
  {
    name: "Standard",
    rate: "4–10%",
    rateNote: "of gross load (based on truck type)",
    bestFor: "Owner-operators, single truck",
    highlight: false,
  },
  {
    name: "Fleet",
    rate: "3–6%",
    rateNote: "of gross load (based on truck type)",
    bestFor: "3–10 trucks",
    highlight: true,
  },
  {
    name: "Custom",
    rate: "Let's Talk",
    rateNote: "tailored to your operation",
    bestFor: "10+ trucks or dedicated lanes",
    highlight: false,
  },
] as const;

export const NAV_LINKS = [
  { label: "Services",  href: "/services" },
  { label: "Equipment", href: "/equipment/dry-van" },
  { label: "Pricing",   href: "/pricing" },
  { label: "About",     href: "/about" },
  { label: "Contact",   href: "/contact" },
] as const;

export const TEAM = [
  {
    name: "Jeff James",
    title: "Senior Dispatcher",
    bio: "Jeff is a seasoned freight professional with 4+ years of hands-on dispatching experience. He specializes in finding above-market RPM loads, building strong broker relationships, and ensuring every carrier on his roster gets consistent, high-paying freight. Jeff's deep knowledge of US lanes, load boards, and broker negotiations means your truck stays loaded and your earnings stay high.",
  },
  {
    name: "Eddie Scott",
    title: "Senior Sales Agent & Marketing Analyst",
    bio: "Eddie brings a sharp eye for market trends and carrier acquisition to Prime Path Trucking. With a background in freight sales and digital marketing, he bridges the gap between finding new clients and delivering real value. Eddie ensures every carrier who joins Prime Path understands exactly what they're getting — and gets it.",
  },
] as const;

export const EQUIPMENT_DETAIL: Record<string, {
  headline: string;
  sub: string;
  rpmRange: string;
  dispatchFocus: string;
  loadTypes: string[];
  industries: string[];
  challenges: { title: string; solution: string }[];
  stats: { value: string; label: string }[];
  seoKeyword: string;
}> = {
  "dry-van": {
    headline: "Dry Van Dispatch That Keeps You Loaded",
    sub: "The highest-volume freight category in the US. We find consistent, above-market dry van loads on your preferred lanes — every day.",
    rpmRange: "$2.00 – $3.50",
    dispatchFocus: "Volume load finding, consistent lanes, broker relationships",
    loadTypes: ["General freight", "Packaged goods", "Electronics", "Auto parts", "Retail merchandise"],
    industries: ["Retail & e-commerce", "Manufacturing", "Consumer goods", "Automotive"],
    challenges: [
      { title: "Low posted rates", solution: "We negotiate above posted rates using our broker relationships and market knowledge." },
      { title: "Deadhead miles between loads", solution: "We stack loads back-to-back on your lanes to minimize empty miles." },
      { title: "Broker paperwork for every new relationship", solution: "We handle all carrier packet setup so you never fill out the same form twice." },
    ],
    stats: [{ value: "$2.00–$3.50", label: "Avg RPM Range" }, { value: "DAT + Truckstop", label: "Load Boards" }, { value: "24/7", label: "Coverage" }, { value: "48 hrs", label: "First Load" }],
    seoKeyword: "dry van dispatch service",
  },
  "reefer": {
    headline: "Reefer Dispatch for Temperature-Sensitive Freight",
    sub: "Premium rates for refrigerated loads. We work with produce, pharma, and food-grade brokers to keep your reefer running at top RPM.",
    rpmRange: "$2.50 – $4.00",
    dispatchFocus: "Temperature-sensitive brokers, produce lanes, premium rates",
    loadTypes: ["Fresh produce", "Frozen foods", "Pharmaceuticals", "Dairy products", "Beverages"],
    industries: ["Food & beverage", "Agriculture", "Pharmaceutical", "Grocery retail"],
    challenges: [
      { title: "Finding brokers who work with reefer", solution: "We have established relationships with produce and food-grade brokers across the US." },
      { title: "Temperature compliance documentation", solution: "We handle all rate confirmations and temperature requirement documentation." },
      { title: "Seasonal lane fluctuations", solution: "We track produce seasons and shift your lanes to maximize RPM year-round." },
    ],
    stats: [{ value: "$2.50–$4.00", label: "Avg RPM Range" }, { value: "Produce Lanes", label: "Specialty" }, { value: "24/7", label: "Coverage" }, { value: "48 hrs", label: "First Load" }],
    seoKeyword: "reefer truck dispatcher USA",
  },
  "flatbed": {
    headline: "Flatbed Dispatch for Specialized Freight",
    sub: "Higher RPM, specialized brokers, and project freight. We find flatbed loads that pay what your equipment is worth.",
    rpmRange: "$2.80 – $4.50",
    dispatchFocus: "Project freight, specialized brokers, higher RPM potential",
    loadTypes: ["Steel & metal", "Construction materials", "Machinery", "Lumber", "Agricultural equipment"],
    industries: ["Construction", "Steel & manufacturing", "Agriculture", "Energy & utilities"],
    challenges: [
      { title: "Finding brokers who specialize in flatbed", solution: "We work with flatbed-specific brokers who consistently post above-market rates." },
      { title: "Securing loads and rate confirmations", solution: "We handle all rate confirmations and load documentation on your behalf." },
      { title: "Permit coordination awareness", solution: "We flag oversized loads that may require permits before accepting." },
    ],
    stats: [{ value: "$2.80–$4.50", label: "Avg RPM Range" }, { value: "Specialized", label: "Broker Network" }, { value: "24/7", label: "Coverage" }, { value: "48 hrs", label: "First Load" }],
    seoKeyword: "flatbed truck dispatcher",
  },
  "step-deck": {
    headline: "Step Deck Dispatch for Oversized Loads",
    sub: "Fewer loads, higher pay. We find step deck freight that maximizes your RPM on every run.",
    rpmRange: "$3.00 – $5.00",
    dispatchFocus: "Oversized loads, permit coordination awareness, premium rates",
    loadTypes: ["Heavy machinery", "Construction equipment", "Industrial components", "Oversized cargo", "Wind energy parts"],
    industries: ["Heavy construction", "Energy", "Mining", "Industrial manufacturing"],
    challenges: [
      { title: "Limited broker pool for step deck", solution: "We have direct relationships with brokers who specialize in oversized and step deck freight." },
      { title: "Permit and routing complexity", solution: "We flag loads requiring permits and coordinate routing awareness before acceptance." },
      { title: "Inconsistent load availability", solution: "We search multiple boards and broker networks daily to keep your step deck moving." },
    ],
    stats: [{ value: "$3.00–$5.00", label: "Avg RPM Range" }, { value: "Oversized", label: "Specialty" }, { value: "24/7", label: "Coverage" }, { value: "48 hrs", label: "First Load" }],
    seoKeyword: "step deck dispatch service",
  },
  "power-only": {
    headline: "Power Only Dispatch — Drop & Hook Specialists",
    sub: "Asset-light and growing. We find drop-and-hook power only loads that keep your tractor moving without the wait.",
    rpmRange: "$1.80 – $3.00",
    dispatchFocus: "Drop-and-hook, trailer pool brokers, asset-light operations",
    loadTypes: ["Drop & hook freight", "Trailer pool loads", "Intermodal", "Retail distribution", "E-commerce fulfillment"],
    industries: ["Retail", "E-commerce", "Intermodal", "Distribution & logistics"],
    challenges: [
      { title: "Finding consistent drop-and-hook loads", solution: "We work with trailer pool brokers who offer consistent power only opportunities." },
      { title: "Trailer availability and coordination", solution: "We confirm trailer availability before committing to any load." },
      { title: "Lower RPM than asset-based freight", solution: "We focus on volume and back-to-back loads to maximize your weekly earnings." },
    ],
    stats: [{ value: "$1.80–$3.00", label: "Avg RPM Range" }, { value: "Drop & Hook", label: "Specialty" }, { value: "24/7", label: "Coverage" }, { value: "48 hrs", label: "First Load" }],
    seoKeyword: "power only dispatch service",
  },
  "hotshot": {
    headline: "Hotshot Dispatch — Time-Critical Loads",
    sub: "Expedited freight that pays a premium. We find hotshot loads that match your schedule and maximize your RPM per run.",
    rpmRange: "$1.50 – $3.00",
    dispatchFocus: "Expedited loads, time-critical freight, USDOT Class III",
    loadTypes: ["Oilfield equipment", "Construction parts", "Expedited machinery", "Time-sensitive cargo", "Emergency freight"],
    industries: ["Oil & gas", "Construction", "Manufacturing", "Agriculture"],
    challenges: [
      { title: "Short booking windows", solution: "We monitor load boards in real-time and respond to hotshot opportunities immediately." },
      { title: "Finding loads that justify the urgency premium", solution: "We only present loads where the rate reflects the expedited nature of the haul." },
      { title: "USDOT Class III compliance", solution: "We ensure all loads are appropriate for your USDOT Class III authority." },
    ],
    stats: [{ value: "$1.50–$3.00", label: "Avg RPM Range" }, { value: "Expedited", label: "Specialty" }, { value: "24/7", label: "Coverage" }, { value: "48 hrs", label: "First Load" }],
    seoKeyword: "hotshot dispatch service",
  },
  "box-trucks": {
    headline: "Box Truck Dispatch — Urban & Last-Mile Freight",
    sub: "Urban freight, last-mile delivery, and regional loads. We keep your box truck moving in the most active freight markets.",
    rpmRange: "$1.50 – $2.80",
    dispatchFocus: "Urban freight, last-mile delivery, regional loads",
    loadTypes: ["Last-mile delivery", "Retail freight", "Moving & storage", "Food service", "Medical supplies"],
    industries: ["Retail", "E-commerce", "Food service", "Healthcare", "Moving & storage"],
    challenges: [
      { title: "Finding consistent urban loads", solution: "We work with last-mile and regional brokers who specialize in box truck freight." },
      { title: "Short-haul load stacking", solution: "We plan multi-stop and regional routes to maximize your daily earnings." },
      { title: "Broker setup for smaller carriers", solution: "We handle all broker packet setup regardless of your authority age." },
    ],
    stats: [{ value: "$1.50–$2.80", label: "Avg RPM Range" }, { value: "Last-Mile", label: "Specialty" }, { value: "24/7", label: "Coverage" }, { value: "48 hrs", label: "First Load" }],
    seoKeyword: "box truck dispatch service",
  },
  "sprinter-cargo-vans": {
    headline: "Sprinter & Cargo Van Dispatch — Expedited Small Freight",
    sub: "E-commerce, medical, and expedited small freight. We find van loads that pay above market for your size and speed.",
    rpmRange: "$1.20 – $2.50",
    dispatchFocus: "Expedited small freight, e-commerce, medical supply",
    loadTypes: ["E-commerce parcels", "Medical supplies", "Pharmaceutical", "Documents & samples", "Expedited small freight"],
    industries: ["E-commerce", "Healthcare", "Pharmaceutical", "Legal & financial", "Technology"],
    challenges: [
      { title: "Finding loads sized for vans", solution: "We work with brokers who specifically post sprinter and cargo van loads." },
      { title: "Competing with larger carriers", solution: "Van loads are a growing segment — we position you with brokers who prefer your speed and flexibility." },
      { title: "Medical and pharma compliance requirements", solution: "We ensure all medical loads match your equipment capabilities before accepting." },
    ],
    stats: [{ value: "$1.20–$2.50", label: "Avg RPM Range" }, { value: "E-commerce", label: "Specialty" }, { value: "24/7", label: "Coverage" }, { value: "48 hrs", label: "First Load" }],
    seoKeyword: "cargo van dispatch service",
  },
};
