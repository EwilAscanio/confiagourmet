"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { z } from "zod";

import { sendContactEmail } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import cookware from "@/assets/business-cookware.jpg";

// TODO: reemplazar por la ubicación real de Confía Gourmet.
const MAP_QUERY = "Caracas, Venezuela";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=12&output=embed`;

const INTERESTS = [
  "Quiero emprender",
  "Quiero ser distribuidor",
  "Formación y liderazgo",
  "Productos",
  "Invertir o alianza de negocio",
  "Otro",
] as const;

const formSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre"),
  email: z.string().trim().email("Ingresa un correo válido"),
  phone: z.string().trim().optional(),
  interest: z.string().min(1, "Selecciona una opción"),
  message: z.string().trim().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)"),
});

type FormValues = z.infer<typeof formSchema>;

const contactItems = [
  { icon: Mail, text: "cvx.eascanio@gmail.com" },
  { icon: MessageCircle, text: "WhatsApp: escríbenos desde el botón flotante" },
  { icon: MapPin, text: `${MAP_QUERY} (ubicación provisional)` },
] as const;

export function ContactSection() {
  const [sending, setSending] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: INTERESTS[0],
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setSending(true);
    try {
      await sendContactEmail({ data: values });
      toast.success("¡Mensaje enviado! Te contactaremos pronto.");
      form.reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "No pudimos enviar el mensaje. Inténtalo de nuevo.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contacto" className="relative overflow-hidden">
      <img
        src={cookware}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="red-panel absolute inset-0 opacity-90" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow !text-foreground/70">Contacto</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            Escríbenos y{" "}
            <span className="script underline-brush text-primary text-5xl">conversemos</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/80">
            Cuéntanos qué buscas y te acompañamos en tu camino con Confía Gourmet.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Panel izquierdo: info + mapa */}
          <div className="flex flex-col overflow-hidden rounded-2xl bg-ink/60 backdrop-blur-md card-shadow">
            <div className="flex flex-col gap-4 p-6 sm:p-8 border-b border-white/10">
              {contactItems.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/20 text-primary">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="text-sm text-foreground/90">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex-1 min-h-[280px] overflow-hidden">
              <iframe
                title="Mapa de Confía Gourmet"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>

          {/* Panel derecho: formulario */}
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col overflow-hidden rounded-2xl bg-ink/60 backdrop-blur-md card-shadow p-8 sm:p-10"
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 text-foreground/70">
                <MessageCircle className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Envíanos un mensaje</h3>
              </div>
              <p className="mt-1 text-sm text-foreground/60">
                Completa el formulario y te responderemos a la brevedad.
              </p>
            </div>

            <Form {...form}>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tu nombre"
                          className="h-11 rounded-lg border-white/20 bg-transparent placeholder:text-muted-foreground focus-visible:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono (opcional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+58 ..."
                          className="h-11 rounded-lg border-white/20 bg-transparent placeholder:text-muted-foreground focus-visible:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Correo</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="tucorreo@ejemplo.com"
                        className="h-11 rounded-lg border-white/20 bg-transparent placeholder:text-muted-foreground focus-visible:ring-primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="interest"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>¿Qué te interesa?</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="h-11 rounded-lg border-white/20 bg-transparent data-[placeholder]:text-muted-foreground focus-visible:ring-primary">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-ink border-border">
                        {INTERESTS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[140px] rounded-lg border-white/20 bg-transparent placeholder:text-muted-foreground focus-visible:ring-primary"
                        placeholder="Cuéntanos tu idea..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={sending}
                className="mt-6 w-full h-12 rounded-full bg-white text-ink font-semibold hover:bg-white/90 transition-colors"
              >
                <Send className={sending ? "animate-pulse mr-2" : "mr-2"} />
                {sending ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </Form>
          </form>
        </div>
      </div>
    </section>
  );
}
