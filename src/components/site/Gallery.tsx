import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const shots = [
  { src: g1, alt: "Equipo de emprendedores celebrando en un evento" },
  { src: g2, alt: "Olla de acero inoxidable humeante en la cocina" },
  { src: g3, alt: "Equipo con camisas rojas en evento de reconocimiento" },
  { src: g4, alt: "Plato gourmet emplatado" },
];

export function Gallery() {
  const track = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const scrollBy = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
    setPage((p) => Math.min(2, Math.max(0, p + dir)));
  };

  return (
    <section id="galeria" className="bg-cream text-cream-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.4fr] lg:items-center lg:px-8">
        <div>
          <p className="eyebrow text-cream-foreground/50">Galería</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Momentos que <span className="script text-primary text-5xl">nos unen</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-foreground/70">
            Encuentros, formaciones y celebraciones de las personas que hacen parte de Confía
            Gourmet.
          </p>
          <a href="#contacto" className="btn-red mt-7">
            Ver galería <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative">
          <div
            ref={track}
            className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {shots.map((s) => (
              <figure
                key={s.alt}
                className="relative h-56 w-[70%] shrink-0 snap-start overflow-hidden rounded-xl sm:w-[38%] lg:w-[30%]"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  width={928}
                  height={720}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
            ))}
          </div>

          <button
            aria-label="Anterior"
            onClick={() => scrollBy(-1)}
            className="absolute -left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-background text-foreground shadow-md"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => scrollBy(1)}
            className="absolute -right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-background text-foreground shadow-md"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="mt-2 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  page === i ? "w-5 bg-primary" : "w-1.5 bg-cream-foreground/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
