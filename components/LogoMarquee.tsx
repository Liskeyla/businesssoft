"use client";

import { PRODUCTS } from "@/lib/data";

const BRANDS = PRODUCTS.map((p) => ({
  name: p.shortName,
  accent: p.accent,
  initials: p.shortName.slice(0, 2).toUpperCase(),
}));

function BrandChip({
  name,
  accent,
  initials,
}: {
  name: string;
  accent: string;
  initials: string;
}) {
  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-3 shadow-soft transition-colors">
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold text-white"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      >
        {initials}
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-[rgb(var(--foreground))]">
        {name}
      </span>
    </div>
  );
}

function Track({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  const items = [...BRANDS, ...BRANDS];
  return (
    <div className="flex w-max pause-on-hover">
      <div
        className={`flex gap-4 pr-4 ${
          reverse ? "animate-marquee [animation-direction:reverse]" : "animate-marquee"
        }`}
      >
        {items.map((brand, i) => (
          <BrandChip key={`${brand.name}-${i}`} {...brand} />
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="border-y border-[rgb(var(--border))] bg-[rgb(var(--surface))]/40 py-10">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          Trabajamos con las plataformas CRM líderes del mundo
        </p>
      </div>
      <div className="mask-fade-x mt-8 flex flex-col gap-4 overflow-hidden">
        <Track />
        <Track reverse />
      </div>
    </section>
  );
}
