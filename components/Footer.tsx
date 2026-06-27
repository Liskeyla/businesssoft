"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { CONTACT, NAV_LINKS, SITE } from "@/lib/constants";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Soluciones CRM líderes del mercado para optimizar las ventas, el
              marketing y la atención al cliente de tu empresa.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] text-muted transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand dark:hover:text-brand-light"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Enlaces rápidos">
            <h3 className="text-sm font-bold uppercase tracking-wide">
              Enlaces rápidos
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand dark:hover:text-brand-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-brand dark:hover:text-brand-light">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand dark:hover:text-brand-light">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide">
              Horario
            </h3>
            <p className="mt-4 text-sm text-muted">{CONTACT.scheduleDays}</p>
            <p className="text-sm text-muted">{CONTACT.scheduleHours}</p>
            <a href="#contacto" className="btn-primary mt-5 w-full sm:w-auto">
              Solicitar Demo
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[rgb(var(--border))] pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition-colors hover:text-brand dark:hover:text-brand-light"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="transition-colors hover:text-brand dark:hover:text-brand-light"
            >
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
