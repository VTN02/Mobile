/** MOCK DATA — repair services shown across the site. */

export type RepairService = {
  id: string;
  name: string;
  description: string;
  /** Lucide icon name used by RepairCard. */
  icon: "smartphone" | "monitor" | "battery" | "plug" | "cpu" | "laptop" | "camera" | "shield";
};

export const services: RepairService[] = [
  {
    id: "mobile-repair",
    name: "Mobile Phone Repair",
    description:
      "Diagnostics and repair for all common smartphone faults, handled by experienced technicians using quality parts.",
    icon: "smartphone",
  },
  {
    id: "screen-replacement",
    name: "Screen Replacement",
    description:
      "Professional screen replacement service for damaged or broken smartphone displays, with a careful fit and finish.",
    icon: "monitor",
  },
  {
    id: "cctv-installation-repair",
    name: "CCTV & Camera Installation & Repair",
    description:
      "Expert setup, cabling, lens calibration, DVR/NVR configuration and maintenance for home, shop and commercial CCTV systems.",
    icon: "camera",
  },
  {
    id: "battery-replacement",
    name: "Battery Replacement",
    description:
      "Restore your battery life with a tested replacement battery fitted and health-checked in store.",
    icon: "battery",
  },
  {
    id: "charging-port-repair",
    name: "Charging Port & Cable Repair",
    description:
      "Cleaning, repair, power IC troubleshooting and replacement of loose or damaged charging ports and adapters.",
    icon: "plug",
  },
  {
    id: "camera-optics-repair",
    name: "Camera & Optical Sensor Repair",
    description:
      "Module replacement, focus motor repair, lens cleaning, and sensor diagnostics for smartphones and digital action cameras.",
    icon: "camera",
  },
  {
    id: "software-support",
    name: "Software Support",
    description:
      "Software updates, factory resets, data transfer and troubleshooting for slow or unresponsive devices.",
    icon: "cpu",
  },
  {
    id: "laptop-electronics-repair",
    name: "Laptop / Electronics Repair",
    description:
      "Repair support for laptops, monitors, power supplies and everyday electronics, from cleaning to board-level fixes.",
    icon: "laptop",
  },
];
