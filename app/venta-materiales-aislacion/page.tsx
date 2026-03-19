import type { Metadata } from "next";
import { siteData } from "@/datos/site";
import {
  Package,
  MessageSquare,
  ShieldCheck,
  Store,
  Truck,
  Boxes,
  UserCircle2,
  SunMedium,
  Calculator,
  HardHat,
} from "lucide-react";

const pageData = siteData.pages.ventaMateriales;
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
        url: "/images/servicios/venta-materiales/hero-venta-materiales.jpeg",
        width: 1200,
        height: 630,
        alt: "Venta de materiales para aislación y techado en Mendoza — Poly MEM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.title,
    description: pageData.metaDescription,
    images: [
      {
        url: "/images/servicios/venta-materiales/hero-venta-materiales.jpeg",
        width: 1200,
        height: 630,
        alt: "Venta de materiales para aislación y techado en Mendoza — Poly MEM",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Venta de Materiales para Aislación y Techado",
  serviceType: "Venta de Materiales de Construcción",
  description:
    "Venta mayorista y minorista de insumos profesionales para techos en Mendoza: membranas asfálticas, geotextiles, membrana líquida poliuretánica, pintura asfáltica y revestimientos texturados. Asesoramiento técnico gratuito.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.polymemaislaciones.com.ar/#business",
    name: "POLY MEM",
  },
  areaServed: [
    { "@type": "State", name: "Mendoza" },
    { "@type": "State", name: "San Juan" },
    { "@type": "State", name: "San Luis" },
  ],
  url: "https://www.polymemaislaciones.com.ar/venta-materiales-aislacion",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.polymemaislaciones.com.ar/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Venta de Materiales de Aislación",
      item: "https://www.polymemaislaciones.com.ar/venta-materiales-aislacion",
    },
  ],
};

