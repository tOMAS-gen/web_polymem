import type { Metadata } from "next";
import Image from "next/image";
import { siteData } from "@/datos/site";
import {
  Droplets,
  CloudRain,
  ShieldCheck,
  BadgeCheck,
  Package,
  PlayCircle,
  ThermometerSun,
  TrendingDown,
  Award,
} from "lucide-react";

const pageData = siteData.pages.home;
const keywords = pageData.targetKeyword.split(",").map((k) => k.trim());

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.metaDescription,
  keywords,
  alternates: {
    canonical: pageData.url,
  },
  openGraph: {
    type: "website",
    url: pageData.url,
    siteName: siteData.footer.brand,
    title: pageData.title,
    description: pageData.metaDescription,
    images: [
      {
        url: "/images/brand/isologo_c_fondo.png",
        width: 731,
        height: 675,
        alt: "Poly MEM - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.title,
    description: pageData.metaDescription,
    images: [
      {
        url: "/images/brand/isologo_c_fondo.png",
        width: 731,
        height: 675,
        alt: "Poly MEM - Logo",
        type: "image/png",
      },
    ],
  },
};

// Alternancia de WhatsApp: índice par → Pablo, índice impar → Cristian
const pabloDigits = siteData.footer.phoneNumber.replace(/\D/g, "");
const cristianDigits = siteData.footer.phone2Number.replace(/\D/g, "");

function waLink(text: string, index: number): string {
  const digits = index % 2 === 0 ? pabloDigits : cristianDigits;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export default function Home() {
  return (
    <main className="bg-white text-poly-gray-500">
      <section className="relative overflow-hidden bg-white min-h-[calc(100dvh-4rem)]">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-[calc(100%+100px)_center] sm:bg-right"
            style={{
              backgroundImage: "url('/images/home/hero-poliuretano-02.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-white/50 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/70 sm:to-white/0" />
        </div>

        <div className="relative">
          {/* Mobile hero */}
          <div className="page-container flex min-h-dvh flex-col justify-center gap-8 pt-12 pb-10 sm:hidden">
            <div className="relative z-10 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-poly-orange">
                Conocé Poly MEM
              </span>
              <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-poly-navy">
                Aislación Definitiva
                <br />
                en Mendoza.
              </h1>
              <p className="max-w-lg text-[1.05rem] font-normal leading-relaxed text-poly-gray-500 mb-4">
                Nos aseguramos de que tu techo sea impenetrable ante el calor, el frío y las goteras. Para que vivas o trabajes con total tranquilidad. Garantizado.
              </p>
            </div>

            <div className="relative z-10 mt-6 flex flex-col gap-4">
              <a
                href={waLink("Hola quiero solicitar presupuesto", 0)}
                className="w-full rounded-md bg-poly-orange px-8 py-4 text-center text-[1.05rem] font-bold text-white shadow-[0_8px_20px_rgba(255,90,31,0.3)] transition-all hover:-translate-y-1 hover:bg-poly-orange-hover hover:shadow-[0_8px_25px_rgba(255,90,31,0.4)]"
              >
                SOLICITAR PRESUPUESTO
              </a>
              <a
                href="#servicios"
                className="group flex w-full items-center justify-center gap-2 py-3 text-[0.98rem] font-bold text-poly-navy transition-colors hover:text-poly-orange"
              >
                <PlayCircle
                  size={28}
                  className="text-poly-orange transition-transform group-hover:scale-110"
                />
                Más que un techo
              </a>
            </div>
          </div>

          {/* Desktop hero */}
          <div className="page-container hidden min-h-full flex-col justify-center gap-10 py-16 sm:flex md:flex-row md:items-center">
            <div className="w-full max-w-xl space-y-4 text-left sm:space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-poly-orange sm:text-sm">
                Conocé Poly MEM
              </span>
              <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-poly-navy sm:text-5xl lg:text-[5rem]">
                Aislación{" "}
                <br className="hidden sm:block" />
                Definitiva{" "}
                <br className="hidden sm:block" />
                en Mendoza.
              </h1>
              <p className="mt-4 max-w-lg text-base font-normal leading-relaxed text-poly-gray-500 sm:text-lg lg:text-xl">
                Nos aseguramos de que tu techo sea impenetrable ante el calor, el frío y las goteras. Para que vivas o trabajes con total tranquilidad. Garantizado.
              </p>
              <div className="mt-4 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:gap-6 sm:pt-2">
                <a
                  href={waLink("Hola quiero solicitar presupuesto", 0)}
                  className="w-full rounded-md bg-poly-orange px-8 py-4 text-center font-bold text-white shadow-[0_8px_20px_rgba(255,90,31,0.3)] transition-all hover:-translate-y-1 hover:bg-poly-orange-hover hover:shadow-[0_8px_25px_rgba(255,90,31,0.4)] sm:w-auto"
                >
                  SOLICITAR PRESUPUESTO
                </a>
                <a
                  href="#servicios"
                  className="group flex w-full items-center justify-center gap-2 py-3 font-bold text-poly-navy transition-colors hover:text-poly-orange sm:w-auto sm:py-0"
                >
                  <PlayCircle
                    size={28}
                    className="text-poly-orange transition-transform group-hover:scale-110"
                  />
                  Más que un techo
                </a>
              </div>
            </div>

            <div className="mt-8 w-full max-w-md self-center md:mt-0 md:w-[380px] lg:w-[420px]">
              <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px]">
                <div className="absolute inset-0 translate-x-4 translate-y-4" />
                <div className="absolute bottom-4 right-4 hidden w-56 flex-col rounded-md border-t-4 border-poly-navy bg-white p-4 shadow-[0_15px_30px_rgba(0,0,0,0.18)] sm:flex">
                  <div className="mb-2 flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Verano
                    </span>
                    <ThermometerSun size={14} className="text-poly-orange" />
                  </div>
                  <div className="flex items-end gap-1 sm:gap-2">
                    <span className="text-2xl font-black text-poly-navy sm:text-3xl">
                      -10°C
                    </span>
                    <TrendingDown
                      size={16}
                      className="mb-1 text-poly-orange sm:h-5 sm:w-5"
                      strokeWidth={3}
                    />
                  </div>
                  <p className="mt-1 text-[10px] font-medium leading-tight text-gray-500 sm:text-xs">
                    Reducción térmica en interiores.
                  </p>
                </div>
                <div className="absolute top-4 left-4 hidden items-center gap-2 rounded-full border border-gray-100 bg-white px-3 py-2 shadow-xl sm:flex">
                  <div className="rounded-full bg-poly-orange-light p-1.5 sm:p-2">
                    <Award className="h-4 w-4 text-poly-orange sm:h-[18px] sm:w-[18px]" />
                  </div>
                  <span className="text-xs font-bold text-poly-navy sm:text-sm">
                    Espesor Garantizado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-poly-gray-50">
        <div className="page-container flex flex-col gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
              ¿Tu techo tiene estos problemas?
            </h2>
            <p className="max-w-2xl text-sm text-poly-gray-500 sm:text-base">
              Ignorar estos síntomas daña la estructura de tu propiedad y genera gastos enormes a futuro.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <a
                href={waLink("Hola tengo problemas de condensacion", 1)}
                className="relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-md border border-poly-gray-200 shadow-lg bg-cover bg-center group"
                style={{
                  backgroundImage:
                    "url('/images/servicios/poliuretano/detalle-celulosa.jpeg')",
                }}
              >
                <div className="absolute inset-0 bg-black/55 transition-colors group-hover:bg-black/60" />
                <div className="relative z-10 px-4 py-4 sm:px-5 sm:py-5">
                  <div className="flex items-center gap-2 text-base font-semibold text-white">
                    <Droplets className="h-5 w-5 text-poly-orange" />
                    Condensación
                  </div>
                  <p className="mt-3 text-sm text-white/90">
                    El techo &quot;llora&quot; en invierno por choque térmico.
                  </p>
                </div>
              </a>
              <a
                href={waLink("Hola tengo problemas de calor extremo", 2)}
                className="relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-md border border-poly-gray-200 shadow-lg bg-cover bg-center group"
                style={{
                  backgroundImage: "url('/images/home/problem-calor.jpeg')",
                }}
              >
                <div className="absolute inset-0 bg-black/55 transition-colors group-hover:bg-black/60" />
                <div className="relative z-10 px-4 py-4 sm:px-5 sm:py-5">
                  <div className="flex items-center gap-2 text-base font-semibold text-white">
                    <ShieldCheck className="h-5 w-5 text-poly-orange" />
                    Calor Extremo
                  </div>
                  <p className="mt-3 text-sm text-white/90">
                    Ambientes invivibles en verano y alto gasto energético.
                  </p>
                </div>
              </a>
              <a
                href={waLink("Hola tengo goteras y filtraciones", 3)}
                className="relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-md border border-poly-gray-200 shadow-lg bg-cover bg-center group"
                style={{
                  backgroundImage:
                    "url('/images/home/problem-filtraciones.jpeg')",
                }}
              >
                <div className="absolute inset-0 bg-black/55 transition-colors group-hover:bg-black/60" />
                <div className="relative z-10 px-4 py-4 sm:px-5 sm:py-5">
                  <div className="flex items-center gap-2 text-base font-semibold text-white">
                    <CloudRain className="h-5 w-5 text-poly-orange" />
                    Filtraciones
                  </div>
                  <p className="mt-3 text-sm text-white/90">
                    Goteras recurrentes que dañan la estructura.
                  </p>
                </div>
              </a>
            </div>
            <div className="border-2 border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <strong className="text-poly-navy">Diagnóstico técnico, no parches.</strong>{" "}
              En Poly MEM identificamos el origen del problema y aplicamos la
              solución correcta desde el primer día.
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="section bg-white">
        <div className="page-container flex flex-col gap-10">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full bg-poly-orange-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-poly-orange">
              Portafolio Técnico
            </span>
            <h2 className="text-2xl font-bold text-poly-navy sm:text-3xl">
              Nuestras Soluciones
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="group flex h-full flex-col overflow-hidden rounded-md border border-poly-gray-100 border-t-4 border-t-poly-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-t-poly-orange hover:shadow-xl">
              <div
                className="relative -mx-6 -mt-6 h-28 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/servicios/poliuretano/card-servicio.jpeg')",
                }}
              >
                <div className="absolute inset-0 bg-black/15" />
              </div>
              <div className="p-6 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-poly-orange-light">
                    <ShieldCheck className="h-5 w-5 text-poly-orange" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-poly-navy">
                    Poliuretano Proyectado
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-bold text-poly-navy">
                  Barrera Definitiva
                </h3>
                <p className="mt-3 text-sm text-poly-gray-500">
                  La barrera definitiva. Espuma rígida in-situ que elimina
                  condensación, aísla térmicamente y refuerza la estructura.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="/poliuretano-y-celulosa-proyectada"
                    className="w-full rounded-md border border-poly-gray-200 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-poly-navy transition-colors hover:border-poly-navy hover:text-poly-navy"
                  >
                    VER ESPECIFICACIONES +
                  </a>
                  <a
                    href={waLink("Hola me interesa el Poliuretano Proyectado", 4)}
                    className="w-full rounded-sm bg-poly-orange px-4 py-2 text-center text-xs font-bold uppercase tracking-wide text-white shadow-[0_8px_20px_rgba(255,90,31,0.3)] transition-all hover:-translate-y-0.5 hover:bg-poly-orange-hover hover:shadow-[0_10px_26px_rgba(255,90,31,0.4)]"
                  >
                    COTIZAR
                  </a>
                </div>
              </div>
            </article>

            <article className="group flex h-full flex-col overflow-hidden rounded-md border border-poly-gray-100 border-t-4 border-t-poly-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-t-poly-orange hover:shadow-xl">
              <div
                className="relative -mx-6 -mt-6 h-28 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/servicios/membranas/card-servicio.jpeg')",
                }}
              >
                <div className="absolute inset-0 bg-black/15" />
              </div>
              <div className="p-6 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-poly-orange-light">
                    <BadgeCheck className="h-5 w-5 text-poly-orange" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-poly-navy">
                    Impermeabilización
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-bold text-poly-navy">
                  Estanqueidad Total
                </h3>
                <p className="mt-3 text-sm text-poly-gray-500">
                  Membranas asfálticas y líquidas. Recuperamos la estanqueidad
                  total de cubiertas planas e inclinadas.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="/impermeabilizacion-y-membranas"
                    className="w-full rounded-md border border-poly-gray-200 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-poly-navy transition-colors hover:border-poly-navy hover:text-poly-navy"
                  >
                    VER ESPECIFICACIONES +
                  </a>
                  <a
                    href={waLink("Hola necesito impermeabilizar mi techo", 5)}
                    className="w-full rounded-md bg-poly-orange px-4 py-2 text-center text-xs font-bold uppercase tracking-wide text-white shadow-[0_8px_20px_rgba(255,90,31,0.3)] transition-all hover:-translate-y-0.5 hover:bg-poly-orange-hover hover:shadow-[0_10px_26px_rgba(255,90,31,0.4)]"
                  >
                    COTIZAR
                  </a>
                </div>
              </div>
            </article>

            <article className="group flex h-full flex-col overflow-hidden rounded-md border border-transparent border-t-4 border-t-poly-navy bg-poly-navy text-white shadow-md transition-all hover:-translate-y-1 hover:border-t-poly-orange hover:shadow-xl">
              <div
                className="relative -mx-6 -mt-6 h-28 bg-cover bg-center opacity-70"
                style={{
                  backgroundImage:
                    "url('/images/servicios/venta-materiales/card-servicio.jpeg')",
                }}
              >
                <div className="absolute inset-0 bg-poly-navy/60" />
              </div>
              <div className="p-6 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                    <Package className="h-5 w-5 text-poly-orange" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wide">
                    Venta de Insumos
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-bold">
                  Stock y Asesoramiento
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  Materiales profesionales para techistas y dueños de casa. Rollos,
                  pinturas y aislantes con asesoramiento técnico.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="/venta-materiales-aislacion"
                    className="w-full rounded-md border border-poly-orange px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-poly-orange transition-colors hover:bg-poly-orange hover:text-white"
                  >
                    VER CATÁLOGO +
                  </a>
                  <a
                    href={waLink("Hola quiero comprar materiales de aislacion", 6)}
                    className="w-full rounded-md bg-poly-orange px-4 py-2 text-center text-xs font-bold uppercase tracking-wide text-white shadow-[0_8px_20px_rgba(255,90,31,0.35)] transition-all hover:-translate-y-0.5 hover:bg-poly-orange-hover hover:shadow-[0_10px_26px_rgba(255,90,31,0.45)]"
                  >
                    CONSULTAR STOCK
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-container grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
              No somos improvisados. Somos especialistas.
            </h2>
            <ul className="space-y-3 text-sm text-poly-gray-500 sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-sm bg-poly-orange-light text-poly-orange">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <span>Técnicos propios capacitados bajo normas de seguridad.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-sm bg-poly-orange-light text-poly-orange">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <span>Maquinaria de última generación para una proyección exacta.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-sm bg-poly-orange-light text-poly-orange">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <span>Garantía escrita por cada metro cuadrado que aplicamos.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div
              className="relative h-64 rounded-xl bg-cover bg-center sm:h-72"
              style={{
                backgroundImage:
                  "url('/images/servicios/venta-materiales/hero-venta-materiales.jpeg')",
              }}
            >
              <div className="absolute inset-0 rounded-xl bg-poly-navy/25" />
              <div className="relative flex h-full items-end justify-start rounded-xl px-6 pb-4 text-xs text-white/80">
                Equipo Poly MEM en obra con EPP completo y maquinaria de proyección.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative section overflow-hidden"
        style={{
          backgroundImage: "url('/images/home/cta-final-galpon.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-poly-orange/90" />
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.32),_transparent_60%)]" />
        </div>
        <div className="page-container relative z-10 flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl text-white">
              ¿Listo para solucionar tu techo hoy?
            </h2>
            <p className="text-sm sm:text-base text-white">
              Te asesoramos técnicamente y preparamos un presupuesto a medida sin
              compromiso.
            </p>
          </div>
          <a
            href={waLink("Hola vengo de la pagina principal y quiero cotizar", 7)}
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-xs font-bold uppercase tracking-wide text-poly-orange shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-1 hover:bg-poly-gray-50 hover:shadow-[0_10px_26px_rgba(0,0,0,0.3)]"
          >
            CONTACTAR POR WHATSAPP
          </a>
        </div>
      </section>
    </main>
  );
}
