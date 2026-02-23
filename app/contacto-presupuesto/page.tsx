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

export default function ContactoPresupuestoPage() {
  const phoneDigits = siteData.topBar.phoneNumber.replace(/\D/g, "");
  const whatsappLink = (text: string) =>
    `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;

  return (
    <main className="bg-white text-poly-gray-500">
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
              href={whatsappLink(
                "Hola, tengo una URGENCIA con goteras en mi techo. Necesito que me asesoren rapido.",
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
              href={whatsappLink(
                "Hola, quisiera un presupuesto para aislar/impermeabilizar el techo de mi CASA.",
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
              href={whatsappLink(
                "Hola, represento a una empresa/industria. Necesitamos cotizar un trabajo de aislacion a gran escala.",
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
              href={whatsappLink(
                "Hola, quiero hacer una consulta sobre venta de INSUMOS y lista de precios.",
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
            <div className="flex flex-col gap-2 rounded-md border border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <MapPin className="h-5 w-5 text-poly-orange" />
                Ubicación
              </div>
              <p>
                Oficina central en Mendoza. Cobertura operativa garantizada en
                Mendoza, San Juan y San Luis.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-md border border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <Phone className="h-5 w-5 text-poly-orange" />
                Teléfono directo
              </div>
              <a
                href={`tel:${phoneDigits}`}
                className="mt-1 inline-flex text-sm font-semibold text-poly-orange"
              >
                {siteData.topBar.phoneNumber}
              </a>
              <p className="text-xs text-poly-gray-500">
                Atención telefónica para urgencias y coordinación de visitas de
                obra.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-md border border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <Clock className="h-5 w-5 text-poly-orange" />
                Horarios de atención
              </div>
              <p>Lunes a Viernes de 8:00 a 18:00 hs.</p>
              <div className="mt-1 flex items-center gap-2 text-sm text-poly-gray-600">
                <Mail className="h-4 w-4 text-poly-orange" />
                <span>presupuestos@polymem.com.ar</span>
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
            Nuestra zona de cobertura
          </h2>
          <p className="text-sm text-poly-gray-500">
            Llevamos nuestras máquinas de proyección y equipos de trabajo a
            donde esté tu obra en Cuyo.
          </p>
        </div>
        <div className="mt-4 flex h-72 w-full items-center justify-center border-t border-b border-poly-gray-100 bg-poly-gray-50 text-sm text-poly-gray-500">
          Mapa de Google Maps embebido (Región de Cuyo: Mendoza, San Juan, San
          Luis) en escala de grises.
        </div>
      </section>
    </main>
  );
}
