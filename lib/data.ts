import {
  BarChart3,
  Boxes,
  Bot,
  Building2,
  GraduationCap,
  LineChart,
  Lock,
  MessagesSquare,
  Network,
  Factory,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
  Workflow,
  Landmark,
  Wallet,
  ClipboardCheck,
  Search,
  Rocket,
  Headset,
} from "lucide-react";
import type {
  Benefit,
  ClientSector,
  ProcessStep,
  Product,
  Stat,
  Testimonial,
} from "@/types";

export const STATS: Stat[] = [
  { value: 10, suffix: "", label: "Soluciones CRM" },
  { value: 500, suffix: "+", label: "Clientes satisfechos" },
  { value: 15, suffix: "", label: "Años de experiencia" },
  { value: 99, suffix: "%", label: "Satisfacción" },
];

export const PRODUCTS: Product[] = [
  {
    id: "insightly",
    name: "Insightly CRM",
    shortName: "Insightly",
    tagline: "CRM y gestión de proyectos unificados",
    description:
      "Plataforma que combina gestión de relaciones con clientes y administración de proyectos para equipos en crecimiento.",
    features: [
      "Gestión de contactos y oportunidades",
      "Administración de proyectos integrada",
      "Automatización de flujos de trabajo",
    ],
    advantages: [
      "Interfaz intuitiva y rápida adopción",
      "Excelente relación costo-beneficio",
    ],
    accent: "#1F7A8C",
  },
  {
    id: "keap",
    name: "Keap CRM",
    shortName: "Keap",
    tagline: "Automatización de marketing para PyMEs",
    description:
      "Solución pensada para pequeñas empresas que buscan automatizar ventas y campañas de marketing en un solo lugar.",
    features: [
      "Email marketing automatizado",
      "Pipeline de ventas visual",
      "Facturación y pagos integrados",
    ],
    advantages: [
      "Ideal para pequeños equipos comerciales",
      "Plantillas de automatización listas",
    ],
    accent: "#16A34A",
  },
  {
    id: "creatio",
    name: "Creatio CRM",
    shortName: "Creatio",
    tagline: "CRM no-code de bajo código",
    description:
      "Plataforma low-code que permite automatizar procesos comerciales complejos sin programación intensiva.",
    features: [
      "Diseñador de procesos no-code",
      "BPM empresarial integrado",
      "Marketing, ventas y servicio unificados",
    ],
    advantages: [
      "Altamente personalizable",
      "Escala con la complejidad del negocio",
    ],
    accent: "#7C3AED",
  },
  {
    id: "capsule",
    name: "Capsule CRM",
    shortName: "Capsule",
    tagline: "Simplicidad para relaciones de valor",
    description:
      "CRM ligero y elegante centrado en la organización de contactos y el seguimiento de oportunidades clave.",
    features: [
      "Vista 360° del cliente",
      "Etiquetas y segmentación flexibles",
      "Integraciones con herramientas populares",
    ],
    advantages: ["Curva de aprendizaje mínima", "Limpio y fácil de usar"],
    accent: "#0EA5E9",
  },
  {
    id: "bitrix24",
    name: "Bitrix24 CRM",
    shortName: "Bitrix24",
    tagline: "Suite colaborativa todo en uno",
    description:
      "Conjunto completo de herramientas de CRM, colaboración, telefonía y gestión de tareas para toda la organización.",
    features: [
      "CRM, tareas y proyectos",
      "Contact center omnicanal",
      "Telefonía y videollamadas integradas",
    ],
    advantages: ["Amplio set de funciones", "Versión gratuita disponible"],
    accent: "#2563EB",
  },
  {
    id: "pipeliner",
    name: "Pipeliner CRM",
    shortName: "Pipeliner",
    tagline: "Ventas visuales y predictivas",
    description:
      "CRM orientado a ventas con una experiencia visual única para gestionar el pipeline de principio a fin.",
    features: [
      "Pipeline visual interactivo",
      "Reportes e inteligencia de ventas",
      "Aplicación móvil potente",
    ],
    advantages: ["Enfoque 100% en ventas", "Sin costos ocultos por usuario"],
    accent: "#EA580C",
  },
  {
    id: "hubspot",
    name: "HubSpot CRM",
    shortName: "HubSpot",
    tagline: "Crecimiento inbound integral",
    description:
      "Plataforma de crecimiento que une marketing, ventas, servicio y CMS sobre un CRM central y gratuito.",
    features: [
      "Marketing Hub y Sales Hub",
      "Automatización inbound",
      "Analítica y reportes avanzados",
    ],
    advantages: ["Ecosistema integral", "Escalabilidad por módulos"],
    accent: "#F97316",
  },
  {
    id: "dynamics365",
    name: "Microsoft Dynamics 365 Sales",
    shortName: "Dynamics 365",
    tagline: "El CRM empresarial impulsado por IA",
    description:
      "Solución empresarial de ventas con inteligencia artificial nativa, integración total con Microsoft 365 y escalabilidad ilimitada.",
    features: [
      "IA generativa con Copilot",
      "Integración nativa con Microsoft 365",
      "Insights predictivos de ventas",
    ],
    advantages: [
      "Máxima escalabilidad y seguridad",
      "Mejor evaluada para Business Soft S.A.",
    ],
    accent: "#0F4C81",
    featured: true,
  },
  {
    id: "odoo",
    name: "Odoo CRM",
    shortName: "Odoo",
    tagline: "CRM dentro de un ERP modular",
    description:
      "Módulo de CRM integrado a la suite empresarial Odoo, conectado con ventas, inventario, contabilidad y más.",
    features: [
      "Integración con ERP completo",
      "Open source y extensible",
      "Automatización de oportunidades",
    ],
    advantages: ["Todo el negocio en una plataforma", "Costo flexible"],
    accent: "#9333EA",
  },
  {
    id: "sugarcrm",
    name: "SugarCRM",
    shortName: "SugarCRM",
    tagline: "Experiencia de cliente predictiva",
    description:
      "Plataforma de CX que utiliza IA para anticipar necesidades y entregar experiencias de cliente memorables.",
    features: [
      "Predicción con SugarPredict",
      "Automatización de procesos",
      "Despliegue en nube o local",
    ],
    advantages: ["Alta personalización", "Enfoque en experiencia de cliente"],
    accent: "#DC2626",
  },
];