export default function VentaMaterialesPage() {
  const phoneDigits = siteData.topBar.phoneNumber.replace(/\D/g, "");
  const whatsappLink = (text: string) =>
    `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;

  return (
    <main className="bg-white text-poly-gray-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/servicios/venta-materiales/hero-venta-materiales.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white/40" />
        
        <div className="relative min-h-[30vh]">
          <div className="page-container flex min-h-[30vh] flex-col justify-center py-16">
            <div className="max-w-2xl space-y-4 text-left text-white">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-poly-orange">
                Stock permanente en Mendoza
              </span>
              <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl lg:text-[3.2rem]">
                Venta de Insumos
                <br />
                Profesionales.
              </h1>
              <p className="text-lg text-poly-gray-500 sm:text-xl">
                ¿Querés hacerlo vos mismo o sos aplicador? Conseguí los mismos
                materiales de alta prestación que utilizamos en nuestras obras.
                Calidad garantizada para el clima extremo de Cuyo, con el
                respaldo de técnicos especialistas.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row">
                <a
                  href={whatsappLink(
                    "Hola quisiera ver la lista de precios de materiales",
                  )}
                  className="inline-flex w-full items-center justify-center rounded-sm bg-poly-orange px-6 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_26px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1 hover:bg-poly-orange-hover sm:w-auto"
                >
                  CONSULTAR LISTA DE PRECIOS
                </a>
                <div className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-poly-navy px-6 py-3 text-xs font-semibold uppercase tracking-wide text-poly-navy backdrop-blur-sm transition-all hover:border-poly-orange hover:text-poly-orange sm:w-auto">
                  <Truck className="h-4 w-4 text-poly-orange" />
                  Envíos a todo Cuyo
                </div>
              </div>
            </div>

            <div className="pointer-events-none relative mt-10 hidden h-24 sm:block">
              <div className="page-container relative h-full">
                <div className="absolute bottom-0 left-0">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-[0_14px_36px_rgba(0,0,0,0.55)]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-poly-navy/10">
                      <Boxes className="h-4 w-4 text-poly-navy" />
                    </div>
                    <span className="text-xs font-semibold text-poly-navy">
                      Venta mayorista y minorista
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0">
                  <div className="w-56 rounded-md border border-poly-orange bg-white/95 p-4 shadow-[0_14px_36px_rgba(0,0,0,0.55)]">
                    <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-poly-gray-400">
                      <span>Asesoramiento</span>
                      <span>Gratuito</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <UserCircle2 className="h-5 w-5 text-poly-orange" />
                      <span className="text-[11px] text-poly-gray-600">
                        Técnicos que venden lo mismo que aplican en obra.
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
            Lo barato sale caro cuando se trata de techos
          </h2>
          <p className="text-sm text-poly-gray-500 sm:text-base">
            En Poly MEM no vendemos productos de &quot;ferretería&quot;
            genéricos. Comercializamos exclusivamente líneas profesionales
            formuladas para resistir la radiación solar y la amplitud térmica
            extrema de nuestra región.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border-2 border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <SunMedium className="h-5 w-5 text-poly-orange" />
                Fórmulas para Cuyo
              </div>
              <p className="mt-3">
                Materiales con alta resistencia a los rayos UV y a la
                contracción/dilatación por frío y calor extremo.
              </p>
            </div>
            <div className="border-2 border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <Calculator className="h-5 w-5 text-poly-navy" />
                Compra inteligente
              </div>
              <p className="mt-3">
                Al comprar directo a especialistas, te llevás la cantidad exacta
                y el producto correcto, sin desperdicios.
              </p>
            </div>
            <div className="border-2 border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <HardHat className="h-5 w-5 text-poly-orange" />
                Stock para el gremio
              </div>
              <p className="mt-3">
                Descuentos especiales por volumen para techistas, arquitectos y
                empresas constructoras.
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
                "url('/images/servicios/membranas/sistema-liquido.jpeg')",
            }}
          >
            <div className="absolute inset-0 rounded-md bg-poly-navy/25" />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-poly-navy">
              Protección extrema en rollos
            </span>
            <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
              Membranas Asfálticas y Geotextiles
            </h2>
            <p className="text-sm text-poly-gray-500 sm:text-base">
              Rollos de alta prestación, con asfaltos plásticos normalizados y
              armaduras de refuerzo. Ideales para lograr estanqueidad total en
              techos planos, inclinados o bajo baldosas.
            </p>
            <ul className="mt-2 space-y-2 text-sm text-poly-gray-500">
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  <strong>Membrana con Aluminio (40kg):</strong> máxima reflexión
                  solar. No se desgrana ni se quiebra.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  <strong>Membrana Geotextil (Transitable):</strong> altísima
                  resistencia mecánica al punzonado. Lista para pintar.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  <strong>Rollos de Velo Geotextil:</strong> malla estructural
                  para el refuerzo de impermeabilizaciones líquidas.
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href={whatsappLink(
                  "Hola necesito cotizar rollos de membranas asfalticas y geotextiles",
                )}
                className="inline-flex w-full items-center justify-center rounded-sm border border-poly-orange px-6 py-3 text-xs font-bold uppercase tracking-wide text-poly-orange transition-colors hover:bg-poly-orange hover:text-white sm:w-auto"
              >
                COTIZAR MEMBRANAS
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-poly-gray-50">
        <div className="page-container grid gap-8 md:grid-cols-2 md:items-stretch">
          <div className="order-2 flex flex-col justify-center space-y-4 md:order-1">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-poly-navy">
              Imprimaciones y terminaciones
            </span>
            <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
              Pinturas y Revestimientos
            </h2>
            <p className="text-sm text-poly-gray-500 sm:text-base">
              Soluciones líquidas indispensables para la preparación de
              superficies, sellado de grietas y terminación estética y funcional
              de tus cubiertas o muros.
            </p>
            <ul className="mt-2 space-y-2 text-sm text-poly-gray-500">
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  <strong>Pintura Asfáltica (Imprimación base):</strong> el
                  &quot;mordiente&quot; necesario e indispensable para
                  garantizar el pegado de cualquier membrana.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  <strong>Membrana Líquida Poliuretánica:</strong> baldes de
                  20Lts. Forma una película elástica, transitable y sin juntas.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  <strong>Revestimiento Texturado:</strong> para frentes y
                  muros. Crea una barrera impermeable altamente decorativa.
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href={whatsappLink(
                  "Hola quiero cotizar pinturas liquidas y revestimientos",
                )}
                className="inline-flex w-full items-center justify-center rounded-sm border border-poly-navy px-6 py-3 text-xs font-bold uppercase tracking-wide text-poly-navy transition-colors hover:bg-poly-navy hover:text-white sm:w-auto"
              >
                COTIZAR PINTURAS LÍQUIDAS
              </a>
            </div>
          </div>
          <div
            className="order-1 relative h-64 rounded-md bg-cover bg-center md:order-2 md:h-auto"
            style={{
              backgroundImage:
                "url('/images/servicios/venta-materiales/bloque-pinturas.jpeg')",
            }}
          >
            <div className="absolute inset-0 rounded-md bg-poly-navy/25" />
          </div>
        </div>
      </section>

      <section className="relative section overflow-hidden bg-poly-navy">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/servicios/venta-materiales/bloque-asesoramiento-tecnico.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-poly-navy/80" />
        <div className="page-container relative z-10 flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center text-white">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
            <MessageSquare className="h-9 w-9 text-poly-orange" />
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            No somos cajeros, somos técnicos
          </h2>
          <p className="max-w-3xl text-sm text-white/80 sm:text-base">
            El error más común al impermeabilizar es comprar el material
            equivocado para el tipo de superficie. En Poly MEM, antes de
            venderte un rollo o un balde, te asesoramos gratuitamente. Te
            explicamos qué producto sirve realmente para tu problema, cómo
            preparar la superficie y cómo aplicarlo paso a paso para que no
            falle. Tu éxito es nuestra mejor publicidad.
          </p>
        </div>
      </section>

      <section className="relative section overflow-hidden bg-poly-orange">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/servicios/venta-materiales/cta-pedido-whatsapp.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-poly-orange/90" />
        <div className="page-container relative z-10 flex flex-col gap-6 text-center text-white sm:items-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Hacé tu pedido por WhatsApp
          </h2>
          <p className="text-sm text-white/90 sm:max-w-2xl sm:text-base">
            Escribinos detallando qué material necesitás o contanos tu problema
            para que te armemos un presupuesto a medida. Retirás en nuestra base
            operativa o coordinamos el envío.
          </p>
          <a
            href={whatsappLink(
              "Hola quiero hacer un pedido de materiales e insumos",
            )}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-10 py-4 text-sm font-bold uppercase tracking-wide text-poly-orange shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-1 hover:bg-poly-gray-50 hover:shadow-[0_14px_36px_rgba(0,0,0,0.4)]"
          >
            <Package className="h-4 w-4" />
            PEDIR PRESUPUESTO DE MATERIALES
          </a>
        </div>
      </section>
    </main>
  );
}
