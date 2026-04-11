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
