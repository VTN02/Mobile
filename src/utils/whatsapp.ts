import { site } from "@/config/site";

/** Build a wa.me link with a pre-filled message. */
export function whatsappLink(message: string, number: string = site.whatsappNumber) {
  const digits = String(number).replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: () =>
    `Hi ${site.name}, I would like to know more about your products and services.`,
  product: (productName: string) =>
    `Hi, I'm interested in the ${productName}. Could you please provide more details about availability and price?`,
  productShort: (productName: string) =>
    `Hi, I'm interested in the ${productName}. Is it available?`,
  repair: (serviceName?: string) =>
    serviceName
      ? `Hi, I would like to inquire about your ${serviceName} service.`
      : `Hi, I would like to inquire about your repair services.`,
  branch: (branchName: string) =>
    `Hi, I would like to contact your ${branchName}. Could you please assist me?`,
  contactForm: (data: { name: string; phone: string; email: string; message: string }) =>
    `Hi ${site.name}, I'd like to make an inquiry.\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\n${data.message}`,
};
