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
    name: "VTN Mobile – Jaffna Main",
    address: "Stanley Road, Jaffna, Northern Province, Sri Lanka",
    phone: "+94 21 222 3456",
    hours: "Mon – Sun: 9:00 AM – 8:00 PM",
    mapsUrl: "https://www.google.com/maps/search/Stanley+Road,+Jaffna,+Sri+Lanka",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123456789!2d80.0121!3d9.6615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe535c8d0c0001%3A0x0!2sStanley+Rd%2C+Jaffna!5e0!3m2!1sen!2slk!4v1234567890",
    area: "Jaffna",
  },
  {
    id: "branch-02",
    label: "Branch 02",
    name: "VTN Mobile – Chavakachcheri",
    address: "Main Street, Chavakachcheri, Jaffna District, Sri Lanka",
    phone: "+94 21 226 7890",
    hours: "Mon – Sun: 9:00 AM – 8:00 PM",
    mapsUrl: "https://www.google.com/maps/search/Main+Street,+Chavakachcheri,+Sri+Lanka",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.987654321!2d80.1732!3d9.6503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe521234560001%3A0x0!2sMain+St%2C+Chavakachcheri!5e0!3m2!1sen!2slk!4v1234567891",
    area: "Chavakachcheri",
  },
];

