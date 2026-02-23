import type { Metadata } from "next";
import { siteData } from "@/datos/site";
import {
  MessageCircle,
  Droplets,
  PaintBucket,
  ShieldCheck,
  Wrench,
  Home,
  Truck,
  Settings,
  CheckCircle2,
} from "lucide-react";

const pageData = siteData.pages.membranas;
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

export default function MembranasPage() {
  const phoneDigits = siteData.topBar.phoneNumber.replace(/\D/g, "");
  const whatsappLink = (text: string) =>
    `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;

  return (
    <main className="bg-white text-poly-gray-500">
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/servicios/membranas/hero-impermeabilizacion.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white/40" />

        <div className="relative min-h-[70vh]">
          <div className="page-container flex min-h-[70vh] flex-col justify-center py-12">
            <div className="max-w-2xl space-y-4 text-left text-poly-navy">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-poly-orange">
                Soluciones definitivas
              </span>
              <h1 className="text-3xl font-black leading-[1.05] sm:text-5xl lg:text-[3.2rem]">
                Impermeabilización
                <br />
                y Membranas.
              </h1>
              <p className="text-lg text-poly-gray-500 sm:text-xl">
                Recuperamos la estanqueidad total de tu techo. Reparación
                profesional de goteras, filtraciones y humedad en losas y
                cubiertas de chapa. Trabajo garantizado, sin parches temporales.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row">
                <a
                  href={whatsappLink(
                    "Hola necesito una visita tecnica por goteras",
                  )}
                  className="inline-flex w-full items-center justify-center rounded-sm bg-poly-orange px-6 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_26px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1 hover:bg-poly-orange-hover sm:w-auto"
                >
                  SOLICITAR VISITA TÉCNICA
                </a>
                <a
                  href="#metodo-polymem"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur-sm transition-all hover:border-poly-orange hover:text-white sm:w-auto"
                >
                  <CheckCircle2 className="h-4 w-4 text-poly-orange" />
                  Trabajos con garantía escrita
                </a>
              </div>
            </div>

            <div className="pointer-events-none relative mt-10 hidden h-24 sm:block">
              <div className="page-container relative h-full">
                <div className="absolute bottom-0 left-0">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-[0_14px_36px_rgba(0,0,0,0.55)]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-poly-navy/10">
                      <Droplets className="h-4 w-4 text-poly-navy" />
                    </div>
                    <span className="text-xs font-semibold text-poly-navy">
                      Fin a las goteras
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0">
                  <div className="w-56 rounded-md border border-poly-orange bg-white/95 p-4 shadow-[0_14px_36px_rgba(0,0,0,0.55)]">
                    <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-poly-gray-400">
                      <span>Visita técnica</span>
                      <span>Rápida</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <Truck className="h-5 w-5 text-poly-orange" />
                      <span className="text-[11px] text-poly-gray-600">
                        Coordinamos una visita en Mendoza y Gran Mendoza.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-poly-gray-50">
        <div className="page-container flex flex-col gap-8">
          <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
            ¿Tenés goteras o humedad recurrente?
          </h2>
          <p className="text-sm text-poly-gray-500 sm:text-base">
            El agua es el peor enemigo de tu construcción. Una pequeña mancha de
            humedad hoy es un hierro estructural oxidado mañana. En Poly MEM
            diagnosticamos el origen real de la filtración y aplicamos el
            sistema correcto para tu tipo de techo.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border-2 border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <Wrench className="h-5 w-5 text-poly-orange" />
                Reparación de cubiertas antiguas
              </div>
              <p className="mt-3">
                Remoción de membranas viejas despegadas, sellado de grietas y
                reimpermeabilización total.
              </p>
            </div>
            <div className="border-2 border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <Home className="h-5 w-5 text-poly-navy" />
                Impermeabilización de obra nueva
              </div>
              <p className="mt-3">
                El mejor momento para proteger tu losa es antes de que aparezcan
                los problemas. Sistemas duraderos desde el día uno.
              </p>
            </div>
            <div className="border-2 border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <ShieldCheck className="h-5 w-5 text-poly-orange" />
                Mantenimiento preventivo
              </div>
              <p className="mt-3">
                Revisión anual, sellado de babetas, desagües y repintado de
                membranas transitables.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-container grid gap-8 md:grid-cols-2 md:items-stretch">
          <div
            className="relative h-64 rounded-md bg-cover bg-center md:h-auto"
            style={{
              backgroundImage:
                "url('/images/portfolio/impermeabilizacion/galpon-agro-san-martin.jpeg')",
            }}
          >
            <div className="absolute inset-0 rounded-md bg-poly-navy/25" />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-poly-navy">
              Resistencia extrema y durabilidad
            </span>
            <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
              Colocación de Membrana Asfáltica
            </h2>
            <p className="text-sm text-poly-gray-500 sm:text-base">
              El sistema más robusto y tradicional para techos planos o con poca
              pendiente. Soldamos íntegramente a fuego los rollos para crear una
              &quot;pileta&quot; invertida que resiste los peores temporales y
              voladuras por viento Zonda.
            </p>
            <ul className="mt-2 space-y-2 text-sm text-poly-gray-500">
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  <strong>Con Aluminio:</strong> máxima reflexión solar. Ideal
                  para cubiertas no transitables.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  <strong>Geotextil (Transitable):</strong> altísima resistencia
                  mecánica al punzonado. Terminación con pintura impermeable
                  para poder caminar sobre el techo.
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href={whatsappLink(
                  "Hola necesito presupuesto de colocacion de membrana asfaltica",
                )}
                className="inline-flex w-full items-center justify-center rounded-sm border border-poly-orange px-6 py-3 text-xs font-bold uppercase tracking-wide text-poly-orange transition-colors hover:bg-poly-orange hover:text-white sm:w-auto"
              >
                COTIZAR MEMBRANA ASFÁLTICA
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-poly-gray-50">
        <div className="page-container grid gap-8 md:grid-cols-2 md:items-stretch">
          <div className="order-2 flex flex-col justify-center space-y-4 md:order-1">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-poly-navy">
              Tecnología elástica continua
            </span>
            <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
              Membranas Líquidas (Poliuretano)
            </h2>
            <p className="text-sm text-poly-gray-500 sm:text-base">
              Aplicación de polímeros líquidos de alta tecnología que, al secar,
              forman una película de &quot;goma&quot; 100% impermeable,
              transitable y sin una sola junta.
            </p>
            <ul className="mt-2 space-y-2 text-sm text-poly-gray-500">
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  <strong>Elasticidad extrema:</strong> acompaña los fuertes
                  movimientos de dilatación del techo sin rajarse ni cuartearse.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  <strong>Versatilidad total:</strong> se adapta perfectamente a
                  techos con formas complejas, canaletas, claraboyas y múltiples
                  caños pasantes.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  <strong>Reflexión solar:</strong> reduce la temperatura
                  interior de la vivienda.
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href={whatsappLink(
                  "Hola me interesa cotizar un sistema de membrana liquida poliuretanica",
                )}
                className="inline-flex w-full items-center justify-center rounded-sm border border-poly-navy px-6 py-3 text-xs font-bold uppercase tracking-wide text-poly-navy transition-colors hover:bg-poly-navy hover:text-white sm:w-auto"
              >
                COTIZAR SISTEMA LÍQUIDO
              </a>
            </div>
          </div>
          <div
            className="order-1 relative h-64 rounded-md bg-cover bg-center md:order-2 md:h-auto"
            style={{
              backgroundImage:
                "url('/images/servicios/membranas/membrana-asfaltica.jpeg')",
            }}
          >
            <div className="absolute inset-0 rounded-md bg-poly-navy/25" />
          </div>
        </div>
      </section>

      <section
        id="metodo-polymem"
        className="relative section overflow-hidden bg-poly-navy"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/servicios/membranas/metodo-polymem.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-poly-navy/80" />
        <div className="page-container relative z-10 flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center text-white">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
            <Settings className="h-9 w-9 text-poly-orange" />
          </div>
          <h2 className="text-2xl text-white font-bold sm:text-3xl">
            El secreto está en la preparación
          </h2>
          <p className="max-w-3xl text-sm text-white/80 sm:text-base">
            La membrana es tan buena como su colocación. A diferencia de la
            competencia informal, nunca pegamos sobre tierra o musgo. Cumplimos
            procesos técnicos intransigentes: hidrolavado profundo, aplicación
            de imprimación asfáltica para la adherencia química y sellado de
            puntos críticos como babetas y desagües, donde falla el 90% de los
            techos.
          </p>
        </div>
      </section>

      <section className="relative section overflow-hidden bg-poly-orange">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/servicios/membranas/cta-impermeabilizacion-tejas.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-poly-orange/90" />
        <div className="page-container relative z-10 flex flex-col gap-6 text-center text-white sm:items-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Pedí tu presupuesto de impermeabilización
          </h2>
          <p className="text-sm text-white/90 sm:max-w-2xl sm:text-base">
            No esperes a la próxima tormenta. Vamos a tu domicilio en Mendoza
            para evaluar el estado real de tu cubierta sin compromiso.
          </p>
          <a
            href={whatsappLink(
              "Hola tengo una urgencia con mi techo y necesito impermeabilizar",
            )}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-10 py-4 text-sm font-bold uppercase tracking-wide text-poly-orange shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-1 hover:bg-poly-gray-50 hover:shadow-[0_14px_36px_rgba(0,0,0,0.4)]"
          >
            <MessageCircle className="h-4 w-4" />
            CONSULTAR PRECIO POR WHATSAPP
          </a>
        </div>
      </section>
    </main>
  );
}
