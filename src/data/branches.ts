/** MOCK DATA — replace placeholders with the real branch information. */

export type Branch = {
  id: string;
  label: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  /** Google Maps directions link shown on the button. */
  mapsUrl: string;
  /** Google Maps embed src for the iframe preview in the card header. */
  mapsEmbedUrl: string;
  area: string;
};

export const branches: Branch[] = [
  {
    id: "branch-01",
    label: "Branch 01",
    name: "Vasantham Mobile – Kilinochchi Main",
    address: "A9 Road, Kilinochchi, Northern Province, Sri Lanka",
    phone: "+94 21 228 3456",
    hours: "Mon – Sun: 9:00 AM – 8:00 PM",
    mapsUrl: "https://www.google.com/maps/search/A9+Road,+Kilinochchi,+Sri+Lanka",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.123456789!2d80.3982!3d9.3985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe4b8d0c0001%3A0x0!2sKilinochchi!5e0!3m2!1sen!2slk!4v1234567890",
    area: "Kilinochchi",
  },
  {
    id: "branch-02",
    label: "Branch 02",
    name: "Vasantham Mobile – Kilinochchi Town",
    address: "Main Street, Kilinochchi, Northern Province, Sri Lanka",
    phone: "+94 21 228 7890",
    hours: "Mon – Sun: 9:00 AM – 8:00 PM",
    mapsUrl: "https://www.google.com/maps/search/Main+Street,+Kilinochchi,+Sri+Lanka",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.234567891!2d80.4012!3d9.3950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe4b9234560001%3A0x0!2sKilinochchi+Town!5e0!3m2!1sen!2slk!4v1234567891",
    area: "Kilinochchi",
  },
];

