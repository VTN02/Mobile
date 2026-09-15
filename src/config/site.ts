/**
 * Central business configuration.
 * Replace every [PLACEHOLDER] with the real client information.
 * Nothing else in the UI hardcodes business details.
 */

export const site = {
  name: "Vasantham",
  tagline: "Mobiles • CCTV & Cameras • Chargers & Cables • Repairs",
  /** Digits only, with country code, no "+" or spaces. e.g. 94771234567 */
  whatsappNumber: "[WHATSAPP NUMBER]",
  phone: "[PHONE NUMBER]",
  email: "[EMAIL]",
  hours: "Mon – Sun: 9:00 AM – 8:00 PM",
  socials: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },
} as const;
