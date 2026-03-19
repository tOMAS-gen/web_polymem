import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteData } from "@/datos/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? new URL(siteData.pages.home.url).origin;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteData.pages.home.title,
    template: "%s | Poly MEM",
  },
  description: siteData.pages.home.metaDescription,
  openGraph: {
    type: "website",
    url: siteData.pages.home.url,
    siteName: siteData.footer.brand,
    title: siteData.pages.home.title,
    description: siteData.pages.home.metaDescription,
    locale: "es_AR",
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
  twitter: {
    card: "summary_large_image",
    title: siteData.pages.home.title,
    description: siteData.pages.home.metaDescription,
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
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16",  type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32",  type: "image/png" },
      { url: "/icon-192.png",   sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png",   sizes: "512x512", type: "image/png" },
      { url: "/images/brand/isologo_icon.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/favicon-32.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.polymemaislaciones.com.ar/#business",
  name: "POLY MEM",
  alternateName: "Poly MEM Aislaciones",
  url: "https://www.polymemaislaciones.com.ar",
  logo: "https://www.polymemaislaciones.com.ar/images/brand/isologo_c_fondo.png",
  image: "https://www.polymemaislaciones.com.ar/images/brand/isologo_c_fondo.png",
  description:
    "Empresa especialista en aislación térmica, acústica e impermeabilización en Mendoza y toda la región de Cuyo. Proyección de poliuretano, celulosa y colocación de membranas asfálticas con garantía escrita.",
  telephone: "+54-9-261-248-4219",
  email: "contacto@polymemaislaciones.com.ar",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Mathus Hoyos 5798",
    addressLocality: "Guaymallén",
    addressRegion: "Mendoza",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -32.8695,
    longitude: -68.8395,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "State", name: "Mendoza", sameAs: "https://www.wikidata.org/wiki/Q1429" },
    { "@type": "State", name: "San Juan", sameAs: "https://www.wikidata.org/wiki/Q1434" },
    { "@type": "State", name: "San Luis", sameAs: "https://www.wikidata.org/wiki/Q1432" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Aislación e Impermeabilización",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Proyección de Espuma de Poliuretano",
          url: "https://www.polymemaislaciones.com.ar/poliuretano-y-celulosa-proyectada",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Proyección de Celulosa",
          url: "https://www.polymemaislaciones.com.ar/poliuretano-y-celulosa-proyectada",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Impermeabilización y Colocación de Membranas",
          url: "https://www.polymemaislaciones.com.ar/impermeabilizacion-y-membranas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Venta de Materiales para Aislación",
          url: "https://www.polymemaislaciones.com.ar/venta-materiales-aislacion",
        },
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/people/POLY-MEM/61577513511973/",
    "https://www.instagram.com/polymem.aislaciones/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phoneDigits = siteData.topBar.phoneNumber.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
    "Hola Poly MEM, estoy visitando su sitio web y me gustaría hacer una consulta.",
  )}`;

  return (
    <html lang="es-AR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <a
          href={whatsappHref}
          className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center rounded-full bg-poly-orange text-white shadow-xl transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
          aria-label="Chatear por WhatsApp con Poly MEM"
        >
          <div className="flex h-14 w-14 items-center justify-center md:h-12 md:w-12">
            <MessageCircle className="h-7 w-7" />
          </div>
          <span className="hidden pr-5 text-xs font-semibold uppercase tracking-wide md:inline">
            ¿Necesitás ayuda? Chateá con nosotros
          </span>
        </a>
      </body>
    </html>
  );
}
