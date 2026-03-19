import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/datos/site";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const { footer } = siteData;

  const phone1Href = `tel:${footer.phoneNumber.replace(/\s/g, "")}`;
  const phone2Href = `tel:${footer.phone2Number.replace(/\s/g, "")}`;
  const whatsapp1Href = `https://wa.me/${footer.whatsappNumber.replace(/\D/g, "")}`;
  const whatsapp2Href = `https://wa.me/${footer.whatsapp2Number.replace(/\D/g, "")}`;

  const SocialIcon = ({ label }: { label: string }) => {
    const key = label.toLowerCase();

    if (key.includes("facebook")) {
      return <Facebook className="h-5 w-5" aria-hidden="true" />;
    }

    if (key.includes("instagram")) {
      return <Instagram className="h-5 w-5" aria-hidden="true" />;
    }

    return (
      <span className="text-xs font-bold uppercase tracking-wide">
        {label.slice(0, 2)}
      </span>
    );
  };

  return (
    <>
      <footer className="bg-poly-navy text-gray-300 border-t-4 border-poly-orange">
        <div className="page-container px-6 py-12">
          <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-3">
            {/* Columna 1: Marca + redes */}
            <div>
              <div className="mb-4 flex items-center">
                <Image
                  src="/images/brand/imagotipo_monocroma.svg"
                  alt={footer.brand}
                  width={200}
                  height={70}
                  className="h-24 w-auto invert"
                  priority
                />
              </div>
              <p className="mb-6 max-w-xs text-sm">{footer.tagline}</p>
              <div className="flex gap-4">
                {footer.social.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="cursor-pointer rounded-sm bg-white/10 p-2 text-white transition-colors hover:bg-poly-orange"
                  >
                    <SocialIcon label={item.label} />
                  </a>
                ))}
              </div>
            </div>

            {/* Columna 2: Servicios */}
            <div>
              <h5 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                {footer.servicesTitle}
              </h5>
              <ul className="space-y-2">
                {footer.services.map((item) => (
                  <li
                    key={item.label}
                    className="cursor-pointer transition-colors hover:text-poly-orange"
                  >
                    <Link href={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Contacto */}
            <div>
              <h5 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                {footer.contactTitle}
              </h5>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-poly-orange mt-0.5 shrink-0" />
                  <a
                    href={footer.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {footer.address}
                  </a>
                </li>

                {/* Pablo — teléfono */}
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-poly-orange shrink-0" />
                  <span className="text-gray-400 text-xs">Pablo:</span>
                  <a
                    href={phone1Href}
                    className="transition-colors hover:text-white"
                  >
                    {footer.phoneNumber}
                  </a>
                </li>

                {/* Cristian — teléfono */}
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-poly-orange shrink-0" />
                  <span className="text-gray-400 text-xs">Cristian:</span>
                  <a
                    href={phone2Href}
                    className="transition-colors hover:text-white"
                  >
                    {footer.phone2Number}
                  </a>
                </li>

                {/* WhatsApp Pablo */}
                <li className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-poly-orange shrink-0" />
                  <span className="text-gray-400 text-xs">WA Pablo:</span>
                  <a
                    href={whatsapp1Href}
                    className="transition-colors hover:text-white"
                  >
                    {footer.whatsappNumber}
                  </a>
                </li>

                {/* WhatsApp Cristian */}
                <li className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-poly-orange shrink-0" />
                  <span className="text-gray-400 text-xs">WA Cristian:</span>
                  <a
                    href={whatsapp2Href}
                    className="transition-colors hover:text-white"
                  >
                    {footer.whatsapp2Number}
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-poly-orange shrink-0" />
                  <a
                    href={`mailto:${footer.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {footer.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs opacity-50">
            {footer.legalNote}
          </div>
          <div className="mt-2 text-center text-xs">
            <p className="text-gray-500">
              Diseño y desarrollo web por{' '}
              <a
                href="https://genmarketing.com.ar"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                <span style={{ fontWeight: 600 }}>›gen</span>marketing
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
