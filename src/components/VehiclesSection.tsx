import Image from "next/image";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { FaGasPump, FaCog, FaTachometerAlt } from "react-icons/fa";

export default function VehiclesSection() {
  return (
    <section id="vehiculos" className="py-24 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 section-divider pt-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Vehículos
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Explorá nuestro stock de vehículos usados, 0km Nissan y maquinaria
            vial. Todos con garantía y financiación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              href={`/vehiculos/${vehicle.id}`}
              className="group card-premium overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full text-white backdrop-blur-sm ${
                      vehicle.category === "0km"
                        ? "bg-green-500/90"
                        : vehicle.category === "maquinaria"
                        ? "bg-amber-500/90"
                        : "bg-primary/90"
                    }`}
                  >
                    {vehicle.category === "0km"
                      ? "0 KM"
                      : vehicle.category === "maquinaria"
                      ? "Maquinaria"
                      : "Usado"}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {vehicle.name}
                </h3>
                <p className="text-gold font-bold text-xl mb-4">
                  {vehicle.price}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1.5">
                    <FaTachometerAlt size={13} />
                    {vehicle.km}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaGasPump size={13} />
                    {vehicle.fuel}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaCog size={13} />
                    {vehicle.transmission}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
