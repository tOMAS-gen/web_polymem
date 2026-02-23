import type { Metadata } from "next";
import { siteData } from "@/datos/site";
import {
  ShieldCheck,
  ThermometerSun,
  Wind,
  Magnet,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const pageData = siteData.pages.poliuretanoCelulosa;
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

export default function PoliuretanoCelulosaPage() {
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
              "url('/images/servicios/poliuretano/hero-poliuretano-celulosa.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white/40" />

        <div className="relative min-h-[70vh]">
          <div className="page-container flex min-h-[70vh] flex-col justify-center py-12">
            <div className="max-w-2xl space-y-4 text-left text-poly-navy">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-poly-orange">
                Tecnología in-situ
              </span>
              <h1 className="text-5xl font-black leading-[1.05] sm:text-5xl lg:text-[3.2rem]">
                Proyección de Poliuretano
                <br />
                y Celulosa.
              </h1>
              <p className="text-lg text-poly-gray-500 sm:text-xl">
                La tecnología más eficiente para blindar tu techo. Eliminamos la
                condensación, el calor extremo y los ruidos molestos en una sola
                aplicación rápida.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row">
                <a
                  href={whatsappLink(
                    "Hola me interesa cotizar aislacion proyectada (poliuretano / celulosa)",
                  )}
                  className="inline-flex w-full items-center justify-center rounded-sm bg-poly-orange px-6 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_26px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1 hover:bg-poly-orange-hover sm:w-auto"
                >
                  SOLICITAR COTIZACIÓN
                </a>
                <a
                  href="#diferencial-espesor"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-poly-navy px-6 py-3 text-xs font-semibold uppercase tracking-wide text-poly-navy backdrop-blur-sm transition-all hover:border-poly-orange hover:text-poly-orange sm:w-auto"
                >
                  <CheckCircle2 className="h-4 w-4 text-poly-orange" />
                  Garantía de espesor real
                </a>
              </div>
            </div>

            <div className="pointer-events-none relative mt-10 hidden h-24 sm:block">
              <div className="page-container relative h-full">
                <div className="absolute bottom-0 left-0">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-[0_14px_36px_rgba(0,0,0,0.55)]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-poly-navy/10">
                      <ShieldCheck className="h-4 w-4 text-poly-navy" />
                    </div>
                    <span className="text-xs font-semibold text-poly-navy">
                      100% Hermético
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0">
                  <div className="w-56 rounded-md border border-poly-orange bg-white/95 p-4 shadow-[0_14px_36px_rgba(0,0,0,0.55)]">
                    <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-poly-gray-400">
                      <span>Ejecución</span>
                      <span>Jornada</span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-3xl font-black text-poly-navy">
                        500m²
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-poly-gray-500">
                      Aplicados por día según condiciones de obra.
                    </p>
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
            ¿Por qué fallan los aislantes tradicionales?
          </h2>
          <p className="text-sm text-poly-gray-500 sm:text-base">
            En el clima extremo de Cuyo, materiales como la lana de vidrio o las
            placas de EPS terminan fallando en las uniones. La proyección crea
            una capa continua y monolítica que se adhiere perfectamente a
            cualquier geometría.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border-2 border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <ThermometerSun className="h-5 w-5 text-poly-orange" />
                Sin Puentes Térmicos
              </div>
              <p className="mt-3">
                Al no tener juntas, el calor y el frío no encuentran por dónde
                filtrarse.
              </p>
            </div>
            <div className="border-2 border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <Wind className="h-5 w-5 text-poly-navy" />
                Sellado Total
              </div>
              <p className="mt-3">
                Bloquea el paso de corrientes de aire, polvo de la calle y
                hollín.
              </p>
            </div>
            <div className="border-2 border-poly-gray-100 bg-white p-6 text-sm text-poly-gray-500 shadow-sm">
              <div className="flex items-center gap-2 text-base font-semibold text-poly-navy">
                <Magnet className="h-5 w-5 text-poly-orange" />
                Máxima Adherencia
              </div>
              <p className="mt-3">
                Se pega a nivel molecular sobre chapa, hormigón, madera o
                ladrillo sin necesidad de pegamentos.
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
                "url('/images/servicios/poliuretano/bloque-poliuretano-rigido.jpeg')",
            }}
          >
            <div className="absolute inset-0 rounded-md bg-poly-navy/25" />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-poly-navy">
              Control térmico y condensación
            </span>
            <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
              Poliuretano Rígido de Alta Densidad
            </h2>
            <p className="text-sm text-poly-gray-500 sm:text-base">
              La barrera definitiva para industrias y viviendas. Su estructura de
              celda cerrada lo hace totalmente impermeable al agua y al vapor.
            </p>
            <ul className="mt-2 space-y-2 text-sm text-poly-gray-500">
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  Fin de la &quot;lluvia interna&quot; por condensación en invierno
                  sobre chapas y losas.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  Reduce drásticamente la temperatura interior en verano, haciendo
                  más eficiente la climatización.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  &quot;Ata&quot; las chapas y otorga rigidez estructural, evitando
                  vibraciones por viento.
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href={whatsappLink(
                  "Hola, quiero cotizar espuma de poliuretano proyectada para mi techo",
                )}
                className="inline-flex w-full items-center justify-center rounded-sm border border-poly-orange px-6 py-3 text-xs font-bold uppercase tracking-wide text-poly-orange transition-colors hover:bg-poly-orange hover:text-white sm:w-auto"
              >
                COTIZAR POLIURETANO
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-poly-gray-50">
        <div className="page-container grid gap-8 md:grid-cols-2 md:items-stretch">
          <div className="order-2 flex flex-col justify-center space-y-4 md:order-1">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-poly-navy">
              Confort acústico y ecológico
            </span>
            <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
              Proyección de Celulosa (Termo-Acústica)
            </h2>
            <p className="text-sm text-poly-gray-500 sm:text-base">
              La alternativa sustentable, fabricada a partir de papel reciclado
              tratado con sales de boro. Ideal para insonorizar y regular la
              humedad en interiores.
            </p>
            <ul className="mt-2 space-y-2 text-sm text-poly-gray-500">
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  Absorción de ruidos de lluvia, granizo, tránsito y vida diaria.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  Regula la humedad ambiente, permitiendo que la construcción
                  &quot;respire&quot; de forma natural.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-poly-orange-light text-poly-orange">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span>
                  100% ignífugo y repelente de insectos y roedores gracias a sus
                  aditivos.
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href={whatsappLink(
                  "Hola, quiero cotizar celulosa proyectada para un interior",
                )}
                className="inline-flex w-full items-center justify-center rounded-sm border border-poly-navy px-6 py-3 text-xs font-bold uppercase tracking-wide text-poly-navy transition-colors hover:bg-poly-navy hover:text-white sm:w-auto"
              >
                COTIZAR CELULOSA
              </a>
            </div>
          </div>
          <div
            className="order-1 relative h-64 rounded-md bg-cover bg-center md:order-2 md:h-auto"
            style={{
              backgroundImage:
                "url('/images/servicios/poliuretano/bloque-celulosa-interior.jpeg')",
            }}
          >
            <div className="absolute inset-0 rounded-md bg-poly-navy/25" />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-container flex flex-col gap-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold sm:text-3xl text-poly-navy">
              El material correcto para cada necesidad
            </h2>
            <p className="text-sm text-poly-gray-500 sm:text-base">
              Cada obra presenta desafíos diferentes. Conocé en detalle las
              características y los usos recomendados para nuestros sistemas de
              aislación.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border-2 border-poly-gray-100 border-t-4 border-t-poly-orange bg-white p-6 text-sm text-poly-gray-500">
              <h3 className="text-lg font-semibold text-poly-navy">
                Espuma de Poliuretano
              </h3>
              <p className="mt-3">
                Máxima aislación térmica e impermeabilidad total gracias a su
                estructura de celda cerrada, rígida y estructural.
              </p>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-poly-orange">
                Usos recomendados
              </h4>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Techos de chapa (interior y exterior).</li>
                <li>Losas de hormigón exteriores.</li>
                <li>Naves industriales, galpones y bodegas.</li>
                <li>Instalaciones avícolas, porcinas y frigoríficos.</li>
                <li>Aislación de tanques y cañerías industriales.</li>
              </ul>
            </div>
            <div className="border-2 border-poly-gray-100 border-t-4 border-t-poly-navy bg-poly-gray-50 p-6 text-sm text-poly-gray-500">
              <h3 className="text-lg font-semibold text-poly-navy">
                Celulosa Acústica
              </h3>
              <p className="mt-3">
                Absorción acústica de alto rendimiento y regulación de humedad
                en un material fibroso, esponjoso y ecológico.
              </p>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-poly-navy">
                Usos recomendados
              </h4>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Cielorrasos de placa de yeso o machimbre.</li>
                <li>Tabiques divisorios interiores.</li>
                <li>Auditorios, estudios, restaurantes y oficinas.</li>
                <li>Viviendas en Steel Framing o Wood Framing.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="diferencial-espesor"
        className="relative section overflow-hidden bg-poly-navy"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/servicios/poliuretano/bloque-garantia-espesor.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-poly-navy/80" />
        <div className="page-container relative z-10 flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center text-white">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
            <ShieldCheck className="h-9 w-9 text-poly-orange" />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Garantía de Espesor Real
          </h2>
          <p className="max-w-3xl text-sm text-white/80 sm:text-base">
            En el mercado informal es común &quot;pintar&quot; el techo con poca
            espuma para abaratar costos. En Poly MEM garantizamos por contrato
            el espesor promedio pactado y utilizamos densidades óptimas para que
            el material no colapse ni se degrade con el tiempo.
          </p>
        </div>
      </section>

      <section className="section bg-poly-orange">
        <div className="page-container flex flex-col gap-6 text-center text-white sm:items-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            ¿Hablamos de tu próximo proyecto?
          </h2>
          <p className="text-sm text-white/90 sm:max-w-2xl sm:text-base">
            Envianos las medidas aproximadas de tu techo o solicitá una visita
            técnica en obra. Te respondemos con una propuesta clara y sin
            compromiso.
          </p>
          <a
            href={whatsappLink(
              "Hola vengo de la pagina de Poliuretano/Celulosa y quiero cotizar aislacion proyectada",
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
