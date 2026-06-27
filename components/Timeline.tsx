"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <section className="section-padding surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Proceso de trabajo"
          title="Cómo implementamos tu solución CRM"
          description="Una metodología probada que garantiza una adopción exitosa y resultados sostenibles."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-14"
        >
          <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-brand via-brand-light to-transparent md:block" />

          <div className="grid gap-5 md:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.li
                key={step.step}
                variants={fadeUp}
                className="relative flex flex-col gap-4 md:flex-row md:items-center"
              >
                <div className="relative z-10 flex shrink-0 items-center gap-4">
                  <span
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-light text-lg font-extrabold text-white shadow-soft"
                    )}
                  >
                    {step.step}
                  </span>
                </div>

                <div className="card flex w-full items-start gap-4 hover:-translate-y-0.5 hover:shadow-soft-lg md:ml-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand dark:text-brand-light">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < PROCESS_STEPS.length - 1 && (
                  <span className="sr-only">siguiente paso</span>
                )}
              </motion.li>
            ))}
          </div>
        </motion.ol>
      </div>
    </section>
  );
}
