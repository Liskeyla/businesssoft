"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STATS, VALUES } from "@/lib/data";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

export function About() {
  return (
    <section id="empresa" className="section-padding">
      <div className="container-page">
        <SectionHeading
          eyebrow="Quiénes somos"
          title="Una empresa experta en transformación comercial"
          description="En Business Soft S.A. acompañamos a las organizaciones en la adopción de las mejores plataformas CRM del mundo, combinando estrategia, tecnología y experiencia."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.article
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="card group hover:shadow-soft-lg hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white dark:text-brand-light">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold">Misión</h3>
            <p className="mt-2 text-muted">
              Impulsar el crecimiento de las empresas mediante soluciones CRM
              inteligentes que optimicen sus procesos de ventas, marketing y
              servicio al cliente, generando resultados medibles y sostenibles.
            </p>
          </motion.article>

          <motion.article
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="card group hover:shadow-soft-lg hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light/10 text-brand-light transition-colors group-hover:bg-brand-light group-hover:text-white">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold">Visión</h3>
            <p className="mt-2 text-muted">
              Ser la empresa referente en Latinoamérica en la implementación de
              soluciones CRM, reconocida por su excelencia, innovación y por el
              impacto real que genera en la competitividad de sus clientes.
            </p>
          </motion.article>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              className="card flex flex-col items-start gap-3 hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand dark:text-brand-light">
                <value.icon className="h-5 w-5" />
              </span>
              <h4 className="text-base font-bold">{value.title}</h4>
              <p className="text-sm text-muted">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-px shadow-soft-lg">
          <div className="rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-brand to-brand-dark px-6 py-12 md:px-12">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center text-white">
                  <p className="text-4xl font-extrabold tracking-tight md:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/75">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
