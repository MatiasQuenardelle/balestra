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
    <section id="servicios" className="py-20 bg-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Todo lo que necesitás
              <br />
              <span className="text-accent-light">en un solo lugar</span>
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              En Balestra Automotores ofrecemos una solución integral: desde la
              elección de tu vehículo hasta la gestoría completa. Trabajamos con
              las mejores marcas y condiciones del mercado.
            </p>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.title} className="flex items-start gap-3">
                  <FaCheckCircle className="text-accent-light mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold">{service.title}</span>
                    <p className="text-sm text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/ford-ranger.png"
                alt="Ford Ranger en Balestra"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
              <Image
                src="/images/vehicles/gol-power-2013.png"
                alt="Volkswagen Gol en Balestra"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/images/gallery/tractores.png"
                alt="Maquinaria Taurus Vialen"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
              <Image
                src="/images/about/exterior-local.png"
                alt="Local Balestra Automotores"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
