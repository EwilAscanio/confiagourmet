import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Heart,
  Users,
  Sparkles,
  TrendingUp,
  Star,
  GraduationCap,
  Lightbulb,
  HandHeart,
  BarChart3,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  UserPlus,
  Play,
  Briefcase,
  Wallet,
  BookOpen,
  Megaphone,
  Brain,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Logo } from "@/components/site/Logo";
import { Gallery } from "@/components/site/Gallery";
import { ContactSection } from "@/components/site/Contact";
import mark from "@/assets/confia-mark.png";
import heroImg from "@/assets/hero-lider.jpg";
import yorman from "@/assets/lider_yorman.webp";
import joni from "@/assets/lider_joni.jpg";
import entrepreneur from "@/assets/entrepreneur.jpg";
import cookware from "@/assets/business-cookware.jpg";
import academy from "@/assets/academy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Confía Gourmet | Emprende, crece y cocina tu futuro" },
      {
        name: "description",
        content:
          "Comunidad de emprendedores Confía Gourmet: productos de alta calidad, formación, liderazgo y acompañamiento para construir libertad financiera.",
      },
      { property: "og:title", content: "Confía Gourmet | Emprende, crece y cocina tu futuro" },
      {
        property: "og:description",
        content:
          "Una comunidad de personas que convirtieron una oportunidad en un camino de crecimiento, bienestar y libertad.",
      },
    ],
  }),
  component: Home,
});

const heroPillars = [
  { icon: Heart, label: "Productos de\nalta calidad" },
  { icon: Users, label: "Formación y\nacompañamiento" },
  { icon: TrendingUp, label: "Desarrollo personal\ny liderazgo" },
  { icon: Sparkles, label: "Comunidad\nde emprendedores" },
  { icon: Star, label: "Una marca\ncon propósito" },
];

