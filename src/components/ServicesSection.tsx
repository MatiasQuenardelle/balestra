import Image from "next/image";
import {
  FaCar,
  FaMoneyBillWave,
  FaFileAlt,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    icon: FaCar,
    title: "Vehículos Usados",
    description: "Autos, camionetas y utilitarios seleccionados y revisados.",
  },
  {
    icon: FaCar,
    title: "0km Nissan",
    description: "Concesionario oficial con toda la línea Nissan disponible.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Financiación",
    description: "Planes de financiación a medida con las mejores tasas.",
  },
  {
    icon: FaFileAlt,
    title: "Gestoría",
    description: "Transferencias, patentamientos y trámites automotor.",
  },
  {
    icon: FaTruck,
    title: "Maquinaria Vial",
    description: "Línea Taurus Vialen: palas, retroexcavadoras y más.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-28 bg-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Nuestros Servicios
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Todo lo que necesitás
              <br />
              <span className="text-gradient-gold">en un solo lugar</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              Ofrecemos una solución integral: desde la elección de tu vehículo
              hasta la gestoría completa. Trabajamos con las mejores marcas y
              condiciones del mercado.
            </p>
            <ul className="space-y-5">
              {services.map((service) => (
                <li key={service.title} className="flex items-start gap-4">
                  <FaCheckCircle className="text-gold mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold text-white/95">{service.title}</span>
                    <p className="text-sm text-gray-400 mt-0.5">
                      {service.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="/images/vehicles/chevrolet-cruze-ltz.png"
                alt="Chevrolet Cruze LTZ en Balestra"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden mt-10 ring-1 ring-white/10">
              <Image
                src="/images/vehicles/vw-saveiro-roja.png"
                alt="Volkswagen Saveiro en Balestra"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="/images/gallery/tractores.png"
                alt="Maquinaria Taurus Vialen"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden mt-10 ring-1 ring-white/10">
              <Image
                src="/images/vehicles/ford-ranger-gris.png"
                alt="Ford Ranger en Balestra"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
