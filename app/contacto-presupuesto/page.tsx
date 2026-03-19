import type { Metadata } from "next";
import { siteData } from "@/datos/site";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Droplets,
  Home,
  Factory,
  Boxes,
  Mail,
} from "lucide-react";

const pageData = siteData.pages.contactoPresupuesto;
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
        url: "/images/servicios/contacto/hero-contacto.jpeg",
        width: 1200,
        height: 630,
        alt: "Contacto y presupuesto de aislación e impermeabilización — Poly MEM Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.title,
    description: pageData.metaDescription,
    images: [
      {
        url: "/images/servicios/contacto/hero-contacto.jpeg",
        width: 1200,
        height: 630,
        alt: "Contacto y presupuesto de aislación e impermeabilización — Poly MEM Mendoza",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Hacen visitas a domicilio para presupuestar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Evaluamos el estado real de tu techo sin cargo para darte un diagnóstico preciso y una propuesta acorde.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué zonas trabajan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tenemos capacidad operativa para movilizar nuestros equipos a toda la región de Cuyo: Mendoza, San Juan y San Luis.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dan garantía por los trabajos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, entregamos garantía escrita por la estanqueidad del sistema y por el espesor del material aplicado según lo presupuestado.",
      },
    },
  ],
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
      name: "Contacto y Presupuesto",
      item: "https://www.polymemaislaciones.com.ar/contacto-presupuesto",
    },
  ],
};

