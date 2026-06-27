"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, X } from "lucide-react";
import { useEffect } from "react";
import type { Product } from "@/types";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <div
            className="absolute inset-0 bg-brand-900/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6 shadow-soft-lg md:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-brand/5 hover:text-[rgb(var(--foreground))]"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4 pr-8">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-soft"
                style={{ backgroundColor: product.accent }}
                aria-hidden="true"
              >
                {product.shortName.slice(0, 2).toUpperCase()}
              </span>
              <div>
                <h3 id="product-modal-title" className="text-xl font-bold">
                  {product.name}
                </h3>
                <p className="text-sm text-muted">{product.tagline}</p>
              </div>
            </div>

            <p className="mt-5 text-sm text-muted">{product.description}</p>

            <div className="mt-6">
              <h4 className="text-sm font-bold uppercase tracking-wide text-brand dark:text-brand-light">
                Características
              </h4>
              <ul className="mt-3 space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-bold uppercase tracking-wide text-brand dark:text-brand-light">
                Ventajas
              </h4>
              <ul className="mt-3 space-y-2">
                {product.advantages.map((advantage) => (
                  <li key={advantage} className="flex items-start gap-2 text-sm">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contacto"
              onClick={onClose}
              className="btn-primary mt-7 w-full group"
            >
              Solicitar información
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
