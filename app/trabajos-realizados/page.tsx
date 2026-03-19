import type { Metadata } from "next";
import { siteData } from "@/datos/site";
import obrasData from "@/datos/obras.json";
import ObrasGrid from "./ObrasGrid";

const pageData = siteData.pages.trabajosRealizados;
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
        url: "/images/portfolio/industrial/hero-trabajos-realizados.jpeg",
        width: 1200,
        height: 630,
        alt: "Portafolio de obras de aislación e impermeabilización — Poly MEM Mendoza y Cuyo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.title,
    description: pageData.metaDescription,
    images: [
      {
        url: "/images/portfolio/industrial/hero-trabajos-realizados.jpeg",
        width: 1200,
        height: 630,
        alt: "Portafolio de obras de aislación e impermeabilización — Poly MEM Mendoza y Cuyo",
      },
    ],
  },
};

const categorias = obrasData.categorias;
const obras = obrasData.obras;

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
      name: "Trabajos Realizados",
      item: "https://www.polymemaislaciones.com.ar/trabajos-realizados",
    },
  ],
};

export default function TrabajosRealizadosPage() {
  return (
    <main className="bg-white text-poly-gray-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/portfolio/industrial/hero-trabajos-realizados.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white/40" />

        <div className="relative">
          <div className="page-container flex min-h-[30vh] flex-col items-left justify-start py-16 text-left text-white">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-poly-orange">
              Evidencia técnica
            </span>
            <h1 className="text-5xl font-black leading-[1.05] sm:text-5xl lg:text-[3.2rem]">
              Trabajos Realizados.
            </h1>
            <p className="text-lg text-poly-gray-500 sm:text-xl">
              Explorá nuestro portafolio de obras industriales y residenciales en
              toda la región de Cuyo.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-poly-gray-50">
        <div className="page-container flex flex-col gap-8">
          <div className="grid gap-6 md:grid-cols-3 text-sm text-poly-gray-500">
            <div className="border-l-4 border-poly-orange pl-4">
              <h2 className="text-base font-bold text-poly-navy mb-1">Industrial</h2>
              <p>
                Naves, galpones, bodegas y plantas de frío en Mendoza y Cuyo.
                Aplicamos poliuretano proyectado de alta densidad en superficies
                de hasta 1.500 m² en una sola jornada, eliminando condensación y
                reduciendo el consumo energético de climatización.
              </p>
            </div>
            <div className="border-l-4 border-poly-navy pl-4">
              <h2 className="text-base font-bold text-poly-navy mb-1">Residencial</h2>
              <p>
                Casas, dúplex y quinchos en toda la región. Poliuretano sobre
                techo de chapa, celulosa proyectada en entretechos y membranas
                líquidas en losas. Soluciones definitivas para el clima extremo
                de Mendoza, con garantía escrita por obra.
              </p>
            </div>
            <div className="border-l-4 border-poly-gray-200 pl-4">
              <h2 className="text-base font-bold text-poly-navy mb-1">Impermeabilización</h2>
              <p>
                Recuperación de cubiertas planas, terrazas y galpones
                agroindustriales con membranas asfálticas y sistemas líquidos
                poliuretánicos. Cada obra incluye hidrolavado, imprimación y
                sellado de puntos críticos antes de la aplicación.
              </p>
            </div>
          </div>
          <ObrasGrid categorias={categorias} obras={obras} />
          <p className="text-sm text-poly-gray-500 text-center pt-4">
            Todos los trabajos fueron realizados por el equipo técnico de Poly MEM en
            Mendoza, San Juan y San Luis. ¿Querés un presupuesto para tu obra?{" "}
            <a
              href="/contacto-presupuesto"
              className="text-poly-orange font-semibold hover:underline"
            >
              Contactanos sin compromiso.
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
