# Business Soft S.A. — Sitio Web Corporativo

Sitio web corporativo **premium** para **Business Soft S.A.**, empresa especializada en la comercialización e implementación de soluciones **CRM** líderes del mercado.

Diseño moderno, profesional y totalmente responsivo, optimizado para SEO y listo para desplegar en **Vercel**.

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38BDF8?logo=tailwindcss)

---

## ✨ Características

- **Diseño premium** inspirado en Microsoft, Salesforce y HubSpot.
- **Modo claro / oscuro** con persistencia y sin parpadeo (FOUC).
- **Animaciones elegantes** con Framer Motion (fade-up, slide, hover, parallax).
- **10 soluciones CRM** con tarjetas modernas y modal de detalle.
- **Producto destacado:** Microsoft Dynamics 365 Sales.
- **Formulario de contacto** validado con Zod + React Hook Form y envío con EmailJS.
- **Toast de notificaciones** personalizado.
- **Google Maps** embebido (Guayaquil, Ecuador).
- **Botón flotante de WhatsApp** y **botón volver arriba**.
- **Loader inicial**, skeletons y transiciones suaves.
- **SEO completo:** metadata, Open Graph, Twitter Cards, robots, sitemap, manifest y favicon.
- **Accesibilidad:** contraste AA, etiquetas ARIA y textos alternativos.
- **Rendimiento:** Server Components, lazy loading e imágenes optimizadas.

---

## 🧱 Stack Tecnológico

| Categoría        | Tecnología                          |
| ---------------- | ----------------------------------- |
| Framework        | Next.js 15 (App Router)             |
| UI               | React 19 + TypeScript               |
| Estilos          | TailwindCSS 3.4                     |
| Animaciones      | Framer Motion                       |
| Iconos           | Lucide React                        |
| Formularios      | React Hook Form + Zod               |
| Email            | EmailJS                             |
| Despliegue       | Vercel                             |

---

## 📂 Estructura del proyecto

```
.
├── app/                  # App Router: layout, página, SEO (robots, sitemap, manifest, OG)
├── components/           # Componentes de UI
│   ├── providers/        # ThemeProvider, ToastProvider
│   └── ui/               # Componentes reutilizables (Logo, Reveal, Counter, etc.)
├── hooks/                # Custom hooks (scroll spy, scroll position)
├── lib/                  # Datos, constantes, utilidades, validaciones, animaciones
├── types/                # Tipos TypeScript compartidos
├── public/               # Assets estáticos (favicon, iconos)
└── ...config files
```

---

## 🚀 Instalación y uso

### Requisitos previos

- Node.js 18.18+ (recomendado 20+)
- npm

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus credenciales de EmailJS

# 3. Iniciar en desarrollo
npm run dev

# 4. Build de producción
npm run build
npm run start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🔐 Variables de entorno

Consulta `.env.example`. El formulario de contacto usa **EmailJS**:

| Variable                          | Descripción                       |
| --------------------------------- | --------------------------------- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | ID del servicio de EmailJS        |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ID de la plantilla de EmailJS     |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  | Clave pública de EmailJS          |
| `NEXT_PUBLIC_SITE_URL`            | URL pública del sitio             |

> Si no configuras EmailJS, el formulario funcionará en **modo demostración** (simula el envío y muestra el toast de éxito).

---

## ☁️ Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. Entra en [vercel.com](https://vercel.com) → **Add New → Project**.
3. Importa el repositorio.
4. Añade las variables de entorno (sección _Environment Variables_).
5. Haz clic en **Deploy**. ¡Listo!

Vercel detecta automáticamente Next.js; no se requiere configuración adicional.

---

## 📜 Scripts disponibles

| Script              | Descripción                       |
| ------------------- | --------------------------------- |
| `npm run dev`       | Servidor de desarrollo            |
| `npm run build`     | Build de producción               |
| `npm run start`     | Servidor de producción            |
| `npm run lint`      | Linter (ESLint)                   |
| `npm run type-check`| Verificación de tipos TypeScript  |

---

## 📄 Licencia

Proyecto desarrollado para **Business Soft S.A.** © 2026. Todos los derechos reservados.