export const FEATURED_PRODUCT_ID = "dynamics365";

export const DYNAMICS_HIGHLIGHTS: Benefit[] = [
  {
    icon: Network,
    title: "Integración total",
    description:
      "Conexión nativa con Microsoft 365, Teams, Outlook y Power Platform para un flujo de trabajo sin fricciones.",
  },
  {
    icon: Bot,
    title: "Inteligencia Artificial",
    description:
      "Copilot y analítica predictiva que sugieren los siguientes mejores pasos y priorizan oportunidades.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    description:
      "Arquitectura en la nube de Azure que crece con tu empresa, desde PyMEs hasta grandes corporativos.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad empresarial",
    description:
      "Cumplimiento, cifrado y control de acceso de nivel corporativo respaldados por Microsoft.",
  },
];

export const BENEFITS: Benefit[] = [
  {
    icon: Workflow,
    title: "Automatización Comercial",
    description:
      "Automatiza tareas repetitivas de ventas y marketing para que tu equipo se enfoque en cerrar negocios.",
  },
  {
    icon: BarChart3,
    title: "Reportes Inteligentes",
    description:
      "Dashboards en tiempo real con métricas accionables para tomar mejores decisiones comerciales.",
  },
  {
    icon: Network,
    title: "Integración Empresarial",
    description:
      "Conecta tu CRM con ERP, correo, telefonía y las herramientas que ya usa tu organización.",
  },
  {
    icon: Lock,
    title: "Seguridad",
    description:
      "Protección de datos de nivel empresarial con cifrado, respaldos y control granular de accesos.",
  },
  {
    icon: MessagesSquare,
    title: "Omnicanal",
    description:
      "Atiende a tus clientes por correo, chat, redes sociales y teléfono desde una sola plataforma.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    description:
      "Soluciones que crecen contigo, adaptándose al ritmo y tamaño de tu negocio en cada etapa.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Diagnóstico",
    description:
      "Analizamos tus procesos comerciales actuales y detectamos oportunidades de mejora.",
    icon: Search,
  },
  {
    step: 2,
    title: "Análisis",
    description:
      "Diseñamos la solución CRM ideal según tus objetivos, presupuesto y madurez digital.",
    icon: ClipboardCheck,
  },
  {
    step: 3,
    title: "Implementación",
    description:
      "Configuramos, integramos y migramos tus datos para una puesta en marcha sin sobresaltos.",
    icon: Rocket,
  },
  {
    step: 4,
    title: "Capacitación",
    description:
      "Formamos a tu equipo para que aproveche al máximo todas las capacidades del CRM.",
    icon: GraduationCap,
  },
  {
    step: 5,
    title: "Soporte",
    description:
      "Acompañamiento continuo y soporte experto para garantizar resultados sostenibles.",
    icon: Headset,
  },
];

export const CLIENT_SECTORS: ClientSector[] = [
  {
    name: "Sector Financiero",
    icon: Landmark,
    description: "Bancos y fintechs",
  },
  { name: "Retail", icon: ShoppingBag, description: "Cadenas y comercios" },
  { name: "Seguros", icon: ShieldCheck, description: "Aseguradoras líderes" },
  {
    name: "Educación",
    icon: GraduationCap,
    description: "Instituciones educativas",
  },
  { name: "Industria", icon: Factory, description: "Manufactura y logística" },
];

export const CLIENT_LOGOS = [
  { name: "FinCorp", icon: Wallet },
  { name: "RetailMax", icon: ShoppingBag },
  { name: "SeguroPlus", icon: ShieldCheck },
  { name: "EduPro", icon: GraduationCap },
  { name: "IndustriaQ", icon: Boxes },
  { name: "BancaViva", icon: Building2 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "María Fernanda Loor",
    role: "Directora Comercial",
    company: "FinCorp Ecuador",
    quote:
      "Business Soft transformó nuestra operación comercial. La implementación de Dynamics 365 incrementó nuestra productividad de ventas en un 40% en menos de seis meses.",
    rating: 5,
  },
  {
    name: "Carlos Andrade",
    role: "Gerente de TI",
    company: "RetailMax",
    quote:
      "El acompañamiento del equipo fue excepcional. Migramos toda nuestra data sin interrupciones y hoy tenemos visibilidad total del pipeline en tiempo real.",
    rating: 5,
  },
  {
    name: "Daniela Vélez",
    role: "CEO",
    company: "SeguroPlus",
    quote:
      "Profesionalismo de principio a fin. La solución CRM que nos recomendaron se ajustó perfectamente a nuestro sector y a nuestro presupuesto.",
    rating: 5,
  },
];

export const VALUES = [
  {
    icon: ShieldCheck,
    title: "Confianza",
    description: "Relaciones transparentes y a largo plazo con cada cliente.",
  },
  {
    icon: LineChart,
    title: "Excelencia",
    description: "Estándares de calidad de nivel internacional en cada proyecto.",
  },
  {
    icon: Bot,
    title: "Innovación",
    description: "Adoptamos la mejor tecnología CRM e inteligencia artificial.",
  },
  {
    icon: Headset,
    title: "Compromiso",
    description: "Acompañamiento real antes, durante y después de implementar.",
  },
];
