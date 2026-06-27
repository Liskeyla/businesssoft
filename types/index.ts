import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  features: string[];
  advantages: string[];
  accent: string;
  featured?: boolean;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ClientSector {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  email: string;
  scheduleTitle: string;
  scheduleDays: string;
  scheduleHours: string;
  address: string;
}