function Home() {
  return (
    <div id="inicio" className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-20">
        <img
          src={heroImg}
          alt="Líder de Confía Gourmet en una reunión de negocios"
          width={1366}
          height={768}
          className="absolute inset-x-0 top-20 bottom-0 h-[calc(100%-5rem)] w-full animate-[hero-zoom_1.6s_ease-out_both] object-cover object-[70%_center] sm:object-[62%_center] lg:object-center"
        />
        <div className="hero-scrim absolute inset-0" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 py-10 sm:py-14 lg:px-8">
          <div className="max-w-2xl">
            <p
              className="eyebrow animate-fade-in !text-foreground/70 !tracking-[0.35em]"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
              Confía Gourmet
            </p>
            <h1
              className="mt-5 animate-fade-in text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.25s", animationFillMode: "both" }}
            >
              Tu próximo capítulo
              <br />
              puede{" "}
              <span className="script underline-brush text-5xl text-primary sm:text-6xl lg:text-7xl">
                comenzar hoy
              </span>
            </h1>
            <p
              className="mt-7 max-w-lg animate-fade-in text-base leading-relaxed text-foreground/80"
              style={{ animationDelay: "0.45s", animationFillMode: "both" }}
            >
              Una comunidad de personas que decidieron convertir una oportunidad en un camino de
              crecimiento, bienestar y libertad.
            </p>
            <div
              className="mt-9 flex animate-fade-in flex-wrap gap-3"
              style={{ animationDelay: "0.65s", animationFillMode: "both" }}
            >
              <a href="#emprendedores" className="btn-red hover-scale">
                <UserPlus className="h-4 w-4" /> Quiero emprender <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#nosotros" className="btn-ghost hover-scale">
                <Play className="h-4 w-4" /> Conoce Confía Gourmet
              </a>
            </div>
          </div>

          <p
            className="script pointer-events-none absolute bottom-40 right-6 hidden animate-fade-in text-4xl leading-[0.9] text-foreground/90 lg:block"
            style={{ animationDelay: "0.85s", animationFillMode: "both" }}
          >
            Cocina
            <br />
            Sueña
            <br />
            <span className="underline-brush">Emprende</span>
          </p>
        </div>

        {/* pillar strip */}
        <div className="relative z-10 animate-[hero-rise_0.7s_ease-out_1s_both] border-t border-border/60 bg-ink/70 backdrop-blur-md">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-border/60 px-5 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:px-8">
            {heroPillars.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 px-2 py-5 lg:px-6">
                <Icon className="h-6 w-6 shrink-0 text-foreground/80" strokeWidth={1.5} />
                <span className="whitespace-pre-line text-[0.78rem] leading-snug text-foreground/85">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center pb-3">
            <ChevronDown className="h-5 w-5 animate-bounce text-foreground/60" />
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="bg-cream text-cream-foreground">
        <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Quiénes somos</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Más que una marca,
                <br />
                una historia real
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream-foreground/75">
                Confía Gourmet nació de una idea sencilla: acompañar a las personas para que su
                cocina y su vida cambien al mismo tiempo. Somos una red de emprendedores que trabaja
                con productos de excelencia, formación constante y un propósito claro.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {[
                  { icon: Heart, label: "Pasión" },
                  { icon: Users, label: "Personas" },
                  { icon: Star, label: "Oportunidades" },
                  { icon: TrendingUp, label: "Crecimiento" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="text-center">
                    <Icon className="mx-auto h-7 w-7 text-primary" strokeWidth={1.6} />
                    <p className="mt-2 text-xs font-semibold">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <figure className="relative overflow-hidden rounded-2xl card-shadow">
              <img
                src={cookware}
                alt="Set de ollas de acero inoxidable de alta calidad"
                loading="lazy"
                width={1408}
                height={912}
                className="h-[380px] w-full object-cover"
              />
              <figcaption className="script absolute bottom-6 left-6 max-w-[14ch] text-3xl text-foreground">
                El mejor ingrediente es la <span className="underline-brush">decisión</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* LIDERES */}
      <section id="lideres" className="bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow">Nuestros líderes</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Líderes que inspiran</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Detrás de Confía Gourmet hay personas con experiencia, visión y compromiso: quienes ya
              recorrieron el camino y hoy acompañan a otros a lograrlo.
            </p>
            <p className="script mt-8 text-3xl text-foreground/90">
              Detrás de Confía Gourmet
              <br />
              hay personas, hay historias,
              <br />
              <span className="underline-brush">hay un propósito.</span>
            </p>
            <a href="#contacto" className="btn-red mt-8">
              Conoce nuestros líderes <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              {
                img: yorman,
                name: "Yorman Lizcano",
                role: "CEO (Director Ejecutivo)",
              },
              {
                img: joni,
                name: "Jonilce Flores",
                role: "COO (Directora de Operaciones)",
              },
            ].map((p) => (
              <article key={p.name} className="overflow-hidden rounded-2xl bg-card card-shadow">
                <img
                  src={p.img}
                  alt={`Retrato de ${p.name}`}
                  loading="lazy"
                  width={1728}
                  height={3072}
                  className="h-64 w-full object-cover sm:h-80"
                />
                <div className="border-l-2 border-primary p-5">
                  <h3 className="text-base font-semibold">{p.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EMPRENDEDORES */}
      <section id="emprendedores" className="bg-secondary/40">
        <div className="mx-auto grid max-w-[1400px] items-stretch gap-0 lg:grid-cols-2">
          <figure className="relative min-h-[360px]">
            <img
              src={entrepreneur}
              alt="Emprendedora compartiendo la oportunidad con un grupo de personas"
              loading="lazy"
              width={1200}
              height={912}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <figcaption className="script absolute bottom-8 left-8 max-w-[16ch] text-3xl text-foreground drop-shadow-lg">
              Tu cocina también <span className="underline-brush">puede generar ingresos</span>
            </figcaption>
          </figure>

          <div className="px-5 py-16 lg:px-14">
            <p className="eyebrow">Emprendedores</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Tu historia también
              <br />
              puede ser la siguiente
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              En Confía Gourmet creemos en el mérito, el acompañamiento y las herramientas
              correctas. Aquí encuentras comunidad, formación y una ruta clara hacia la libertad
              financiera.
            </p>
            <ul className="mt-8 grid gap-3 sm:max-w-sm">
              {[
                { icon: BookOpen, label: "Formación continua" },
                { icon: HandHeart, label: "Mentoría real" },
                { icon: Briefcase, label: "Herramientas de negocio" },
                { icon: Users, label: "Comunidad activa" },
                { icon: Wallet, label: "Libertad financiera" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 border-b border-border pb-3">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground/90">{label}</span>
                </li>
              ))}
            </ul>
            <a href="#contacto" className="btn-red mt-9">
              Explora la oportunidad <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* NEGOCIOS */}
      <section id="negocios" className="relative overflow-hidden">
        <img
          src={cookware}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1408}
          height={912}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-20 lg:px-8">
          <p className="eyebrow">Negocios</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Descubre el proceso</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/75">
            Tres pasos sencillos para comenzar tu negocio con el respaldo de una marca de excelencia
            y una comunidad que te acompaña.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:max-w-3xl">
            {[
              { n: "01", icon: Lightbulb, t: "Descubre la\noportunidad" },
              { n: "02", icon: HandHeart, t: "Recibe\nmentoría" },
              { n: "03", icon: BarChart3, t: "Desarrolla tu\nnegocio" },
            ].map(({ n, icon: Icon, t }) => (
              <div key={n} className="border-l border-border pl-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-[0.7rem] font-bold text-primary-foreground">
                    {n}
                  </span>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-4 whitespace-pre-line text-sm font-semibold leading-snug">{t}</p>
              </div>
            ))}
          </div>

          <a href="#contacto" className="btn-ghost mt-12">
            Conoce más del negocio <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ESCUELA */}
      <section id="escuela" className="relative overflow-hidden">
        <img
          src={academy}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1408}
          height={800}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="red-panel absolute inset-0 opacity-90" />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-5 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow !text-foreground/70">Escuela de Liderazgo</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Desarrolla tu potencial,
              <br />
              construye tu mejor versión
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/80">
              Formación en liderazgo, ventas y desarrollo personal para quienes quieren crecer como
              personas mientras hacen crecer su negocio.
            </p>
            <a href="#contacto" className="btn-red mt-8">
              Explora la escuela <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { icon: GraduationCap, label: "Liderazgo" },
              { icon: TrendingUp, label: "Desarrollo personal" },
              { icon: Megaphone, label: "Ventas" },
              { icon: MessageCircle, label: "Comunicación" },
              { icon: Users, label: "Trabajo en equipo" },
              { icon: Brain, label: "Mentalidad emprendedora" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/20 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm text-foreground/90">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Gallery />

      {/* BLOG */}
      <section id="blog" className="bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow">Blog</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Inspiración, ideas y mucho más
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Artículos, historias y contenidos sobre cocina, crecimiento personal y negocio.
            </p>
            <a href="#contacto" className="btn-red mt-6">
              Leer más <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="text-center lg:text-right">
            <p className="script text-3xl leading-[0.95] text-foreground/90">
              Tu futuro
              <br />
              comienza con
              <br />
              <span className="underline-brush">una decisión.</span>
            </p>
            <img
              src={mark}
              alt="Confía Gourmet"
              loading="lazy"
              width={70}
              height={54}
              className="mx-auto mt-6 h-12 w-auto lg:ml-auto lg:mr-0"
            />
          </div>
        </div>
      </section>

      <ContactSection />

      {/* FOOTER */}
      <footer className="border-t border-border bg-ink">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <Logo />
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-foreground/70">
            {[
              "Inicio",
              "Quiénes Somos",
              "Líderes",
              "Emprendedores",
              "Negocios",
              "Escuela de Liderazgo",
              "Galería",
              "Blog",
              "Contáctenos",
            ].map((l) => (
              <a key={l} href="#inicio" className="hover:text-primary">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex gap-3 text-foreground/70">
            <a href="#contacto" aria-label="Instagram" className="hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#contacto" aria-label="Facebook" className="hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#contacto" aria-label="YouTube" className="hover:text-primary">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="border-t border-border px-5 py-5 text-center text-[0.7rem] text-muted-foreground lg:px-8">
          © 2026 Confía Gourmet. Todos los derechos reservados.
        </div>
      </footer>

      <a
        href="#contacto"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-13 w-13 place-items-center rounded-full bg-primary p-3.5 text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
