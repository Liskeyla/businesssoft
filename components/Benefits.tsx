"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BENEFITS } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Benefits() {
  return (
    <section id="beneficios" className="section-padding">
      <div className="container-page">
        <SectionHeading
          eyebrow="Beneficios"
          title="Por qué elegir una solución CRM con Business Soft"
          description="Tecnología, estrategia y acompañamiento experto para que tu empresa venda más y atienda mejor."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BENEFITS.map((benefit) => (
            <motion.article
              key={benefit.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="card group relative overflow-hidden hover:shadow-soft-lg"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/5 transition-transform duration-500 group-hover:scale-150 dark:bg-brand-light/5" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-light text-white shadow-soft">
                <benefit.icon className="h-7 w-7" />
              </span>
              <h3 className="relative mt-5 text-lg font-bold">
                {benefit.title}
              </h3>
              <p className="relative mt-2 text-sm text-muted">
                {benefit.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
