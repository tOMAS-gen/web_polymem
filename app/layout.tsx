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
    icon: [{ url: "/images/brand/isologo_icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/images/brand/isologo_icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/images/brand/isologo_icon.svg", type: "image/svg+xml" }],
  },
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
    <html lang="en">
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
