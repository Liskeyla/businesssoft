"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  PlayCircle,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-light bg-[size:48px_48px] opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] dark:opacity-20" />
        <div className="absolute -left-24 top-10 h-96 w-96 animate-aurora rounded-full bg-brand/25 blur-[120px] dark:bg-brand/30" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 animate-aurora rounded-full bg-brand-light/25 blur-[120px] [animation-delay:-5s] dark:bg-brand-light/20" />
        <div className="absolute left-1/3 top-1/3 h-72 w-72 animate-aurora rounded-full bg-sky-400/15 blur-[110px] [animation-delay:-9s]" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          style={{ y: yContent, opacity }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Soluciones CRM líderes del mercado
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            Transformamos la gestión comercial con{" "}
            <span className="text-gradient-animated">
              soluciones CRM inteligentes
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-lg text-muted"
          >
            Ayudamos a empresas a optimizar ventas, marketing y atención al
            cliente mediante plataformas CRM líderes del mercado.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <a href="#contacto" className="btn-primary group">
              Solicitar Asesoría
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#productos" className="btn-secondary group">
              <PlayCircle className="h-4 w-4" />
              Ver Soluciones
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted"
          >
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-brand-light" /> 500+ clientes
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-brand-light" /> 15 años de
              experiencia
            </span>
            <span className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-brand-light" /> 99%
              satisfacción
            </span>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yVisual }} className="relative">
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative mx-auto w-full max-w-lg"
    >
      <div className="card border-white/40 bg-white/80 p-5 shadow-soft-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center justify-between border-b border-[rgb(var(--border))] pb-4">
          <div>
            <p className="text-xs font-medium text-muted">Panel de Ventas</p>
            <p className="text-lg font-bold">Dashboard CRM</p>
          </div>
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 py-4">
          <StatCard label="Ingresos" value="$284K" trend="+18%" />
          <StatCard label="Oportunidades" value="1,420" trend="+12%" />
        </div>

        <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))]/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-muted">
              Pipeline trimestral
            </p>
            <span className="text-xs font-semibold text-emerald-500">
              +24%
            </span>
          </div>
          <div className="flex h-24 items-end justify-between gap-2">
            {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.08 }}
                className="w-full rounded-t-md bg-gradient-to-t from-brand to-brand-light"
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 -top-6 hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 shadow-soft-lg sm:block"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
            <TrendingUp className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs text-muted">Conversión</p>
            <p className="text-sm font-bold">+42%</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 shadow-soft-lg sm:block"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand dark:text-brand-light">
            <Users className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs text-muted">Clientes activos</p>
            <p className="text-sm font-bold">8,540</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StatCard({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))]/60 p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
      <span className="text-xs font-semibold text-emerald-500">{trend}</span>
    </div>
  );
}
