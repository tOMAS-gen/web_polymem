"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Menu } from "lucide-react";
import { siteData } from "@/datos/site";

export default function Header() {
  const { header, navigation, topBar } = siteData;
  const navItems = navigation.filter((item) => !item.highlighted);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLabel = (path: string, fallback: string) => {
    if (path === "/") return "INICIO";
    if (path === "/poliuretano-y-celulosa-proyectada")
      return "POLIURETANO/CELULOSA";
    if (path === "/impermeabilizacion-y-membranas") return "MEMBRANAS";
    if (path === "/venta-materiales-aislacion") return "MATERIALES";
    if (path === "/trabajos-realizados") return "OBRAS";
    if (path === "/contacto-presupuesto") return "CONTACTO";
    return fallback;
  };

  return (
    <header className="sticky top-0 z-50 text-poly-navy">
      <div className="bg-poly-navy text-white text-[11px] sm:text-xs">
        <div className="page-container flex items-center justify-between gap-4 px-4 py-2">
          <div className="flex items-center gap-2">
            <MapPin size={12} />
            <span className="uppercase tracking-wide">
              {topBar.location || "Servicio en Cuyo"}
            </span>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <span>{topBar.hours}</span>
            <span className="font-bold text-poly-orange">
              {topBar.phoneLabel}: {topBar.phoneNumber}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`border-b border-gray-200 bg-white ${
          scrolled ? "shadow-hard" : ""
        }`}
      >
        <div className="page-container flex items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/brand/name.svg"
              alt={header.brand}
              width={160}
              height={56}
              className="h-8 w-auto sm:h-10"
              priority
            />
          </Link>
          <nav className="hidden flex-1 items-center justify-end gap-6 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  pathname === item.path
                    ? "text-poly-orange"
                    : "text-poly-navy hover:text-poly-orange"
                }`}
              >
                {navLabel(item.path, item.label)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={header.ctaPath}
              className="hidden rounded-sm bg-poly-orange px-6 py-2 text-xs font-bold uppercase text-white shadow-[0_8px_20px_rgba(255,90,31,0.3)] transition-all hover:-translate-y-1 hover:bg-poly-orange-hover hover:shadow-[0_8px_25px_rgba(255,90,31,0.4)] sm:inline-flex"
            >
              {header.ctaLabel.toUpperCase()}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex items-center justify-center rounded-sm border border-poly-navy bg-white/80 p-2 text-poly-navy shadow-[0_4px_12px_rgba(15,44,76,0.25)] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_6px_18px_rgba(15,44,76,0.35)] active:translate-y-0 active:shadow-[0_3px_10px_rgba(15,44,76,0.3)] sm:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-black/50 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              key="panel"
              className="fixed right-0 top-0 z-50 h-full w-full bg-white sm:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                <div className="flex items-center">
                  <Image
                    src="/images/brand/name.svg"
                    alt={header.brand}
                    width={140}
                    height={49}
                    className="h-7 w-auto"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-sm border border-poly-navy px-3 py-2 text-xs font-bold uppercase text-poly-navy shadow-[0_4px_12px_rgba(15,44,76,0.25)] transition-all hover:-translate-y-0.5 hover:bg-poly-navy hover:text-white hover:shadow-[0_6px_18px_rgba(15,44,76,0.35)] active:translate-y-0 active:shadow-[0_3px_10px_rgba(15,44,76,0.3)]"
                >
                  Cerrar
                </button>
              </div>
              <nav
                id="mobile-navigation"
                className="flex flex-col border-b border-gray-200"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`border-b border-gray-100 px-4 py-4 text-base font-bold uppercase ${
                      pathname === item.path
                        ? "text-poly-orange"
                        : "text-poly-navy"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {navLabel(item.path, item.label)}
                  </Link>
                ))}
              </nav>
              <div className="px-4 py-4">
                <Link
                  href={header.ctaPath}
                  className="flex w-full items-center justify-center rounded-sm bg-poly-orange px-4 py-3 text-xs font-bold uppercase text-white shadow-[0_8px_20px_rgba(255,90,31,0.3)] transition-all hover:-translate-y-1 hover:bg-poly-orange-hover hover:shadow-[0_8px_25px_rgba(255,90,31,0.4)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {header.ctaLabel.toUpperCase()}
                </Link>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
