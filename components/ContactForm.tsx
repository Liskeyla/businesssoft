"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/providers/ToastProvider";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

const FIELDS = [
  { name: "name", label: "Nombre", type: "text", placeholder: "Tu nombre completo" },
  { name: "company", label: "Empresa", type: "text", placeholder: "Nombre de tu empresa" },
  { name: "email", label: "Correo", type: "email", placeholder: "tucorreo@empresa.com" },
  { name: "phone", label: "Teléfono", type: "tel", placeholder: "+593 999 999 999" },
] as const;

export function ContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormValues) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            company: data.company,
            reply_to: data.email,
            phone: data.phone,
            message: data.message,
          },
          { publicKey }
        );
      } else {
        // Fallback de demostración cuando EmailJS aún no está configurado.
        await new Promise((resolve) => setTimeout(resolve, 1200));
        console.info("[Business Soft] EmailJS no configurado. Datos:", data);
      }

      toast({
        type: "success",
        title: "¡Mensaje enviado!",
        description:
          "Gracias por contactarnos. Nuestro equipo te responderá muy pronto.",
      });
      reset();
    } catch (error) {
      console.error(error);
      toast({
        type: "error",
        title: "No se pudo enviar el mensaje",
        description: "Inténtalo nuevamente o escríbenos por WhatsApp.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="card space-y-5"
      aria-label="Formulario de contacto"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.name} className="flex flex-col gap-1.5">
            <label
              htmlFor={field.name}
              className="text-sm font-medium text-[rgb(var(--foreground))]"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              aria-invalid={!!errors[field.name]}
              aria-describedby={
                errors[field.name] ? `${field.name}-error` : undefined
              }
              className={cn(
                "rounded-xl border bg-[rgb(var(--background))] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-brand-light focus:ring-2 focus:ring-brand-light/30",
                errors[field.name]
                  ? "border-red-400"
                  : "border-[rgb(var(--border))]"
              )}
              {...register(field.name)}
            />
            {errors[field.name] && (
              <p
                id={`${field.name}-error`}
                className="text-xs font-medium text-red-500"
                role="alert"
              >
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-[rgb(var(--foreground))]"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Cuéntanos sobre tu empresa y qué necesitas..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "resize-none rounded-xl border bg-[rgb(var(--background))] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-brand-light focus:ring-2 focus:ring-brand-light/30",
            errors.message ? "border-red-400" : "border-[rgb(var(--border))]"
          )}
          {...register("message")}
        />
        {errors.message && (
          <p
            id="message-error"
            className="text-xs font-medium text-red-500"
            role="alert"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full group"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
          </>
        ) : (
          <>
            Enviar mensaje
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
