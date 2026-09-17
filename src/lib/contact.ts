import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre"),
  email: z.string().trim().email("Ingresa un correo válido"),
  phone: z.string().trim().optional(),
  interest: z.string().trim().min(1, "Selecciona una opción"),
  message: z.string().trim().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)"),
});

export type ContactPayload = z.infer<typeof contactSchema>;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: unknown): ContactPayload => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("sendContactEmail: RESEND_API_KEY no configurada");
      throw new Error("El servidor no está configurado para enviar correos todavía.");
    }

    const to = process.env.CONTACT_TO ?? "cvx.eascanio@gmail.com";
    const from = process.env.CONTACT_FROM ?? "onboarding@resend.dev";

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#b91c1c">Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(data.email)}</p>
        ${data.phone ? `<p><strong>Teléfono:</strong> ${escapeHtml(data.phone)}</p>` : ""}
        <p><strong>Seleccionó:</strong> ${escapeHtml(data.interest)}</p>
        <p style="margin-top:16px"><strong>Mensaje:</strong></p>
        <p style="white-space:pre-line">${escapeHtml(data.message)}</p>
      </div>`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `Nuevo mensaje de ${data.name} — ${data.interest}`,
        html,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("sendContactEmail: Resend error", response.status, body);
      throw new Error("No pudimos enviar el mensaje. Inténtalo más tarde.");
    }

    return { ok: true as const };
  });
