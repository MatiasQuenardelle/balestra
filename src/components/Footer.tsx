import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.webp"
                alt="Balestra Automotores"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <span className="text-lg font-bold">BALESTRA</span>
                <span className="text-lg font-bold text-accent-light ml-1">AUTOMOTORES</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Concesionaria en Tandil con años de trayectoria. Vehículos garantizados, 0km Nissan,
              financiación y gestoría automotor.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/#vehiculos" className="hover:text-white transition-colors">Vehículos</a></li>
              <li><a href="/#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="/#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="/#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent-light shrink-0" />
                Tandil, Buenos Aires, Argentina
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-accent-light shrink-0" />
                Consultanos por WhatsApp
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/balestra.automotores/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Balestra Automotores. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
