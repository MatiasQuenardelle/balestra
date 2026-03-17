"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/#vehiculos", label: "Vehículos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#opiniones", label: "Opiniones" },
  { href: "/#ubicacion", label: "Ubicación" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.webp"
            alt="Balestra Automotores"
            width={44}
            height={44}
            className="rounded-full"
          />
          <div className="hidden sm:block">
            <span className={`text-lg font-bold tracking-wide ${scrolled ? "text-primary" : "text-white"}`}>
              BALESTRA
            </span>
            <span className={`text-lg font-bold ml-1.5 ${scrolled ? "text-accent" : "text-gold-light"}`}>
              AUTOMOTORES
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-gray-600 hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            WhatsApp
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-gray-700" : "text-white"}`}
          aria-label="Menú"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-100">
          <nav className="flex flex-col px-6 py-5 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-3 border-b border-gray-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors text-center mt-4"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
