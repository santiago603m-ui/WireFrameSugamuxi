import { createFileRoute } from "@tanstack/react-router";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  Mountain,
  ArrowUpRight,
  Calendar,
  Bus,
  Hotel,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Compass,
  Utensils,
  Waves,
  Sun,
  Menu,
  X,
  PenTool,
  Grid3X3,
  MessageSquare,
  Palette,
} from "lucide-react";

export const Route = createFileRoute("/")(  {
  head: () => ({
    meta: [
      { title: "Provincia de Sugamuxi · Paisajes, cultura y aventura en Boyaca" },
      {
        name: "description",
        content:
          "Descubre la Provincia de Sugamuxi: Sogamoso, Mongui, Aquitania, Iza y el Lago de Tota. Destinos, experiencias y gastronomia en el corazon de Boyaca.",
      },
      { property: "og:title", content: "Provincia de Sugamuxi" },
      {
        property: "og:description",
        content: "Paisajes, cultura y aventura en el corazon de Boyaca.",
      },
    ],
  }),
  component: Landing,
});

/* ========================================================
   WIREFRAME CONTEXT
   ======================================================== */
interface WireframeState {
  wireframe: boolean;
  grid: boolean;
  annotations: boolean;
  toggle: (key: "wireframe" | "grid" | "annotations") => void;
}

const WireframeCtx = createContext<WireframeState>({
  wireframe: false,
  grid: false,
  annotations: false,
  toggle: () => {},
});

function useWireframe() {
  return useContext(WireframeCtx);
}

function WireframeProvider({ children }: { children: ReactNode }) {
  const [wireframe, setWireframe] = useState(true);
  const [grid, setGrid] = useState(false);
  const [annotations, setAnnotations] = useState(false);

  const toggle = (key: "wireframe" | "grid" | "annotations") => {
    if (key === "wireframe") setWireframe((v) => !v);
    if (key === "grid") setGrid((v) => !v);
    if (key === "annotations") setAnnotations((v) => !v);
  };

  return (
    <WireframeCtx.Provider value={{ wireframe, grid, annotations, toggle }}>
      {children}
    </WireframeCtx.Provider>
  );
}

/* ========================================================
   ANNOTATION HELPER
   ======================================================== */
function Annotation({ label }: { label: string }) {
  const { annotations } = useWireframe();
  if (!annotations) return null;
  return <div className="wireframe-annotation">{label}</div>;
}

/* ========================================================
   BENTO IMAGE PLACEHOLDER
   ======================================================== */
function Ph({
  label,
  tone = "verde",
  className = "",
}: {
  label: string;
  tone?: "verde" | "rojo" | "cafe" | "azul" | "cream";
  className?: string;
}) {
  const { wireframe } = useWireframe();

  const tones: Record<string, string> = {
    verde:
      "bg-[linear-gradient(135deg,#1B4332_0%,#2D6A4F_60%,#52B788_100%)] text-cream",
    rojo:
      "bg-[linear-gradient(135deg,#8C1D1D_0%,#C53030_60%,#F87171_100%)] text-cream",
    cafe:
      "bg-[linear-gradient(135deg,#5A3A1B_0%,#8B5A2B_60%,#C49A6C_100%)] text-cream",
    azul:
      "bg-[linear-gradient(135deg,#1E40AF_0%,#2563EB_60%,#60A5FA_100%)] text-cream",
    cream:
      "bg-[linear-gradient(135deg,#F2EADF_0%,#FAF6EE_100%)] text-cafe",
  };

  if (wireframe) {
    return (
      <div
        className={`wf-image-placeholder ${className}`}
        role="img"
        aria-label={label}
      >
        <span className="wf-image-placeholder__label">{label}</span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${tones[tone]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_20%_20%,white_2px,transparent_2px),radial-gradient(circle_at_80%_60%,white_1px,transparent_1px)] [background-size:48px_48px,32px_32px]" />
      <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest opacity-70">
        [{label}]
      </div>
    </div>
  );
}

/* ========================================================
   WIREFRAME CONTROLS TOOLBAR
   ======================================================== */
