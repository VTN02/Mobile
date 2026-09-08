/** MOCK DATA — replace placeholders with the real branch information. */

export type Branch = {
  id: string;
  label: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  /** Replace with a real Google Maps link for the branch. */
  mapsUrl: string;
  area: string;
};

export const branches: Branch[] = [
  {
    id: "branch-01",
    label: "Branch 01",
    name: "[BRANCH 1 NAME]",
    address: "[BRANCH 1 ADDRESS]",
    phone: "[PHONE NUMBER]",
    hours: "Mon – Sun: 9:00 AM – 8:00 PM",
    mapsUrl: "https://www.google.com/maps",
    area: "[CITY / AREA]",
  },
  {
    id: "branch-02",
    label: "Branch 02",
    name: "[BRANCH 2 NAME]",
    address: "[BRANCH 2 ADDRESS]",
    phone: "[PHONE NUMBER]",
    hours: "Mon – Sun: 9:00 AM – 8:00 PM",
    mapsUrl: "https://www.google.com/maps",
    area: "[CITY / AREA]",
  },
];
