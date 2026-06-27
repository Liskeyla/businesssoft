"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT, MAPS_QUERY } from "@/lib/constants";
import { slideInLeft, slideInRight, viewportOnce } from "@/lib/motion";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY
)}&output=embed`;

export function Contact() {
  return (
    <section id="contacto" className="section-padding">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu próximo proyecto CRM"
          description="Completa el formulario y un asesor de Business Soft se pondrá en contacto contigo a la brevedad."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard
                icon={<Phone className="h-5 w-5" />}
                title="Teléfono"
                value={CONTACT.phoneDisplay}
                href={`tel:${CONTACT.phone}`}
              />
              <ContactCard
                icon={<Mail className="h-5 w-5" />}
                title="Correo"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <ContactCard
                icon={<Clock className="h-5 w-5" />}
                title={CONTACT.scheduleTitle}
                value={`${CONTACT.scheduleDays} · ${CONTACT.scheduleHours}`}
              />
              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                title="Dirección"
                value={CONTACT.address}
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-[rgb(var(--border))] shadow-soft">
              <iframe
                title="Ubicación de Business Soft S.A. en Guayaquil"
                src={mapSrc}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="card flex h-full items-start gap-3 transition-all hover:-translate-y-1 hover:shadow-soft-lg">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand dark:text-brand-light">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {title}
        </p>
        <p className="mt-1 text-sm font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block" aria-label={`${title}: ${value}`}>
        {content}
      </a>
    );
  }
  return content;
}