function WireframeControls() {
  const { wireframe, grid, annotations, toggle } = useWireframe();

  return (
    <div className="wf-controls" id="wireframe-toolbar">
      <button
        className={`wf-controls__btn ${wireframe ? "wf-controls__btn--active" : ""}`}
        onClick={() => toggle("wireframe")}
        aria-label="Alternar modo esquema"
      >
        <span className={`wf-controls__dot ${wireframe ? "wf-controls__dot--active" : ""}`} />
        <PenTool style={{ width: 14, height: 14 }} />
        Esquema
      </button>

      <span className="wf-controls__sep" />

      <button
        className={`wf-controls__btn ${grid ? "wf-controls__btn--active" : ""}`}
        onClick={() => toggle("grid")}
        aria-label="Alternar cuadricula"
      >
        <span className={`wf-controls__dot ${grid ? "wf-controls__dot--active" : ""}`} />
        <Grid3X3 style={{ width: 14, height: 14 }} />
        Cuadricula
      </button>

      <span className="wf-controls__sep" />

      <button
        className={`wf-controls__btn ${annotations ? "wf-controls__btn--active" : ""}`}
        onClick={() => toggle("annotations")}
        aria-label="Alternar anotaciones"
      >
        <span className={`wf-controls__dot ${annotations ? "wf-controls__dot--active" : ""}`} />
        <MessageSquare style={{ width: 14, height: 14 }} />
        Anotaciones
      </button>

      <span className="wf-controls__sep" />

      <button
        className="wf-controls__btn"
        onClick={() => {
          toggle("wireframe");
          toggle("grid");
          toggle("annotations");
        }}
        aria-label="Alternar todos los modos"
      >
        <Palette style={{ width: 14, height: 14 }} />
        Todo
      </button>
    </div>
  );
}

