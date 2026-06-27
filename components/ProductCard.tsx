"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Star } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onMoreInfo: (product: Product) => void;
}

export function ProductCard({ product, onMoreInfo }: ProductCardProps) {
  const initials = product.shortName.slice(0, 2).toUpperCase();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      className="card card-glow group relative flex h-full flex-col hover:shadow-soft-lg"
    >
      <span
        className="absolute inset-x-0 top-0 h-1 rounded-t-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, ${product.accent}, transparent)`,
        }}
        aria-hidden="true"
      />
      {product.featured && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
          <Star className="h-3 w-3 fill-current" /> Destacado
        </span>
      )}

      <div className="flex items-center gap-3">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white shadow-soft"
          style={{ backgroundColor: product.accent }}
          aria-hidden="true"
        >
          {initials}
        </span>
        <div>
          <h3 className="text-base font-bold leading-tight">{product.name}</h3>
          <p className="text-xs text-muted">{product.tagline}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted">{product.description}</p>

      <ul className="mt-4 space-y-2">
        {product.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onMoreInfo(product)}
        className="btn-ghost mt-auto self-start pl-0 pt-5 group/btn"
        aria-label={`Más información sobre ${product.name}`}
      >
        Más información
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      </button>
    </motion.article>
  );
}
