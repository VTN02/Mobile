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
  // 1. Mobile Phones (Flagship showcase)
  {
    id: "apple-iphone-15-pro-max",
    name: "Apple iPhone 15 Pro Max (256GB)",
    brand: "Apple",
    category: "Mobile Phones",
    price: 419900,
    currency: "Rs.",
    available: true,
    shortDescription: "Aerospace-grade titanium design, A17 Pro chip, 5x optical zoom camera.",
    description:
      "Forged in titanium with the groundbreaking A17 Pro chip, customizable Action button, and the most powerful iPhone camera system ever with 5x telephoto optical zoom. Features Super Retina XDR display with ProMotion 120Hz.",
    specs: [
      { label: "Display", value: "6.7\" Super Retina XDR OLED, 120Hz ProMotion" },
      { label: "Processor", value: "Apple A17 Pro (3nm architecture)" },
      { label: "Camera", value: "48MP Main + 12MP Ultra-Wide + 12MP 5x Telephoto" },
      { label: "Build", value: "Grade 5 Titanium frame with Ceramic Shield" },
      { label: "Connectivity", value: "USB-C (USB 3 10Gbps), 5G, Wi-Fi 6E" },
    ],
    warranty: "12 months Apple official warranty",
    image: phones,
  },
  {
    id: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra 5G",
    brand: "Samsung",
    category: "Mobile Phones",
    price: 389900,
    currency: "Rs.",
    available: true,
    shortDescription: "Galaxy AI powerhouse with 200MP camera, titanium frame, and built-in S-Pen.",
    description:
      "Meet the definitive Galaxy powerhouse featuring built-in Galaxy AI, a stunning flat 6.8-inch Dynamic AMOLED 2X 2600-nit display, titanium durability, ultra-long battery life, and the precision S-Pen stylus.",
    specs: [
      { label: "Display", value: "6.8\" QHD+ Dynamic AMOLED 2X, 120Hz, 2600 nits" },
      { label: "Processor", value: "Snapdragon 8 Gen 3 for Galaxy" },
      { label: "Camera", value: "200MP Quad Tele System with AI Nightography" },
      { label: "Stylus", value: "Integrated Bluetooth S-Pen stylus" },
      { label: "Battery", value: "5000mAh with 45W Super Fast Charging" },
    ],
    warranty: "12 months company warranty",
    image: phones,
  },
  {
    id: "xiaomi-14-pro",
    name: "Xiaomi 14 Pro 5G (Leica Summilux)",
    brand: "Xiaomi",
    category: "Mobile Phones",
    price: 269900,
    currency: "Rs.",
    available: true,
    shortDescription: "Leica optical triple camera, Snapdragon 8 Gen 3, 120W HyperCharge.",
    description:
      "Engineered in partnership with Leica, featuring variable aperture Summilux lens, 2K AMOLED C8 display with 3000-nit peak brightness, and lightning-fast 120W HyperCharge that fills 100% in just 18 minutes.",
    specs: [
      { label: "Display", value: "6.73\" 2K AMOLED, 1-120Hz LTPO, 3000 nits" },
      { label: "Optics", value: "Leica Summilux 50MP (f/1.42 - f/4.0 variable)" },
      { label: "Charging", value: "120W Wired + 50W Wireless HyperCharge" },
      { label: "Memory", value: "16GB RAM + 512GB UFS 4.0 Storage" },
    ],
    warranty: "12 months warranty",
    image: phones,
  },
  {
    id: "google-pixel-8-pro",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "Mobile Phones",
    price: 299900,
    currency: "Rs.",
    available: true,
    shortDescription: "Google Tensor G3, pro camera controls, AI Magic Eraser & 7-year OS updates.",
    description:
      "The pinnacle of computational photography and Google AI. Equipped with an upgraded triple camera system, temperature sensor, stunning Super Actua display, and 7 years of guaranteed Android OS upgrades.",
    specs: [
      { label: "Display", value: "6.7\" Super Actua LTPO OLED (1-120Hz)" },
      { label: "Chipset", value: "Google Tensor G3 with Titan M2 security" },
      { label: "Camera", value: "50MP Main + 48MP Ultrawide + 48MP 5x Telephoto" },
      { label: "Features", value: "Best Take, Audio Magic Eraser, Ultra HDR" },
    ],
    warranty: "12 months warranty",
    image: phones,
  },

  // 2. CCTV & Security Cameras
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
    id: "imou-cruiser-360-ptz",
    name: "Imou Cruiser 360° WiFi PTZ Dual-Lens Security Camera",
    brand: "Imou",
    category: "CCTV & Cameras",
    price: 14800,
    currency: "Rs.",
    available: true,
    shortDescription: "Dual-lens motorized 360° pan-tilt coverage, active deterrence siren & spotlight.",
    description:
      "Advanced dual-lens outdoor WiFi PTZ camera offering panoramic monitoring with zero blind spots. Includes smart auto-tracking, spotlight alarm deterrence, 110dB siren, and 2-way audio communication.",
    specs: [
      { label: "Coverage", value: "355° Pan & 90° Tilt motorized rotation" },
      { label: "Resolution", value: "3K / 5MP Quad HD crystal clarity" },
      { label: "Security", value: "110dB Siren + flashing dual spotlights" },
      { label: "Storage", value: "MicroSD up to 512GB & Cloud recording" },
    ],
    warranty: "12 months warranty",
    image: cctv,
  },
  {
    id: "gopro-hero12-black",
    name: "GoPro HERO12 Black 5.3K Action Camera",
    brand: "GoPro",
    category: "CCTV & Cameras",
    price: 129000,
    currency: "Rs.",
    available: true,
    shortDescription: "5.3K 60fps HDR video, HyperSmooth 6.0 stabilization, waterproof to 10m.",
    description:
      "The ultimate action camera for creators and adventurers. Features class-leading 5.3K60 HDR video recording, Emmy-winning HyperSmooth 6.0 stabilization, dual LCD screens, and rugged waterproof construction.",
    specs: [
      { label: "Video", value: "5.3K @ 60fps, 4K @ 120fps, 2.7K @ 240fps" },
      { label: "Stabilization", value: "HyperSmooth 6.0 with 360° Horizon Lock" },
      { label: "Displays", value: "Front 1.4\" color preview + Rear 2.27\" touchscreen" },
      { label: "Waterproof", value: "10m (33ft) without housing" },
    ],
    warranty: "12 months warranty",
    image: cctv,
  },
  {
    id: "cpplus-8ch-cctv-kit",
    name: "CP Plus 8-Channel 4K CCTV Surveillance Kit + 4 Cameras",
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

  // 3. Chargers & Power Delivery
  {
    id: "anker-prime-100w-gan",
    name: "Anker Prime 100W GaN 3-Port Fast Wall Charger",
    brand: "Anker",
    category: "Chargers & Cables",
    price: 14500,
    currency: "Rs.",
    available: true,
    shortDescription: "Ultra-compact 100W GaN charger capable of powering 2 laptops and a phone.",
    description:
      "Next-generation Gallium Nitride (GaN III) architecture packed into a pocket-sized block. Delivers up to 100W single-port output or distributes high wattage intelligently across 2 USB-C and 1 USB-A ports with ActiveShield 2.0 temperature protection.",
    specs: [
      { label: "Max Output", value: "100W Power Delivery 3.0 / PPS" },
      { label: "Port Setup", value: "2x USB-C + 1x USB-A (PowerIQ 4.0)" },
      { label: "Safety", value: "ActiveShield 2.0 continuous thermal monitor" },
      { label: "Compatibility", value: "MacBook Pro, iPhone 15, Galaxy S24, Dell XPS, iPad" },
    ],
    warranty: "18 months warranty",
    image: chargers,
  },
  {
    id: "apple-20w-usb-c-adapter",
    name: "Apple 20W USB-C Power Adapter",
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
    id: "baseus-100w-braided-cable",
    name: "Baseus 100W E-Marker Zinc Alloy Braided Type-C Cable (2M)",
    brand: "Baseus",
    category: "Chargers & Cables",
    price: 2600,
    currency: "Rs.",
    available: true,
    shortDescription: "Heavy-duty ballistic nylon cable with 5A E-Marker smart chip.",
    description:
      "Engineered for maximum power transfer, this 100W USB-C cable features an integrated E-Marker smart chip that safely negotiates optimal voltage and current. Reinforced with high-density ballistic nylon braiding to withstand over 25,000 bends.",
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
    id: "ugreen-nexode-65w-travel-charger",
    name: "UGREEN Nexode 65W GaN Travel Charger (3-Port)",
    brand: "UGREEN",
    category: "Chargers & Cables",
    price: 9900,
    currency: "Rs.",
    available: true,
    shortDescription: "Slim multi-country travel charger with interchangeable US/UK/EU plugs.",
    description:
      "The perfect companion for travel and daily commute. Includes snap-on international plug adapters, dual USB-C ports, and GaNFast semiconductor efficiency.",
    specs: [
      { label: "Power", value: "65W High-Speed PD / QC 4.0+" },
      { label: "Plugs", value: "Interchangeable US / UK / EU travel heads" },
      { label: "Ports", value: "2x USB-C + 1x USB-A" },
      { label: "Form Factor", value: "50% smaller than conventional 60W bricks" },
    ],
    warranty: "12 months warranty",
    image: chargers,
  },

  // 4. Audio & Sound
  {
    id: "sony-wh-1000xm5-headphones",
    name: "Sony WH-1000XM5 Wireless Noise-Cancelling Headphones",
    brand: "Sony",
    category: "Audio",
    price: 119900,
    currency: "Rs.",
    available: true,
    shortDescription: "Industry-leading noise cancellation with dual processors and 30-hour battery.",
    description:
      "Experience silence redefined. Featuring 8 microphones, Auto NC Optimizer, 30mm precision carbon fiber drivers, crystal-clear hands-free calling with AI beamforming, and ultra-comfortable lightweight leatherette earcups.",
    specs: [
      { label: "ANC", value: "Dual Processor V1 & QN1 with 8 microphones" },
      { label: "Battery", value: "Up to 30 hours (3 min quick charge = 3 hrs)" },
      { label: "Audio Codec", value: "LDAC, Hi-Res Audio Wireless, DSEE Extreme" },
      { label: "Connectivity", value: "Bluetooth 5.2 multipoint pair" },
    ],
    warranty: "12 months warranty",
    image: audio,
  },
  {
    id: "apple-airpods-pro-2",
    name: "Apple AirPods Pro (2nd Gen, USB-C)",
    brand: "Apple",
    category: "Audio",
    price: 79900,
    currency: "Rs.",
    available: true,
    shortDescription: "Active Noise Cancellation with Adaptive Audio and MagSafe USB-C case.",
    description:
      "Powered by the Apple H2 chip, AirPods Pro deliver up to 2x more active noise cancellation, Adaptive Audio that automatically tailors noise control to your environment, and Personalized Spatial Audio with dynamic head tracking.",
    specs: [
      { label: "Chip", value: "Apple H2 headphone chip + U1 in case" },
      { label: "Noise Control", value: "2x Active Noise Cancellation + Transparency" },
      { label: "Battery", value: "Up to 6 hours (30 hours total with MagSafe case)" },
      { label: "Durability", value: "IP54 dust, sweat, and water resistant" },
    ],
    warranty: "12 months official warranty",
    image: audio,
  },
  {
    id: "jbl-charge-5-speaker",
    name: "JBL Charge 5 Waterproof Bluetooth Speaker",
    brand: "JBL",
    category: "Audio",
    price: 49900,
    currency: "Rs.",
    available: true,
    shortDescription: "Original Pro Sound, 20 hours playtime, IP67 waterproof with built-in powerbank.",
    description:
      "Take the party anywhere with bold JBL Original Pro Sound, an optimized long-excursion driver, separate tweeter, dual passive bass radiators, and an integrated power bank to charge your phone on the go.",
    specs: [
      { label: "Output", value: "40W RMS bold JBL Pro Sound" },
      { label: "Battery", value: "Up to 20 hours playtime (7500mAh)" },
      { label: "Durability", value: "IP67 waterproof and dustproof" },
      { label: "Features", value: "PartyBoost link, USB power bank output" },
    ],
    warranty: "12 months warranty",
    image: audio,
  },
  {
    id: "marshall-emberton-ii",
    name: "Marshall Emberton II Portable Bluetooth Speaker",
    brand: "Marshall",
    category: "Audio",
    price: 58900,
    currency: "Rs.",
    available: true,
    shortDescription: "Iconic rock heritage design with 360° True Stereophonic multidirectional sound.",
    description:
      "Rich, clear, and loud sound in a tough IP67 water-resistant package. Offers 30+ hours of portable playtime on a single charge and features Stack Mode to connect multiple Emberton II speakers.",
    specs: [
      { label: "Sound", value: "360° True Stereophonic multi-directional sound" },
      { label: "Battery", value: "30+ hours playtime on full charge" },
      { label: "Build", value: "IP67 dust and water resistance with brass control knob" },
      { label: "Bluetooth", value: "Bluetooth 5.1 with Marshall dedicated app" },
    ],
    warranty: "12 months warranty",
    image: audio,
  },

  // 5. Smart Watches
  {
    id: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2 (49mm Titanium)",
    brand: "Apple",
    category: "Smart Watches",
    price: 249900,
    currency: "Rs.",
    available: true,
    shortDescription: "Rugged 49mm titanium case, 3000-nit display, precision dual-frequency GPS.",
    description:
      "The most capable and rugged Apple Watch ever. Designed for endurance, outdoor exploration, and water sports with the S9 SiP chip, double-tap gesture control, customized Action button, and up to 72 hours in Low Power Mode.",
    specs: [
      { label: "Case", value: "49mm aerospace-grade titanium & sapphire front" },
      { label: "Display", value: "Always-On Retina display, up to 3000 nits" },
      { label: "Sensors", value: "Dual GPS, Depth gauge, ECG, SpO2, Temperature" },
      { label: "Water Rating", value: "100m water resistant & EN13319 dive certified" },
    ],
    warranty: "12 months official warranty",
    image: watch,
  },
  {
    id: "samsung-galaxy-watch-6-classic",
    name: "Samsung Galaxy Watch 6 Classic (47mm LTE)",
    brand: "Samsung",
    category: "Smart Watches",
    price: 115000,
    currency: "Rs.",
    available: true,
    shortDescription: "Iconic rotating physical bezel, advanced sleep coaching, and BIA sensor.",
    description:
      "A timeless luxury aesthetic featuring the beloved rotating bezel, vivid sapphire crystal display, continuous heart rate and ECG tracking, body composition analysis, and comprehensive sleep stage coaching.",
    specs: [
      { label: "Display", value: "1.5\" Super AMOLED (480x480), Sapphire Crystal" },
      { label: "Bezel", value: "Physical rotating stainless steel bezel" },
      { label: "Health", value: "BioActive Sensor (ECG, Blood Pressure, BIA, HR)" },
      { label: "Durability", value: "5ATM + IP68 water resistance & MIL-STD-810H" },
    ],
    warranty: "12 months warranty",
    image: watch,
  },
  {
    id: "amazfit-gtr-4-smartwatch",
    name: "Amazfit GTR 4 Smartwatch (Dual-Band GPS)",
    brand: "Amazfit",
    category: "Smart Watches",
    price: 46900,
    currency: "Rs.",
    available: true,
    shortDescription: "1.43\" AMOLED display, circularly-polarized GPS antenna, 14-day battery life.",
    description:
      "High-precision smartwatch featuring industry-leading dual-band circularly-polarized GPS tracking, 150+ sports modes, Bluetooth calls, music storage, and up to two weeks of battery life per charge.",
    specs: [
      { label: "Display", value: "1.43\" HD AMOLED with anti-glare glass" },
      { label: "Battery", value: "14-day ultra-long battery life" },
      { label: "GPS", value: "Dual-band 6 satellite positioning systems" },
      { label: "Calls", value: "Bluetooth phone calls & microphone speaker" },
    ],
    warranty: "12 months warranty",
    image: watch,
  },

  // 6. Electronics & Smart Devices
  {
    id: "xiaomi-pad-6-max",
    name: "Xiaomi Pad 6 Max 14-inch Tablet",
    brand: "Xiaomi",
    category: "Electronics",
    price: 189900,
    currency: "Rs.",
    available: true,
    shortDescription: "Massive 14\" 2.8K 120Hz display, Snapdragon 8+ Gen 1, 10,000mAh battery.",
    description:
      "Laptop-grade productivity in an ultra-slim metal unibody. Boasts a massive 14-inch 2.8K display with HDR10+, 8 stereo speakers, Snapdragon 8+ Gen 1 processor, and 67W fast charging.",
    specs: [
      { label: "Display", value: "14.0\" 2.8K (2880 x 1800) IPS 120Hz HDR10+" },
      { label: "Processor", value: "Qualcomm Snapdragon 8+ Gen 1 (4nm)" },
      { label: "Audio", value: "8-Speaker immersive stereo sound system" },
      { label: "Battery", value: "10,000mAh with 67W fast charge & 33W reverse charge" },
    ],
    warranty: "12 months warranty",
    image: electronics,
  },
  {
    id: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S Wireless Performance Mouse",
    brand: "Logitech",
    category: "Electronics",
    price: 32500,
    currency: "Rs.",
    available: true,
    shortDescription: "8,000 DPI track-on-glass sensor, Quiet Clicks, and MagSpeed electromagnetic scroll.",
    description:
      "An icon remastered for precision and productivity. Features whisper-quiet clicks, MagSpeed electromagnetic wheel capable of scrolling 1,000 lines per second, ergonomic thumb rest with gesture button, and multi-device Flow cross-computer control.",
    specs: [
      { label: "Sensor", value: "Darkfield 8000 DPI (works on glass surfaces)" },
      { label: "Scroll Wheel", value: "MagSpeed electromagnetic scroll + thumb wheel" },
      { label: "Battery", value: "Up to 70 days on full charge (USB-C)" },
      { label: "Connectivity", value: "Bluetooth Low Energy + Logi Bolt Receiver" },
    ],
    warranty: "12 months warranty",
    image: electronics,
  },
  {
    id: "belkin-3in1-magsafe-dock",
    name: "Belkin BoostCharge Pro 3-in-1 MagSafe Wireless Stand",
    brand: "Belkin",
    category: "Electronics",
    price: 38500,
    currency: "Rs.",
    available: true,
    shortDescription: "Official 15W MagSafe fast charging stand for iPhone, Apple Watch & AirPods.",
    description:
      "Premium architectural stainless-steel charging dock with official Apple Made-For-MagSafe certification. Fast charges your iPhone at 15W while concurrently powering your Apple Watch and wireless AirPods case.",
    specs: [
      { label: "MagSafe Output", value: "15W official Apple fast wireless charge" },
      { label: "Positions", value: "Floating magnetic iPhone stand, Watch puck, Qi base" },
      { label: "Design", value: "Premium stainless steel arms with soft-touch base" },
      { label: "Power Supply", value: "Included 40W AC power adapter" },
    ],
    warranty: "24 months warranty",
    image: electronics,
  },

  // 7. Accessories
  {
    id: "spigen-ultra-hybrid-magsafe",
    name: "Spigen Ultra Hybrid MagFit Protective Case",
    brand: "Spigen",
    category: "Accessories",
    price: 5900,
    currency: "Rs.",
    available: true,
    shortDescription: "Military-grade Air Cushion drop protection with built-in magnetic ring.",
    description:
      "Combines a shock-absorbing flexible bumper with a crystal-clear rigid polycarbonate back. Features built-in high-strength neodymium magnets perfectly aligned for MagSafe chargers, wallets, and car mounts.",
    specs: [
      { label: "Protection", value: "Mil-grade certified with Air Cushion Technology" },
      { label: "Clarity", value: "Anti-yellowing resin layer with UV resistance" },
      { label: "Magnets", value: "Integrated high-flux MagSafe ring" },
      { label: "Compatibility", value: "iPhone 15 / 14 / 13 Pro & Pro Max series" },
    ],
    warranty: "Guaranteed authentic Spigen",
    image: accessories,
  },
  {
    id: "anker-maggo-qi2-powerbank",
    name: "Anker MagGo 10,000mAh Qi2 Magnetic Wireless Power Bank",
    brand: "Anker",
    category: "Accessories",
    price: 21900,
    currency: "Rs.",
    available: true,
    shortDescription: "15W Qi2 certified wireless charging, smart digital display & foldable kickstand.",
    description:
      "Next-gen Qi2 certified magnetic power bank delivering 2x faster 15W wireless charging. Equipped with an intuitive smart digital screen displaying exact battery percentage and charging time remaining.",
    specs: [
      { label: "Capacity", value: "10,000mAh high-density lithium polymer" },
      { label: "Wireless Output", value: "15W Qi2 fast magnetic charge" },
      { label: "Wired Output", value: "27W USB-C bidirectional fast charge" },
      { label: "Display", value: "Smart LCD display with time-to-full indicator" },
    ],
    warranty: "18 months warranty",
    image: accessories,
  },
  {
    id: "esr-armorite-tempered-glass",
    name: "ESR Armorite 9H Military-Grade Screen Protector (2-Pack)",
    brand: "ESR",
    category: "Accessories",
    price: 3400,
    currency: "Rs.",
    available: true,
    shortDescription: "110-lb impact resistance with auto-alignment installation frame.",
    description:
      "Ultra-tough tempered glass engineered to withstand up to 110 lbs of edge force. Includes an easy auto-alignment tray that guarantees a bubble-free, dust-free installation in seconds.",
    specs: [
      { label: "Hardness", value: "9H+ Armorite shatterproof tempered glass" },
      { label: "Oleophobic", value: "Electroplated fingerprint-resistant coating" },
      { label: "Clarity", value: "99.9% HD transparency with edge-to-edge fit" },
      { label: "Kit", value: "2x Glass protectors + 1x Auto-alignment tray" },
    ],
    warranty: "Guaranteed authentic ESR",
    image: accessories,
  },
  {
    id: "dji-osmo-mobile-6-gimbal",
    name: "DJI Osmo Mobile 6 Smartphone Gimbal Stabilizer",
    brand: "DJI",
    category: "Accessories",
    price: 49500,
    currency: "Rs.",
    available: true,
    shortDescription: "3-axis stabilization, ActiveTrack 6.0, built-in extension rod & quick launch.",
    description:
      "An intelligent smartphone stabilizer packed with creative features. Features 3-axis stabilization, built-in extension rod for dynamic angles, status panel, and magnetic quick-release phone clamp.",
    specs: [
      { label: "Stabilization", value: "3-Axis motor stabilization with ActiveTrack 6.0" },
      { label: "Extension", value: "Built-in 215mm telescopic extension rod" },
      { label: "Battery", value: "Approx. 6.4 hours continuous operation" },
      { label: "App", value: "DJI Mimo app with Story Mode and gesture control" },
    ],
    warranty: "12 months warranty",
    image: accessories,
  },

  // 8. Repair Tools & Parts
  {
    id: "pro-128in1-repair-toolkit",
    name: "Pro-Fix 128-in-1 Precision Electronics Repair Toolkit",
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
    id: "digital-multimeter-tester",
    name: "Fluke Pro Digital Multimeter & Circuit Diagnostic Tester",
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
    id: "quick-861dw-hot-air-station",
    name: "Quick 861DW Professional SMD Rework Hot Air Station (1000W)",
    brand: "Quick",
    category: "Repair Tools & Parts",
    price: 46500,
    currency: "Rs.",
    available: true,
    shortDescription: "1000W high-power lead-free rework station with 3 programmable channels.",
    description:
      "Industry-benchmark rework station for micro-soldering, BGA chip replacement, and motherboard repairs. Features 1000W rapid ceramic heating, dual brushless gentle vortex air pump, and automatic sleep sensors.",
    specs: [
      { label: "Power & Temp", value: "1000W output | 100°C - 500°C precise temperature" },
      { label: "Channels", value: "CH1, CH2, CH3 memory presets for airflow & heat" },
      { label: "Airflow", value: "1 - 120L/min high efficiency vortex pump" },
      { label: "Protection", value: "Magnetic sensor auto-sleep in holster" },
    ],
    warranty: "12 months warranty",
    image: repair,
  },
  {
    id: "universal-screen-b7000-kit",
    name: "Zhanlida Screen & Frame Adhesive Repair Glue Kit (B-7000 + T-7000)",
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
    id: "sunshine-silicone-repair-mat",
    name: "Sunshine Anti-Static Heat Insulation Silicone Repair Work Mat",
    brand: "Sunshine",
    category: "Repair Tools & Parts",
    price: 3900,
    currency: "Rs.",
    available: true,
    shortDescription: "500°C heat-resistant magnetic workstation mat with screw and part grids.",
    description:
      "Spacious 45x30cm high-grade silicone soldering and repair mat. Withstands direct soldering temperatures up to 500°C with magnetic slots to keep tiny screws and micro-components organized during repairs.",
    specs: [
      { label: "Heat Resistance", value: "Up to 500°C (932°F) direct contact" },
      { label: "Size", value: "450mm x 300mm wide work surface" },
      { label: "Slots", value: "124 screw positions, magnetic zones, tool holders" },
      { label: "Material", value: "Eco-friendly anti-static anti-slip silicone" },
    ],
    warranty: "Lifetime material guarantee",
    image: repair,
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
