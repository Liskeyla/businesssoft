"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRODUCTS } from "@/lib/data";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import type { Product } from "@/types";

export function Products() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="productos" className="section-padding surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portafolio"
          title="10 soluciones CRM líderes del mercado"
          description="Seleccionamos e implementamos la plataforma CRM que mejor se adapta a los objetivos, presupuesto y madurez digital de tu empresa."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onMoreInfo={setSelected}
            />
          ))}
        </motion.div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
