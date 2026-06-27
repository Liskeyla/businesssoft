"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  CalendarDays,
  CreditCard,
  Database,
  Mail,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, slideInRight, staggerContainer, viewportOnce } from "@/lib/motion";

const INNER: { icon: LucideIcon; label: string }[] = [
  { icon: Mail, label: "Correo" },
  { icon: MessageCircle, label: "Chat" },
  { icon: Phone, label: "Telefonía" },
  { icon: CalendarDays, label: "Agenda" },
];

const OUTER: { icon: LucideIcon; label: string }[] = [
  { icon: Database, label: "ERP" },
  { icon: BarChart3, label: "BI" },
  { icon: CreditCard, label: "Pagos" },
  { icon: Users, label: "RR.HH." },
  { icon: MessageCircle, label: "Redes" },
  { icon: Mail, label: "Marketing" },
];

const FEATURES = [
  "Conectores nativos con las herramientas que ya usas",
  "Sincronización de datos en tiempo real",
  "APIs abiertas y automatizaciones sin código",
  "Una única fuente de verdad para toda tu empresa",
];

function Orbit({
  items,
  radius,
  duration,
  reverse = false,
}: {
  items: { icon: LucideIcon; label: string }[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand/20 dark:border-white/10"
      style={{
        width: radius * 2,
        height: radius * 2,
        animation: `${reverse ? "spin-reverse" : "spin"} ${duration}s linear infinite`,
      }}
    >
      {items.map((item, i) => {
        const angle = (i / items.length) * 2 * Math.PI;
        const x = radius + radius * Math.cos(angle);
        const y = radius + radius * Math.sin(angle);
        return (
          <div
            key={`${item.label}-${i}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: x, top: y }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-brand shadow-soft dark:text-brand-light"
              style={{
                animation: `${reverse ? "spin" : "spin-reverse"} ${duration}s linear infinite`,
              }}
              title={item.label}
            >
              <item.icon className="h-5 w-5" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Integrations() {
  return (
    <section className="section-padding">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <SectionHeading
            eyebrow="Integraciones"
            title="Conecta tu CRM con todo tu ecosistema empresarial"
            description="Unificamos tus plataformas para que la información fluya sin fricciones entre ventas, marketing, finanzas y operaciones."
            align="left"
          />

          <motion.ul variants={staggerContainer} className="mt-8 space-y-3">
            {FEATURES.map((feature) => (
              <motion.li
                key={feature}
                variants={fadeUp}
                className="flex items-start gap-3 text-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand dark:text-brand-light">
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                    <path d="M8.3 13.3 4.7 9.7l1.4-1.4 2.2 2.2 5.6-5.6 1.4 1.4z" />
                  </svg>
                </span>
                <span className="text-muted">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8">
            <a href="#contacto" className="btn-primary">
              Quiero integrar mi empresa
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto aspect-square w-full max-w-[460px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/10 to-brand-light/10 blur-2xl" />

          <Orbit items={OUTER} radius={210} duration={40} />
          <Orbit items={INNER} radius={130} duration={28} reverse />

          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-soft-lg">
            <span className="absolute inset-0 animate-pulse-ring rounded-3xl border border-brand-light/40" />
            <svg viewBox="0 0 24 24" className="h-9 w-9 fill-white" aria-hidden="true">
              <path d="M4 7.5C4 6.12 5.12 5 6.5 5H14a4 4 0 0 1 0 8H6.5A2.5 2.5 0 0 0 4 15.5V7.5Z" opacity="0.55" />
              <path d="M4 11.5A2.5 2.5 0 0 1 6.5 9H15a4 4 0 0 1 0 8H6.5A2.5 2.5 0 0 1 4 14.5v-3Z" />
            </svg>
            <span className="mt-1 text-xs font-bold">CRM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
