import phones from "@/assets/cat-phones.jpg";
import audio from "@/assets/cat-audio.jpg";
import watch from "@/assets/cat-watch.jpg";
import accessories from "@/assets/cat-accessories.jpg";
import electronics from "@/assets/cat-electronics.jpg";
import cctv from "@/assets/cat-cctv.jpg";
import chargers from "@/assets/cat-chargers.jpg";
import repair from "@/assets/cat-repair.jpg";

/**
 * MOCK DATA — replace with API data later.
 * `image` accepts any imported asset or an image URL string.
 */

export type Category =
  | "Mobile Phones"
  | "CCTV & Cameras"
  | "Chargers & Cables"
  | "Repair Tools & Parts"
  | "Electronics"
  | "Accessories"
  | "Audio"
  | "Smart Watches";

export const categories: Category[] = [
  "Mobile Phones",
  "CCTV & Cameras",
  "Chargers & Cables",
  "Repair Tools & Parts",
  "Electronics",
  "Accessories",
  "Audio",
  "Smart Watches",
];

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  currency: string;
  available: boolean;
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  warranty: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "hikvision-4k-cctv-outdoor",
    name: "Sentinel 4K Ultra HD Outdoor CCTV Camera",
    brand: "Hikvision",
    category: "CCTV & Cameras",
    price: 18500,
    currency: "Rs.",
    available: true,
    shortDescription: "4K smart AI motion detection, color night vision, IP67 weatherproof.",
    description:
      "Enterprise-grade outdoor dome security camera with crisp 4K Ultra HD video, intelligent human and vehicle detection, full-color night vision up to 30 meters, and rugged IP67 weatherproof aluminum housing for round-the-clock protection.",
    specs: [
      { label: "Resolution", value: "4K UHD (3840 x 2160) @ 30fps" },
      { label: "Night Vision", value: "Color Night Vision + IR up to 30m" },
      { label: "Durability", value: "IP67 weatherproof & IK10 vandal-proof" },
      { label: "Smart AI", value: "Human & vehicle detection, 2-way audio" },
    ],
    warranty: "24 months warranty",
    image: cctv,
  },
  {
    id: "anker-65w-gan-charger",
    name: "65W GaN Fast Charger 3-Port",
    brand: "Anker",
    category: "Chargers & Cables",
    price: 8900,
    currency: "Rs.",
    available: true,
    shortDescription: "High-speed Gallium Nitride 3-port charger for phones, tablets & laptops.",
    description:
      "Powered by GaN III technology, this ultra-compact 65W fast charger can power your smartphone, tablet, and USB-C laptop simultaneously. Delivers 3x faster charging than standard blocks with ActiveShield 2.0 dynamic temperature monitoring.",
    specs: [
      { label: "Max Output", value: "65W High-Speed Power Delivery (PD 3.0)" },
      { label: "Ports", value: "2x USB-C + 1x USB-A (PowerIQ 4.0)" },
      { label: "Technology", value: "GaN III with ActiveShield temperature guard" },
      { label: "Compatibility", value: "iPhone, Samsung Galaxy, MacBook, Dell, iPad" },
    ],
    warranty: "18 months warranty",
    image: chargers,
  },
  {
    id: "pro-128in1-repair-toolkit",
    name: "128-in-1 Precision Electronics Repair Toolkit",
    brand: "Pro-Fix",
    category: "Repair Tools & Parts",
    price: 6900,
    currency: "Rs.",
    available: true,
    shortDescription: "Comprehensive magnetic screwdriver kit for phones, consoles & laptops.",
    description:
      "A technician-grade precision screwdriver and repair toolset. Includes 120 magnetic CR-V alloy bits, anti-static ESD tweezers, heavy-duty suction cup, flexible extension shaft, and ultra-thin pry tools for opening smartphones, tablets, laptops, and game consoles without scratching.",
    specs: [
      { label: "Bits", value: "120 precision magnetic alloy bits (Torx, Pentalobe, Tri-wing, Phillips)" },
      { label: "Accessories", value: "ESD tweezers, suction cup, spudgers, pry cards" },
      { label: "Case", value: "Impact-resistant magnetic storage organizer" },
      { label: "Compatibility", value: "iPhone, Android, MacBook, Nintendo, PlayStation, Watches" },
    ],
    warranty: "12 months warranty",
    image: repair,
  },
  {
    id: "imou-360-wifi-cctv",
    name: "360° WiFi PTZ Smart Security Camera",
    brand: "Imou",
    category: "CCTV & Cameras",
    price: 9800,
    currency: "Rs.",
    available: true,
    shortDescription: "Motorized 360° pan-tilt coverage, mobile app live stream and smart alarm.",
    description:
      "Smart indoor/outdoor WiFi pan-and-tilt security camera that gives you complete 360-degree coverage with zero blind spots. Features smart motion tracking, crystal-clear 2K Quad HD resolution, built-in siren, and instant smartphone notifications.",
    specs: [
      { label: "Coverage", value: "355° Pan, 90° Tilt (zero blind spots)" },
      { label: "Resolution", value: "2K Quad HD (2560 x 1440)" },
      { label: "Connectivity", value: "2.4GHz WiFi & Cloud/MicroSD up to 256GB" },
      { label: "Features", value: "Two-way talk, auto tracking, siren alarm" },
    ],
    warranty: "12 months warranty",
    image: cctv,
  },
  {
    id: "braided-usbc-cable-100w",
    name: "100W Braided USB-C to USB-C Fast Cable (2M)",
    brand: "Baseus",
    category: "Chargers & Cables",
    price: 2400,
    currency: "Rs.",
    available: true,
    shortDescription: "Heavy-duty nylon braided cable with 5A E-Marker fast charging chip.",
    description:
      "Engineered for maximum power transfer, this 100W USB-C cable features an integrated E-Marker smart chip that safely negotiates optimal voltage and current. Reinforced with high-density ballistic nylon braiding to withstand over 20,000 bends.",
    specs: [
      { label: "Power Rating", value: "100W (20V / 5A) Fast Charge" },
      { label: "Length", value: "2.0 Meters (6.6 ft)" },
      { label: "Chipset", value: "Smart E-Marker power regulation chip" },
      { label: "Data Speed", value: "480 Mbps high-speed data transfer" },
    ],
    warranty: "6 months warranty",
    image: chargers,
  },
  {
    id: "digital-multimeter-tester",
    name: "Digital Multimeter & Circuit Voltage Tester Kit",
    brand: "Fluke Pro",
    category: "Repair Tools & Parts",
    price: 11500,
    currency: "Rs.",
    available: true,
    shortDescription: "High-accuracy auto-ranging digital meter for board testing and diagnostics.",
    description:
      "Professional digital multimeter designed for circuit board diagnostics, battery health testing, charging port continuity checks, and component testing. Features auto-ranging, backlit display, and gold-plated needle probes.",
    specs: [
      { label: "Measurement", value: "AC/DC voltage, DC current, resistance, continuity buzzer, diode" },
      { label: "Display", value: "Backlit high-contrast LCD with data hold" },
      { label: "Probes", value: "Ultra-fine gold plated testing needle leads" },
      { label: "Safety", value: "CAT III 600V certified with double insulation" },
    ],
    warranty: "12 months warranty",
    image: repair,
  },
  {
    id: "gopro-4k-action-camera",
    name: "Pro-Gig 4K Ultra HD Action Camera",
    brand: "GoPro",
    category: "CCTV & Cameras",
    price: 34500,
    currency: "Rs.",
    available: true,
    shortDescription: "Dual-screen 4K 60fps waterproof action camera with 6-axis stabilization.",
    description:
      "Compact high-performance action camera engineered for adventurers and content creators. Delivers ultra-crisp 4K 60fps video, HyperSmooth 6-axis electronic image stabilization, front and rear color screens, and waterproof durability up to 10m.",
    specs: [
      { label: "Video", value: "4K @ 60fps / 1080p @ 120fps slow-mo" },
      { label: "Screens", value: "Dual front & back color displays" },
      { label: "Stabilization", value: "HyperSmooth 6-axis EIS" },
      { label: "Waterproof", value: "Up to 10m (33ft) without external housing" },
    ],
    warranty: "12 months warranty",
    image: cctv,
  },
  {
    id: "apple-20w-usb-c-adapter",
    name: "20W USB-C Power Adapter",
    brand: "Apple",
    category: "Chargers & Cables",
    price: 6200,
    currency: "Rs.",
    available: true,
    shortDescription: "Original Apple fast charging adapter for iPhone & iPad.",
    description:
      "Compact and high efficiency 20W USB-C wall charger engineered by Apple for rapid power delivery to iPhones, iPads, and AirPods.",
    specs: [
      { label: "Output", value: "20W USB-C Power Delivery" },
      { label: "Speed", value: "50% charge in 30 minutes for iPhone 12/13/14/15" },
      { label: "Protection", value: "Smart overcurrent and voltage protection" },
      { label: "Compact", value: "Foldable / compact travel profile" },
    ],
    warranty: "12 months official warranty",
    image: chargers,
  },
  {
    id: "cpplus-8ch-cctv-kit",
    name: "8-Channel CCTV Surveillance Kit + 4 Cameras",
    brand: "CP Plus",
    category: "CCTV & Cameras",
    price: 48900,
    currency: "Rs.",
    available: true,
    shortDescription: "Complete commercial & home CCTV security kit with DVR and night vision.",
    description:
      "All-in-one surveillance security solution for residential and business premises. Comes with an 8-channel DVR, 4 weatherproof high-definition cameras with night vision, and complete plug-and-play wiring accessories.",
    specs: [
      { label: "Package", value: "8CH DVR + 4x Full HD Night Vision Cameras" },
      { label: "Storage", value: "Supports SATA HDD up to 6TB" },
      { label: "Remote View", value: "Live view on iOS & Android smartphone app" },
      { label: "Cabling", value: "Complete power supplies, BNC connectors & cables" },
    ],
    warranty: "24 months warranty",
    image: cctv,
  },
  {
    id: "fast-3in1-magnetic-cable",
    name: "3-in-1 Fast Charging Cable (Type-C / Lightning / Micro-USB)",
    brand: "Baseus",
    category: "Chargers & Cables",
    price: 2900,
    currency: "Rs.",
    available: true,
    shortDescription: "All-in-one charging solution to power 3 different devices at the same time.",
    description:
      "One universal cable for every device in your home. Features three distinct outputs (USB-C, Apple Lightning, and Micro-USB) crafted with reinforced zinc alloy heads and tangle-resistant braided cord.",
    specs: [
      { label: "Connectors", value: "USB-C, Lightning, Micro-USB" },
      { label: "Max Current", value: "3.5A total intelligent current distribution" },
      { label: "Material", value: "Zinc alloy connectors + tough nylon weave" },
      { label: "Length", value: "1.2 Meters (4 ft)" },
    ],
    warranty: "6 months warranty",
    image: chargers,
  },
  {
    id: "heat-gun-soldering-station",
    name: "SMD Rework Station & Adjustable Soldering Iron",
    brand: "Quick",
    category: "Repair Tools & Parts",
    price: 22800,
    currency: "Rs.",
    available: true,
    shortDescription: "Dual hot air gun and soldering station with precise digital temperature control.",
    description:
      "Essential workstation for phone and circuit repairs, micro-soldering, and chip desoldering. Features dual digital LED temperature readouts, automatic sleep sensors, and quick heating ceramic elements.",
    specs: [
      { label: "Temp Range", value: "Hot air: 100°C - 480°C | Soldering: 200°C - 480°C" },
      { label: "Power", value: "750W high-efficiency rapid heating" },
      { label: "Airflow", value: "120L/min brushless gentle vortex fan" },
      { label: "Safety", value: "Auto-cool down when placed in cradle" },
    ],
    warranty: "12 months warranty",
    image: repair,
  },
  {
    id: "universal-screen-b7000-kit",
    name: "Screen Adhesive & Waterproof Repair Glue Kit (B-7000 + T-7000)",
    brand: "Zhanlida",
    category: "Repair Tools & Parts",
    price: 1800,
    currency: "Rs.",
    available: true,
    shortDescription: "Multi-purpose high-elasticity adhesive for phone frame & screen bonding.",
    description:
      "Industry standard adhesive for smartphone screen assembly, back cover re-gluing, and frame bonding. Provides high elasticity and waterproof seals without damaging sensitive electronics.",
    specs: [
      { label: "Included", value: "1x B-7000 Clear (50ml) + 1x T-7000 Black (50ml)" },
      { label: "Nozzle", value: "Ultra-fine needle dispenser for pinpoint accuracy" },
      { label: "Curing", value: "Initial set in 3-5 mins, full cure in 24 hours" },
      { label: "Properties", value: "Elastic, waterproof, shock-absorbing, non-brittle" },
    ],
    warranty: "Guaranteed fresh stock",
    image: repair,
  },
  {
    id: "samsung-galaxy-a55",
    name: "Galaxy A55 5G",
    brand: "Samsung",
    category: "Mobile Phones",
    price: 89900,
    currency: "Rs.",
    available: true,
    shortDescription: "Premium 5G smartphone with a vivid AMOLED display.",
    description:
      "A refined everyday flagship experience with a smooth 120Hz Super AMOLED display, a versatile triple camera system and all-day battery life. Ideal for users who want premium build quality without a flagship price.",
    specs: [
      { label: "Display", value: "6.6\" Super AMOLED, 120Hz" },
      { label: "Memory", value: "8GB RAM / 256GB Storage" },
      { label: "Camera", value: "50MP + 12MP + 5MP" },
      { label: "Battery", value: "5000mAh, 25W fast charge" },
    ],
    warranty: "12 months warranty (placeholder)",
    image: phones,
  },
  {
    id: "apple-iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    category: "Mobile Phones",
    price: 289900,
    currency: "Rs.",
    available: true,
    shortDescription: "Dynamic Island, 48MP main camera and USB-C.",
    description:
      "The iPhone 15 pairs the powerful A16 Bionic chip with a 48MP main camera, the Dynamic Island and a durable colour-infused glass back. USB-C charging makes it easier than ever to share one cable across devices.",
    specs: [
      { label: "Display", value: "6.1\" Super Retina XDR" },
      { label: "Chip", value: "A16 Bionic" },
      { label: "Storage", value: "128GB" },
      { label: "Camera", value: "48MP main + 12MP ultra wide" },
    ],
    warranty: "12 months warranty (placeholder)",
    image: phones,
  },
  {
    id: "redmi-note-13-pro",
    name: "Redmi Note 13 Pro",
    brand: "Xiaomi",
    category: "Mobile Phones",
    price: 74900,
    currency: "Rs.",
    available: true,
    shortDescription: "200MP camera and fast charging at a great value.",
    description:
      "Outstanding value with a high resolution 200MP camera, a bright AMOLED panel and 67W turbo charging that tops the battery up in minutes.",
    specs: [
      { label: "Display", value: "6.67\" AMOLED, 120Hz" },
      { label: "Memory", value: "8GB RAM / 256GB Storage" },
      { label: "Camera", value: "200MP main" },
      { label: "Battery", value: "5100mAh, 67W" },
    ],
    warranty: "12 months warranty (placeholder)",
    image: phones,
  },
  {
    id: "google-pixel-8a",
    name: "Pixel 8a",
    brand: "Google",
    category: "Mobile Phones",
    price: 132900,
    currency: "Rs.",
    available: false,
    shortDescription: "Clean Android with best-in-class computational photos.",
    description:
      "A compact Android phone with Google's Tensor chip, seven years of software updates and photography features such as Magic Eraser and Best Take.",
    specs: [
      { label: "Display", value: "6.1\" OLED, 120Hz" },
      { label: "Chip", value: "Google Tensor G3" },
      { label: "Storage", value: "128GB" },
      { label: "Battery", value: "4492mAh" },
    ],
    warranty: "12 months warranty (placeholder)",
    image: phones,
  },
  {
    id: "anker-powerbank-20k",
    name: "PowerCore 20,000mAh",
    brand: "Anker",
    category: "Accessories",
    price: 12900,
    currency: "Rs.",
    available: true,
    shortDescription: "High capacity power bank with 30W USB-C output.",
    description:
      "Keep phones, earbuds and tablets charged all day. Dual output ports let you charge two devices at once, and 30W USB-C Power Delivery fast charges most modern phones.",
    specs: [
      { label: "Capacity", value: "20,000mAh" },
      { label: "Output", value: "30W USB-C PD + USB-A" },
      { label: "Recharge", value: "Approx. 4 hours" },
      { label: "Weight", value: "345g" },
    ],
    warranty: "18 months warranty (placeholder)",
    image: accessories,
  },
  {
    id: "fast-charger-33w",
    name: "33W Fast Charger",
    brand: "Baseus",
    category: "Accessories",
    price: 4500,
    currency: "Rs.",
    available: true,
    shortDescription: "Compact wall adapter with USB-C Power Delivery.",
    description:
      "A compact and safe fast charging adapter with over-current and temperature protection, compatible with most modern smartphones and tablets.",
    specs: [
      { label: "Output", value: "33W USB-C PD" },
      { label: "Protection", value: "Over-current / over-heat" },
      { label: "Cable", value: "Sold separately" },
      { label: "Compatibility", value: "Android & iPhone" },
    ],
    warranty: "6 months warranty (placeholder)",
    image: accessories,
  },
  {
    id: "braided-usb-c-cable",
    name: "Braided USB-C Cable 1.5m",
    brand: "Spigen",
    category: "Accessories",
    price: 1900,
    currency: "Rs.",
    available: true,
    shortDescription: "Durable nylon braided cable rated for 60W charging.",
    description:
      "A tangle-free nylon braided cable built for daily use, with reinforced connectors tested for thousands of bends and support for 60W charging and fast data transfer.",
    specs: [
      { label: "Length", value: "1.5 metres" },
      { label: "Rating", value: "60W / 3A" },
      { label: "Data", value: "480Mbps" },
      { label: "Build", value: "Nylon braided" },
    ],
    warranty: "3 months warranty (placeholder)",
    image: accessories,
  },
  {
    id: "protective-phone-case",
    name: "Protective Phone Case",
    brand: "Spigen",
    category: "Accessories",
    price: 2500,
    currency: "Rs.",
    available: true,
    shortDescription: "Slim shockproof case with raised camera protection.",
    description:
      "A slim silicone case with a soft microfibre lining, raised edges around the camera and screen, and a grippy matte finish. Available for popular models — ask us about your device.",
    specs: [
      { label: "Material", value: "Silicone + microfibre lining" },
      { label: "Protection", value: "Raised camera & screen edges" },
      { label: "Finish", value: "Matte anti-fingerprint" },
      { label: "Models", value: "Popular Samsung / Apple / Xiaomi" },
    ],
    warranty: "No warranty (placeholder)",
    image: accessories,
  },
  {
    id: "apple-airpods-pro",
    name: "AirPods Pro (2nd Gen)",
    brand: "Apple",
    category: "Audio",
    price: 79900,
    currency: "Rs.",
    available: true,
    shortDescription: "Active noise cancellation with adaptive transparency.",
    description:
      "Rich, adaptive audio with active noise cancellation, transparency mode and personalised spatial audio. The charging case supports USB-C and precision finding.",
    specs: [
      { label: "ANC", value: "Active noise cancellation" },
      { label: "Battery", value: "Up to 6h (30h with case)" },
      { label: "Charging", value: "USB-C / MagSafe" },
      { label: "Water resistance", value: "IPX4" },
    ],
    warranty: "12 months warranty (placeholder)",
    image: audio,
  },
  {
    id: "samsung-galaxy-buds",
    name: "Galaxy Buds FE",
    brand: "Samsung",
    category: "Audio",
    price: 29900,
    currency: "Rs.",
    available: true,
    shortDescription: "Comfortable everyday earbuds with noise cancelling.",
    description:
      "Lightweight earbuds with active noise cancelling, a secure wingtip fit and three microphones for clear calls, tuned for everyday listening.",
    specs: [
      { label: "ANC", value: "Active noise cancelling" },
      { label: "Battery", value: "Up to 6h (21h with case)" },
      { label: "Fit", value: "Wingtip, three ear tip sizes" },
      { label: "Water resistance", value: "IPX2" },
    ],
    warranty: "12 months warranty (placeholder)",
    image: audio,
  },
  {
    id: "jbl-bluetooth-speaker",
    name: "Flip Bluetooth Speaker",
    brand: "JBL",
    category: "Audio",
    price: 42900,
    currency: "Rs.",
    available: true,
    shortDescription: "Portable waterproof speaker with deep bass.",
    description:
      "A rugged portable speaker with powerful bass, a waterproof and dustproof body and up to 12 hours of playtime — built for travel, outdoors and gatherings.",
    specs: [
      { label: "Playtime", value: "Up to 12 hours" },
      { label: "Rating", value: "IP67 waterproof & dustproof" },
      { label: "Connection", value: "Bluetooth 5.1" },
      { label: "Charging", value: "USB-C" },
    ],
    warranty: "12 months warranty (placeholder)",
    image: audio,
  },
  {
    id: "wired-earphones",
    name: "Wired Earphones with Mic",
    brand: "Sony",
    category: "Audio",
    price: 2900,
    currency: "Rs.",
    available: true,
    shortDescription: "Everyday earphones with in-line remote and mic.",
    description:
      "Comfortable in-ear earphones with a balanced sound profile, in-line microphone and remote for calls and music control.",
    specs: [
      { label: "Connector", value: "3.5mm / USB-C options" },
      { label: "Driver", value: "10mm dynamic" },
      { label: "Controls", value: "In-line remote + mic" },
      { label: "Cable", value: "1.2 metres" },
    ],
    warranty: "3 months warranty (placeholder)",
    image: audio,
  },
  {
    id: "apple-watch-se",
    name: "Apple Watch SE",
    brand: "Apple",
    category: "Smart Watches",
    price: 84900,
    currency: "Rs.",
    available: true,
    shortDescription: "Fitness tracking, safety features and notifications.",
    description:
      "Track workouts, monitor heart rate and sleep, and stay connected with notifications on your wrist. Includes crash and fall detection for extra peace of mind.",
    specs: [
      { label: "Case", value: "40mm / 44mm aluminium" },
      { label: "Battery", value: "Up to 18 hours" },
      { label: "Sensors", value: "Heart rate, accelerometer, gyro" },
      { label: "Water resistance", value: "50 metres" },
    ],
    warranty: "12 months warranty (placeholder)",
    image: watch,
  },
  {
    id: "samsung-galaxy-watch",
    name: "Galaxy Watch 6",
    brand: "Samsung",
    category: "Smart Watches",
    price: 96900,
    currency: "Rs.",
    available: false,
    shortDescription: "Advanced health tracking on a bright AMOLED display.",
    description:
      "A refined smartwatch with detailed sleep coaching, body composition measurement and continuous heart rate monitoring on a bright, always-on AMOLED display.",
    specs: [
      { label: "Display", value: "1.3\" / 1.5\" AMOLED" },
      { label: "Battery", value: "Up to 40 hours" },
      { label: "Health", value: "BIA, ECG, sleep coaching" },
      { label: "Rating", value: "5ATM + IP68" },
    ],
    warranty: "12 months warranty (placeholder)",
    image: watch,
  },
  {
    id: "budget-smart-watch",
    name: "Everyday Smart Watch",
    brand: "Amazfit",
    category: "Smart Watches",
    price: 12900,
    currency: "Rs.",
    available: true,
    shortDescription: "Affordable fitness watch with calls and notifications.",
    description:
      "An affordable smart watch with step and sleep tracking, Bluetooth calling, multiple sport modes and up to a week of battery life per charge.",
    specs: [
      { label: "Display", value: "1.85\" HD touch" },
      { label: "Battery", value: "Up to 7 days" },
      { label: "Features", value: "BT calling, SpO2, sport modes" },
      { label: "Rating", value: "IP68" },
    ],
    warranty: "6 months warranty (placeholder)",
    image: watch,
  },
  {
    id: "wireless-keyboard-mouse",
    name: "Wireless Keyboard & Mouse Set",
    brand: "Logitech",
    category: "Electronics",
    price: 8900,
    currency: "Rs.",
    available: true,
    shortDescription: "Quiet 2.4GHz combo for home and office desks.",
    description:
      "A quiet, full-size wireless keyboard and mouse combo with a single USB receiver, long battery life and a slim low-profile design.",
    specs: [
      { label: "Connection", value: "2.4GHz USB receiver" },
      { label: "Layout", value: "Full size with numpad" },
      { label: "Battery", value: "AA / AAA included" },
      { label: "Compatibility", value: "Windows, macOS, Linux" },
    ],
    warranty: "6 months warranty (placeholder)",
    image: electronics,
  },
  {
    id: "led-desk-lamp",
    name: "LED Desk Lamp",
    brand: "Baseus",
    category: "Electronics",
    price: 6500,
    currency: "Rs.",
    available: true,
    shortDescription: "Dimmable study lamp with adjustable colour temperature.",
    description:
      "An eye-friendly LED desk lamp with flicker-free lighting, several brightness levels and colour temperatures, plus a USB charging port in the base.",
    specs: [
      { label: "Lighting", value: "Flicker-free LED" },
      { label: "Modes", value: "3 colour temperatures, 5 levels" },
      { label: "Extra", value: "USB-A charging port" },
      { label: "Power", value: "USB-C powered" },
    ],
    warranty: "6 months warranty (placeholder)",
    image: electronics,
  },
  {
    id: "android-tablet-10",
    name: "10\" Android Tablet",
    brand: "Xiaomi",
    category: "Electronics",
    price: 54900,
    currency: "Rs.",
    available: true,
    shortDescription: "Large screen tablet for study, work and streaming.",
    description:
      "A lightweight 10-inch tablet with a bright display, long battery life and expandable storage — a great companion for online classes, reading and streaming.",
    specs: [
      { label: "Display", value: "10.1\" IPS, 1920 x 1200" },
      { label: "Memory", value: "6GB RAM / 128GB Storage" },
      { label: "Battery", value: "7000mAh" },
      { label: "Extra", value: "microSD expandable" },
    ],
    warranty: "12 months warranty (placeholder)",
    image: electronics,
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function formatPrice(product: Pick<Product, "price" | "currency">) {
  return `${product.currency} ${product.price.toLocaleString("en-US")}`;
}
