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

const categorias = obrasData.categorias;
const obras = obrasData.obras;

export default function TrabajosRealizadosPage() {
  return (
    <main className="bg-white text-poly-gray-500">
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
        <div className="page-container flex flex-col gap-6">
          <ObrasGrid categorias={categorias} obras={obras} />
        </div>
      </section>
    </main>
  );
}
