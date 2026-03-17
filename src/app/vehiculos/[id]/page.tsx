import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import {
  FaWhatsapp,
  FaArrowLeft,
  FaGasPump,
  FaCog,
  FaTachometerAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import type { Metadata } from "next";

export function generateStaticParams() {
  return vehicles.map((v) => ({ id: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const vehicle = vehicles.find((v) => v.id === id);
  if (!vehicle) return { title: "Vehículo no encontrado" };

  return {
    title: `${vehicle.name} ${vehicle.year} | Balestra Automotores`,
    description: vehicle.description,
    openGraph: {
      title: `${vehicle.name} ${vehicle.year} | Balestra Automotores`,
      description: vehicle.description,
      images: [vehicle.image],
    },
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en el ${vehicle.name} ${vehicle.year}. ¿Podrían darme más información?`
  );

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <Link
          href="/#vehiculos"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors mb-6"
        >
          <FaArrowLeft size={14} />
          Volver a vehículos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`text-sm font-semibold px-4 py-1.5 rounded-full text-white ${
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

            {vehicle.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {vehicle.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative h-24 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${vehicle.name} - Foto ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div>
              <h1 className="text-3xl font-bold mb-2">{vehicle.name}</h1>
              <p className="text-accent text-2xl font-bold mb-6">
                {vehicle.price}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg text-sm">
                  <FaCalendarAlt className="text-primary" />
                  <span>Año {vehicle.year}</span>
                </div>
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg text-sm">
                  <FaTachometerAlt className="text-primary" />
                  <span>{vehicle.km}</span>
                </div>
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg text-sm">
                  <FaGasPump className="text-primary" />
                  <span>{vehicle.fuel}</span>
                </div>
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg text-sm">
                  <FaCog className="text-primary" />
                  <span>{vehicle.transmission}</span>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-3">Descripción</h2>
              <p className="text-muted leading-relaxed mb-8">
                {vehicle.description}
              </p>

              <h2 className="text-xl font-semibold mb-3">Características</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicle.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 shrink-0" />
                    <span className="text-sm text-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <h3 className="text-lg font-bold">¿Te interesa este vehículo?</h3>
              <p className="text-sm text-muted">
                Contactanos por WhatsApp y te damos toda la información que
                necesitás. Consulta sin compromiso.
              </p>
              <a
                href={`https://wa.me/5500000000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp size={20} />
                Consultar por WhatsApp
              </a>
              <a
                href="tel:+5500000000000"
                className="flex items-center justify-center w-full border border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Llamanos
              </a>
              <div className="border-t pt-4 mt-4">
                <p className="text-xs text-muted text-center">
                  Financiación disponible. Aceptamos tu usado como parte de
                  pago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
