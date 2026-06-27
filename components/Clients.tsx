"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLIENT_LOGOS, CLIENT_SECTORS } from "@/lib/data";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

export function Clients() {
  return (
    <section id="clientes" className="section-padding">
      <div className="container-page">
        <SectionHeading
          eyebrow="Clientes"
          title="Empresas de todos los sectores confían en nosotros"
          description="Acompañamos la transformación comercial de organizaciones líderes en múltiples industrias."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {CLIENT_SECTORS.map((sector) => (
            <motion.div
              key={sector.name}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="card flex flex-col items-center gap-3 text-center hover:shadow-soft-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand dark:text-brand-light">
                <sector.icon className="h-7 w-7" />
              </span>
              <h3 className="text-sm font-bold">{sector.name}</h3>
              <p className="text-xs text-muted">{sector.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
        >
          {CLIENT_LOGOS.map((logo) => (
            <motion.div
              key={logo.name}
              variants={scaleIn}
              className="flex items-center gap-2 text-muted grayscale transition-all duration-300 hover:text-brand hover:grayscale-0 dark:hover:text-brand-light"
            >
              <logo.icon className="h-7 w-7" />
              <span className="text-lg font-bold tracking-tight">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
