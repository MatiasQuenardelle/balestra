import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.webp"
                alt="Balestra Automotores"
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <span className="text-lg font-bold tracking-wide">BALESTRA</span>
                <span className="text-lg font-bold text-gold-light ml-1.5">AUTOMOTORES</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Concesionaria en Tandil con años de trayectoria. Vehículos garantizados, 0km Nissan,
              financiación y gestoría automotor.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gold mb-5">
              Enlaces
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="/#vehiculos" className="hover:text-white transition-colors">
                  Vehículos
                </a>
              </li>
              <li>
                <a href="/#servicios" className="hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#nosotros" className="hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gold mb-5">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-gold shrink-0" size={14} />
                Tandil, Buenos Aires, Argentina
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-gold shrink-0" size={14} />
                Consultanos por WhatsApp
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/balestra.automotores/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-xl hover:bg-gold/20 hover:text-gold transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-xl hover:bg-gold/20 hover:text-gold transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-14 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Balestra Automotores. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
