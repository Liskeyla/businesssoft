import type { ContactInfo, NavLink } from "@/types";

export const SITE = {
  name: "Business Soft S.A.",
  shortName: "Business Soft",
  url: "https://businesssoft.vercel.app",
  description:
    "Business Soft S.A. comercializa soluciones CRM líderes del mercado para optimizar ventas, marketing y atención al cliente de tu empresa.",
  locale: "es_EC",
  keywords: [
    "CRM",
    "soluciones CRM",
    "Microsoft Dynamics 365",
    "HubSpot",
    "gestión comercial",
    "ventas",
    "marketing",
    "Business Soft",
    "Ecuador",
    "Guayaquil",
  ],
};

export const CONTACT: ContactInfo = {
  phone: "+593999768827",
  phoneDisplay: "+593 999 768 827",
  email: "ventas@businesssoft.com",
  scheduleTitle: "Horario de atención",
  scheduleDays: "Lunes a Viernes",
  scheduleHours: "08h00 - 17h00",
  address: "Av. Francisco de Orellana, Guayaquil, Ecuador",
};

export const WHATSAPP = {
  number: "593999768827",
  message:
    "Hola, deseo recibir información sobre las soluciones CRM de Business Soft.",
};

export const MAPS_QUERY = "Av. Francisco de Orellana, Guayaquil, Ecuador";

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
  { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Empresa", href: "#empresa" },
  { label: "Productos", href: "#productos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];
