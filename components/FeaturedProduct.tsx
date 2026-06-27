"use client";

import { motion } from "framer-motion";
import { Award, ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import {
  DYNAMICS_HIGHLIGHTS,
  FEATURED_PRODUCT_ID,
  PRODUCTS,
} from "@/lib/data";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

const featured = PRODUCTS.find((p) => p.id === FEATURED_PRODUCT_ID)!;

export function FeaturedProduct() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-light/20 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-brand/40 blur-[120px]" />
      </div>

      <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-light"
          >
            <Award className="h-3.5 w-3.5" /> Producto destacado
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl"
          >
            Microsoft Dynamics 365 Sales
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-white/75">
            La solución mejor evaluada dentro del informe realizado para
            Business Soft S.A. Combina inteligencia artificial, integración total
            con el ecosistema Microsoft y una escalabilidad sin límites para
            llevar tu gestión comercial al siguiente nivel.
          </motion.p>

          <motion.ul
            variants={staggerContainer}
            className="mt-7 grid gap-4 sm:grid-cols-2"
          >
            {DYNAMICS_HIGHLIGHTS.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light/20 text-brand-light">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-base font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/65">{item.description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="#contacto"
              className="btn bg-brand-light text-brand-900 shadow-glow hover:bg-white group"
            >
              Solicitar demostración
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-soft-lg backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-sm font-bold">
                  D365
                </span>
                <div>
                  <p className="font-bold">Dynamics 365 Sales</p>
                  <p className="text-xs text-white/60">Impulsado por Copilot</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                #1 Evaluado
              </span>
            </div>

            <div className="space-y-3 py-5">
              {[
                "Puntuación de oportunidades con IA",
                "Sugerencias de próxima mejor acción",
                "Previsión de ventas predictiva",
                "Integración con Teams y Outlook",
              ].map((item, i) => (
                <Reveal key={item} delay={i * 0.08} as="div">
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-light text-brand-900">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
              <Metric value="+50%" label="Productividad" />
              <Metric value="+32%" label="Conversión" />
              <Metric value="99.9%" label="Disponibilidad" />
            </div>
          </div>

          <motion.div
            variants={slideInLeft}
            className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/15 bg-brand-900/90 px-4 py-3 shadow-soft-lg backdrop-blur md:block"
          >
            <p className="text-xs text-white/60">Tagline</p>
            <p className="text-sm font-semibold text-brand-light">
              {featured.tagline}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-xl font-extrabold text-brand-light">{value}</p>
      <p className="text-xs text-white/60">{label}</p>
    </div>
  );
}
