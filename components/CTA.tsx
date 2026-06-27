"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function CTA() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-600 to-brand-dark px-6 py-16 text-center shadow-soft-lg md:px-12 md:py-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-brand-light/30 blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-white/10 blur-[100px]" />
            <div className="absolute inset-0 bg-grid-light bg-[size:40px_40px] opacity-10" />
          </div>

          <motion.h2
            variants={fadeUp}
            className="relative mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-[2.75rem]"
          >
            ¿Listo para transformar la gestión comercial de tu empresa?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-4 max-w-2xl text-white/80"
          >
            Conversemos sobre tus objetivos y diseñemos juntos la solución CRM
            perfecta para tu organización.
          </motion.p>

          <motion.div variants={fadeUp} className="relative mt-8">
            <a
              href="#contacto"
              className="btn bg-white text-brand shadow-soft-lg hover:bg-brand-light hover:text-white group"
            >
              Solicitar Asesoría
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