export default function ContactoPresupuestoPage() {
  const { footer } = siteData;
  const phone1Href = `tel:${footer.phoneNumber.replace(/\s/g, "")}`;
  const phone2Href = `tel:${footer.phone2Number.replace(/\s/g, "")}`;

  return (
    <main className="bg-white text-poly-gray-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              "url('/images/servicios/contacto/hero-contacto.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white/40" />
        <div className="relative min-h-[40vh]">
          <div className="page-container flex min-h-[40vh] flex-col items-left justify-start py-16 text-left text-white">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-poly-orange">
              Atención inmediata
            </span>
            <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl lg:text-[3.2rem]">
              Hablemos directo, sin intermediarios.
            </h1>
            <p className="text-lg text-poly-gray-500 sm:text-xl">
              Olvidate de los formularios lentos. Elegí qué tipo de solución
              necesitás y chateá directamente con nuestro equipo técnico
              especializado por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-poly-gray-50">
        <div className="page-container flex flex-col gap-8">
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
              ¿En qué te podemos ayudar hoy?
            </h2>
            <p className="text-sm text-poly-gray-500">
              Hacé clic en la opción que mejor describa tu necesidad.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href={waLink(
                "Hola, tengo una URGENCIA con goteras en mi techo. Necesito que me asesoren rapido.",
                0,
              )}
              className="group flex flex-col gap-3 rounded-md bg-poly-orange px-5 py-6 text-white shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Droplets className="h-5 w-5 text-white" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.18em]">
                  Urgencia / Goteras
                </div>
              </div>
              <div className="text-left text-sm font-semibold">
                Tengo goteras y necesito una solución urgente.
              </div>
              <div className="mt-1 text-xs text-white/90">
                Te respondemos priorizando tu caso para evitar daños mayores.
              </div>
            </a>

            <a
              href={waLink(
                "Hola, quisiera un presupuesto para aislar/impermeabilizar el techo de mi CASA.",
                1,
              )}
              className="group flex flex-col gap-3 rounded-md border border-poly-gray-100 bg-white px-5 py-6 text-poly-gray-600 shadow-sm transition-all hover:-translate-y-1 hover:border-poly-orange hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-poly-orange-light">
                  <Home className="h-5 w-5 text-poly-orange" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-poly-navy">
                  Proyecto residencial
                </div>
              </div>
              <div className="text-left text-sm font-semibold text-poly-navy">
                Quiero aislar o impermeabilizar mi casa.
              </div>
              <div className="mt-1 text-xs text-poly-gray-500">
                Ideal para techos de losa, chapa, quinchos y ampliaciones.
              </div>
            </a>

            <a
              href={waLink(
                "Hola, represento a una empresa/industria. Necesitamos cotizar un trabajo de aislacion a gran escala.",
                2,
              )}
              className="group flex flex-col gap-3 rounded-md bg-poly-navy px-5 py-6 text-white shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Factory className="h-5 w-5 text-poly-orange" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.18em]">
                  Obra industrial / comercial
                </div>
              </div>
              <div className="text-left text-sm font-semibold">
                Represento a una empresa y necesito cotizar una nave/galpón.
              </div>
              <div className="mt-1 text-xs text-white/90">
                Coordinamos visita técnica y propuesta integral para tu planta o
                centro logístico.
              </div>
            </a>

            <a
              href={waLink(
                "Hola, quiero hacer una consulta sobre venta de INSUMOS y lista de precios.",
                3,
              )}
              className="group flex flex-col gap-3 rounded-md border border-poly-gray-100 bg-white px-5 py-6 text-poly-gray-600 shadow-sm transition-all hover:-translate-y-1 hover:border-poly-orange hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-poly-orange-light">
                  <Boxes className="h-5 w-5 text-poly-orange" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-poly-navy">
                  Compra de materiales
                </div>
              </div>
              <div className="text-left text-sm font-semibold text-poly-navy">
                Quiero consultar precios y stock de materiales.
              </div>
              <div className="mt-1 text-xs text-poly-gray-500">
                Lista de precios actualizada para insumos profesionales y stock
                en Mendoza.
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-container flex flex-col gap-8">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Ubicación */}
            <div className="flex flex-col gap-2 rounded-md border border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <MapPin className="h-5 w-5 text-poly-orange" />
                Ubicación
              </div>
              <a
                href={footer.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-sm font-medium text-poly-orange hover:underline"
              >
                {footer.address}
              </a>
              <p className="text-xs text-poly-gray-500">
                Cobertura operativa garantizada en Mendoza, San Juan y San Luis.
              </p>
            </div>

            {/* Teléfonos */}
            <div className="flex flex-col gap-2 rounded-md border border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <Phone className="h-5 w-5 text-poly-orange" />
                Teléfonos directos
              </div>
              <div className="mt-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 w-14">Pablo:</span>
                  <a
                    href={phone1Href}
                    className="font-semibold text-poly-orange hover:underline"
                  >
                    {footer.phoneNumber}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 w-14">Cristian:</span>
                  <a
                    href={phone2Href}
                    className="font-semibold text-poly-orange hover:underline"
                  >
                    {footer.phone2Number}
                  </a>
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-1.5">
                <a
                  href={waLink("Hola, quiero consultar sobre un presupuesto", 4)}
                  className="flex items-center gap-2 text-xs text-poly-gray-500 hover:text-poly-orange transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-poly-orange shrink-0" />
                  WhatsApp Pablo: {footer.whatsappNumber}
                </a>
                <a
                  href={waLink("Hola, quiero consultar sobre un presupuesto", 5)}
                  className="flex items-center gap-2 text-xs text-poly-gray-500 hover:text-poly-orange transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-poly-orange shrink-0" />
                  WhatsApp Cristian: {footer.whatsapp2Number}
                </a>
              </div>
            </div>

            {/* Horarios */}
            <div className="flex flex-col gap-2 rounded-md border border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <Clock className="h-5 w-5 text-poly-orange" />
                Horarios de atención
              </div>
              <p>Lunes a Viernes de 8:00 a 17:00 hs. Sábado y domingo cerrado.</p>
              <div className="mt-1 flex items-center gap-2 text-sm text-poly-gray-600">
                <Mail className="h-4 w-4 text-poly-orange shrink-0" />
                <a
                  href={`mailto:${footer.email}`}
                  className="hover:text-poly-orange transition-colors"
                >
                  {footer.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-poly-gray-50">
        <div className="page-container flex flex-col gap-6">
          <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
            Preguntas frecuentes rápidas
          </h2>
          <div className="space-y-4 text-sm text-poly-gray-600">
            <div className="rounded-md border border-poly-gray-100 bg-white p-4">
              <div className="text-sm font-semibold text-poly-navy">
                ¿Hacen visitas a domicilio para presupuestar?
              </div>
              <p className="mt-1">
                Sí. Evaluamos el estado real de tu techo sin cargo para darte un
                diagnóstico preciso y una propuesta acorde.
              </p>
            </div>
            <div className="rounded-md border border-poly-gray-100 bg-white p-4">
              <div className="text-sm font-semibold text-poly-navy">
                ¿En qué zonas trabajan?
              </div>
              <p className="mt-1">
                Tenemos capacidad operativa para movilizar nuestros equipos a
                toda la región de Cuyo: Mendoza, San Juan y San Luis.
              </p>
            </div>
            <div className="rounded-md border border-poly-gray-100 bg-white p-4">
              <div className="text-sm font-semibold text-poly-navy">
                ¿Dan garantía por los trabajos?
              </div>
              <p className="mt-1">
                Sí, entregamos garantía escrita por la estanqueidad del sistema
                y por el espesor del material aplicado según lo presupuestado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-container flex flex-col gap-4">
          <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
            Dónde estamos
          </h2>
          <p className="text-sm text-poly-gray-500">
            {footer.address} —{" "}
            <a
              href={footer.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-poly-orange hover:underline"
            >
              Ver en Google Maps
            </a>
          </p>
        </div>
        <div className="mt-4 w-full overflow-hidden border-t border-b border-poly-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.1234567890!2d-68.8395!3d-32.8695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09a7e5a8b3c3%3A0x0!2sAv.%20Mathus%20Hoyos%205798%2C%20Guaymall%C3%A9n%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
            width="100%"
            height="360"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Poly MEM - Av. Mathus Hoyos 5798, Guaymallén, Mendoza"
          />
        </div>
      </section>
    </main>
  );
}