/* ========================================================
   NAV
   ======================================================== */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { annotations } = useWireframe();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  const links = [
    ["#destinos", "Destinos"],
    ["#experiencias", "Experiencias"],
    ["#gastronomia", "Gastronomia"],
    ["#guia", "Guia"],
    ["#contacto", "Contacto"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      {annotations && (
        <div className="wireframe-annotation" style={{ top: 4, left: 4 }}>
          &lt;Cabecera&gt; — Navegacion fija con efecto de desenfoque al hacer scroll
        </div>
      )}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-verde text-cream">
            <Mountain className="h-4 w-4" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-verde-deep">
            Sugamuxi
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([h, l]) => (
            <a
              key={h}
              href={h}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-rojo"
            >
              {l}
            </a>
          ))}
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 rounded-full bg-rojo px-4 py-2 text-sm font-semibold text-cream shadow-sm transition hover:bg-rojo-deep"
          >
            Planea tu viaje <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-cream md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-cream md:hidden">
          <div className="flex flex-col gap-1 px-5 py-3">
            {links.map(([h, l]) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-bone"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ========================================================
   HERO BENTO
   ======================================================== */
function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-12 md:pt-32">
      <Annotation label="<Seccion> Hero — Cuadricula bento de 12 columnas" />
      <div className="mx-auto max-w-7xl px-5">
        {/* Top headline row */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-12 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-cafe md:col-span-8">
            <span className="h-px w-10 bg-cafe" /> Boyaca · Colombia · 13 municipios
          </div>
          <div className="col-span-12 hidden items-center justify-end gap-2 md:col-span-4 md:flex">
            <span className="rounded-full border border-border bg-cream px-3 py-1 text-[11px] font-medium text-cafe">
              2.560 m s.n.m.
            </span>
            <span className="rounded-full bg-azul px-3 py-1 text-[11px] font-medium text-cream">
              Lago de Tota
            </span>
          </div>
        </div>

        <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight text-verde-deep md:text-7xl lg:text-[96px]">
          Descubre la <span className="italic text-rojo">Provincia</span> de
          <br />
          Sugamuxi
        </h1>

        {/* Bento hero grid */}
        <div className="mt-8 grid auto-rows-[140px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-6 md:gap-4">
          {/* Big hero image */}
          <Ph
            label="Foto: Lago de Tota al amanecer"
            tone="azul"
            className="col-span-2 row-span-2 rounded-3xl md:col-span-4"
          />

          {/* Description card */}
          <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-3xl bg-verde p-5 text-cream md:col-span-2 md:p-6">
            <Compass className="h-6 w-6 opacity-80" />
            <div>
              <p className="text-sm leading-relaxed opacity-90">
                Paisajes andinos, lagunas sagradas, pueblos coloniales y la
                cocina mas autentica del altiplano boyacense.
              </p>
              <a
                href="#destinos"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cream underline-offset-4 hover:underline"
              >
                Explorar destinos <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Stats / chips */}
          <div className="col-span-1 flex flex-col justify-between rounded-2xl bg-rojo p-4 text-cream md:col-span-2">
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-80">
              Municipios
            </span>
            <span className="font-display text-4xl font-bold md:text-5xl">13</span>
          </div>
          <Ph
            label="Foto: Basilica de Mongui"
            tone="cafe"
            className="col-span-1 rounded-2xl md:col-span-2"
          />
          <Ph
            label="Foto: Cultivos de cebolla"
            tone="verde"
            className="col-span-1 rounded-2xl md:col-span-1"
          />
          <div className="col-span-1 flex items-center justify-between rounded-2xl bg-azul p-4 text-cream md:col-span-1">
            <Waves className="h-5 w-5" />
            <span className="font-display text-2xl font-bold">+47</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   DESTINOS
   ======================================================== */
const destinos = [
  {
    nombre: "Sogamoso",
    tag: "Ciudad del Sol",
    desc: "Capital cultural, museo arqueologico y herencia muisca.",
    tone: "verde" as const,
    span: "md:col-span-3 md:row-span-2",
  },
  {
    nombre: "Mongui",
    tag: "Pueblo Patrimonio",
    desc: "Calles empedradas, balones artesanales y basilica colonial.",
    tone: "rojo" as const,
    span: "md:col-span-3",
  },
  {
    nombre: "Aquitania",
    tag: "Lago de Tota",
    desc: "El lago navegable mas grande de Colombia.",
    tone: "azul" as const,
    span: "md:col-span-2",
  },
  {
    nombre: "Iza",
    tag: "Postres y termales",
    desc: "Plaza dulce y aguas termales en el altiplano.",
    tone: "cafe" as const,
    span: "md:col-span-1",
  },
];

function Destinos() {
  return (
    <section id="destinos" className="relative py-20 md:py-28">
      <Annotation label="<Seccion> Destinos — Tarjetas bento con superposicion de degradado" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          eyebrow="01 · Destinos"
          title={
            <>
              13 municipios, <span className="italic text-rojo">una</span>{" "}
              provincia
            </>
          }
          desc="De Sogamoso a Mongua, cada pueblo guarda un capitulo distinto del altiplano boyacense."
        />

        <div className="mt-10 grid auto-rows-[260px] grid-cols-1 gap-3 md:grid-cols-6 md:gap-4">
          {destinos.map((d) => (
            <article
              key={d.nombre}
              className={`group relative overflow-hidden rounded-3xl ${d.span}`}
            >
              <Ph label={`Foto: ${d.nombre}`} tone={d.tone} className="absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-cream">
                <span className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-cream/15 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest backdrop-blur">
                  <MapPin className="h-3 w-3" /> {d.tag}
                </span>
                <h3 className="font-display text-3xl font-bold">{d.nombre}</h3>
                <p className="mt-1 max-w-xs text-sm opacity-90">{d.desc}</p>
                <a
                  href="#contacto"
                  className="mt-3 inline-flex w-fit items-center gap-1 text-xs font-semibold underline-offset-4 group-hover:underline"
                >
                  Ver destino <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   EXPERIENCIAS
   ======================================================== */
function Experiencias() {
  const exp = [
    { t: "Navegar el Lago de Tota", k: "Naturaleza · 1 dia", tone: "azul" as const, icon: Waves },
    { t: "Caminar Mongui colonial", k: "Cultura · medio dia", tone: "rojo" as const, icon: Compass },
    { t: "Ruta arqueologica muisca", k: "Historia · 1 dia", tone: "verde" as const, icon: Sun },
    { t: "Termales y postres en Iza", k: "Bienestar · 1 dia", tone: "cafe" as const, icon: Utensils },
  ];
  return (
    <section id="experiencias" className="relative bg-verde-deep py-20 text-cream md:py-28">
      <Annotation label="<Seccion> Experiencias — Tarjetas translucidas sobre fondo oscuro" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          eyebrow="02 · Experiencias"
          title={
            <span className="text-cream">
              Recorridos que <span className="italic text-rojo">no</span> caben
              en una postal
            </span>
          }
          desc="Itinerarios curados con operadores locales a€” del paramo al lago, de la cocina al taller artesanal."
          dark
        />
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-4">
          {exp.map((e) => (
            <article
              key={e.t}
              className="group relative flex flex-col justify-between rounded-3xl bg-cream/5 p-5 ring-1 ring-cream/10 backdrop-blur transition hover:bg-cream/10"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-rojo">
                  <e.icon className="h-5 w-5 text-cream" />
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="mt-12">
                <p className="text-[10px] font-mono uppercase tracking-widest opacity-70">
                  {e.k}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold leading-tight">
                  {e.t}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   GASTRONOMIA BENTO
   ======================================================== */
function Gastronomia() {
  const platos = ["Cuchuco de trigo", "Piquete boyacense", "Chicha", "Caldo de costilla", "Mazamorra", "Postres de Iza"];
  return (
    <section id="gastronomia" className="relative py-20 md:py-28">
      <Annotation label="<Seccion> Gastronomia — Cuadricula bento y etiquetas de opciones" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          eyebrow="03 · Gastronomia"
          title={
            <>
              Sabores del <span className="italic text-rojo">altiplano</span>
            </>
          }
          desc="Cocina campesina, recetas heredadas y productos de la tierra fria."
        />

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-3xl bg-rojo p-6 text-cream md:col-span-2">
            <Utensils className="h-7 w-7" />
            <div>
              <h3 className="font-display text-3xl font-bold leading-tight">
                Cocina hecha a fuego lento
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Trucha del lago, mazorca tierna, cuchuco, almojabanas y la chicha
                que se brinda en cada festividad.
              </p>
            </div>
          </div>

          <Ph label="Foto: Piquete boyacense" tone="cafe" className="col-span-2 row-span-2 rounded-3xl md:col-span-2" />
          <Ph label="Foto: Postres de Iza" tone="cream" className="col-span-1 rounded-3xl md:col-span-2" />
          <Ph label="Foto: Trucha del Lago" tone="azul" className="col-span-1 rounded-3xl md:col-span-2" />

          <div className="col-span-2 flex flex-wrap items-center gap-2 rounded-3xl bg-bone p-5 md:col-span-4">
            {platos.map((p) => (
              <span
                key={p}
                className="rounded-full border border-cafe/30 bg-cream px-3 py-1.5 text-xs font-medium text-cafe"
              >
                {p}
              </span>
            ))}
          </div>
          <Ph label="Foto: Mercado campesino" tone="verde" className="col-span-2 rounded-3xl md:col-span-2" />
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   GUIA
   ======================================================== */
function Guia() {
  const items = [
    {
      icon: Calendar,
      tone: "verde" as const,
      t: "Cuando ir",
      d: "Diciembre a marzo y julio a agosto: cielos despejados y temperaturas de 6° a 18°C.",
    },
    {
      icon: Bus,
      tone: "azul" as const,
      t: "Como llegar",
      d: "3h desde Bogota via Tunja por la doble calzada. Bus directo a Sogamoso desde Salitre.",
    },
    {
      icon: Hotel,
      tone: "rojo" as const,
      t: "Donde hospedarse",
      d: "Hoteles boutique en Sogamoso, posadas campesinas en Aquitania y haciendas en Iza.",
    },
  ];
  return (
    <section id="guia" className="relative bg-bone py-20 md:py-28">
      <Annotation label="<Seccion> Guia — Tarjetas informativas de 3 columnas" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          eyebrow="04 · Guia del viajero"
          title={
            <>
              Planea tu viaje con <span className="italic text-rojo">criterio</span> local
            </>
          }
          desc="Lo esencial para llegar, dormir y vivir Sugamuxi sin contratiempos."
        />
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {items.map((i) => (
            <article
              key={i.t}
              className="flex flex-col gap-4 rounded-3xl bg-cream p-6 ring-1 ring-border"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-xl ${
                  i.tone === "verde"
                    ? "bg-verde"
                    : i.tone === "azul"
                      ? "bg-azul"
                      : "bg-rojo"
                } text-cream`}
              >
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-bold text-verde-deep">
                {i.t}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80">{i.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   CONTACTO
   ======================================================== */
function Contacto() {
  return (
    <section id="contacto" className="relative py-20 md:py-28">
      <Annotation label="<Seccion> Contacto — Llamada a la accion y formulario en cuadricula de 5 columnas" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="rounded-3xl bg-verde p-8 text-cream md:col-span-3 md:p-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] opacity-80">
              05 · Contacto
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              ¿Listo para venir a Sugamuxi?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-90">
              Conecta con operadores turisticos locales, guias certificados y
              alojamientos recomendados por la comunidad.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-rojo px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-rojo-deep"
            >
              Ver operadores turisticos <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 rounded-3xl bg-cream p-6 ring-1 ring-border md:col-span-2 md:p-8"
          >
            <label className="text-xs font-mono uppercase tracking-widest text-cafe">
              Nombre
              <input
                type="text"
                className="mt-1.5 w-full rounded-xl border border-border bg-bone/40 px-4 py-3 text-sm text-foreground outline-none focus:border-verde"
                placeholder="Tu nombre"
              />
            </label>
            <label className="text-xs font-mono uppercase tracking-widest text-cafe">
              Email
              <input
                type="email"
                className="mt-1.5 w-full rounded-xl border border-border bg-bone/40 px-4 py-3 text-sm text-foreground outline-none focus:border-verde"
                placeholder="tu@correo.com"
              />
            </label>
            <label className="text-xs font-mono uppercase tracking-widest text-cafe">
              Mensaje
              <textarea
                rows={3}
                className="mt-1.5 w-full resize-none rounded-xl border border-border bg-bone/40 px-4 py-3 text-sm text-foreground outline-none focus:border-verde"
                placeholder="Cuentanos tu plan"
              />
            </label>
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-azul px-5 py-3 text-sm font-semibold text-cream transition hover:bg-azul-deep"
            >
              Enviar <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   FOOTER
   ======================================================== */
function Footer() {
  return (
    <footer className="relative border-t border-border bg-verde-deep text-cream/80">
      <Annotation label="<Pie de pagina> — Identidad de marca, enlaces y redes sociales" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-rojo text-cream">
              <Mountain className="h-4 w-4" />
            </div>
            <span className="font-display text-xl font-bold text-cream">
              Sugamuxi
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm opacity-80">
            Una iniciativa colaborativa para mostrar la riqueza natural y
            cultural de la Provincia de Sugamuxi, Boyaca.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-cream">Explora</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#destinos" className="hover:text-rojo">Destinos</a></li>
            <li><a href="#experiencias" className="hover:text-rojo">Experiencias</a></li>
            <li><a href="#gastronomia" className="hover:text-rojo">Gastronomia</a></li>
            <li><a href="#guia" className="hover:text-rojo">Guia</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-cream">Siguenos</h4>
          <div className="mt-3 flex gap-2">
            {[Instagram, Facebook, Youtube].map((I, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-lg bg-cream/10 transition hover:bg-rojo"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs opacity-70 md:flex-row">
          <span>© 2026 Provincia de Sugamuxi. Hecho con orgullo boyacense.</span>
          <span className="font-mono uppercase tracking-widest">Boyaca · Colombia</span>
        </div>
      </div>
    </footer>
  );
}

/* ========================================================
   SECTION HEAD HELPER
   ======================================================== */
function SectionHead({
  eyebrow,
  title,
  desc,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
  dark?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <span
          className={`text-[10px] font-mono uppercase tracking-[0.25em] ${
            dark ? "text-cafe-soft" : "text-cafe"
          }`}
        >
          {eyebrow}
        </span>
        <h2
          className={`mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl ${
            dark ? "text-cream" : "text-verde-deep"
          }`}
        >
          {title}
        </h2>
      </div>
      <p
        className={`max-w-md text-sm leading-relaxed md:col-span-5 ${
          dark ? "text-cream/80" : "text-foreground/80"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}

/* ========================================================
   PAGE (wrapped with WireframeProvider)
   ======================================================== */
function Landing() {
  return (
    <WireframeProvider>
      <LandingInner />
    </WireframeProvider>
  );
}

function LandingInner() {
  const { wireframe, grid } = useWireframe();

  const rootClasses = [
    "min-h-screen bg-cream font-sans text-foreground",
    wireframe ? "wireframe" : "",
    grid ? "show-grid" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className={rootClasses}>
      <Nav />
      <Hero />
      <Destinos />
      <Experiencias />
      <Gastronomia />
      <Guia />
      <Contacto />
      <Footer />
      <WireframeControls />
    </main>
  );
}
