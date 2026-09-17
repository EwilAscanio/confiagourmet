import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#nosotros" },
  { label: "Líderes", href: "#lideres" },
  { label: "Emprendedores", href: "#emprendedores" },
  { label: "Negocios", href: "#negocios" },
  { label: "Escuela de Liderazgo", href: "#escuela" },
  { label: "Galería", href: "#galeria" },
  { label: "Blog", href: "#blog" },
  { label: "Contáctenos", href: "#contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-3.5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-[0.82rem] font-medium transition-colors hover:text-primary ${
                i === 0 ? "text-primary" : "text-foreground/85"
              }`}
            >
              {l.label}
              {i === 0 && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-primary" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="btn-red hidden !px-5 !py-2.5 !text-[0.82rem] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> Escríbenos
          </a>
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(!open)}
            className="rounded-full border border-border p-2 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-ink px-5 pb-6 pt-3 xl:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-foreground/85 hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
