import Image from "next/image";
import { FaWhatsapp, FaCar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      <Image
        src="/images/hero/ford-ranger.png"
        alt="Balestra Automotores - Vehículos en Tandil"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/60 to-primary-dark/90" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Tu próximo vehículo
          <br />
          <span className="text-accent-light">está en Balestra</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Concesionaria en Tandil. Vehículos usados garantizados, 0km Nissan,
          financiación y gestoría automotor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#vehiculos"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-light transition-colors"
          >
            <FaCar />
            Ver Vehículos
          </a>
          <a
            href="https://wa.me/5500000000000?text=Hola%2C%20quiero%20consultar%20por%20un%20veh%C3%ADculo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp />
            Consultanos
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
