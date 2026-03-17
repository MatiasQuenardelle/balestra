import Image from "next/image";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { FaGasPump, FaCog, FaTachometerAlt } from "react-icons/fa";

export default function VehiclesSection() {
  return (
    <section id="vehiculos" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Vehículos
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Explorá nuestro stock de vehículos usados, 0km Nissan y maquinaria
            vial. Todos con garantía y financiación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              href={`/vehiculos/${vehicle.id}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${
                      vehicle.category === "0km"
                        ? "bg-green-500"
                        : vehicle.category === "maquinaria"
                        ? "bg-amber-500"
                        : "bg-primary"
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

              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">{vehicle.name}</h3>
                <p className="text-accent font-bold text-xl mb-3">
                  {vehicle.price}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <FaTachometerAlt size={13} />
                    {vehicle.km}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaGasPump size={13} />
                    {vehicle.fuel}
                  </span>
                  <span className="flex items-center gap-1">
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
