import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(80, "El nombre es demasiado largo"),
  company: z
    .string()
    .min(2, "Ingresa el nombre de tu empresa")
    .max(100, "El nombre de la empresa es demasiado largo"),
  email: z
    .string()
    .min(1, "El correo es obligatorio")
    .email("Ingresa un correo electrónico válido"),
  phone: z
    .string()
    .min(7, "Ingresa un número de teléfono válido")
    .max(20, "El teléfono es demasiado largo")
    .regex(/^[0-9+()\s-]+$/, "El teléfono solo puede contener números"),
  message: z
    .string()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres)")
    .max(1000, "El mensaje es demasiado largo"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
