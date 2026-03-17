import Image from "next/image";
import { FaWhatsapp, FaCar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/gallery/tractores.png"
        alt="Balestra Automotores - Vehículos y Maquinaria en Tandil"
        fill
        className="object-cover scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary-dark/50 to-primary-dark/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/40 to-transparent" />

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <p className="animate-fade-up text-gold font-medium tracking-[0.25em] uppercase text-sm mb-6">
          Concesionaria en Tandil
        </p>
        <h1 className="animate-fade-up delay-100 font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
          Tu próximo vehículo
          <br />
          <span className="text-gradient-gold">está en Balestra</span>
        </h1>
        <p className="animate-fade-up delay-200 text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Vehículos usados garantizados, 0km Nissan, financiación y gestoría
          automotor. Todo en un solo lugar.
        </p>
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#vehiculos"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10"
          >
            <FaCar />
            Ver Vehículos
          </a>
          <a
            href="https://wa.me/5500000000000?text=Hola%2C%20quiero%20consultar%20por%20un%20veh%C3%ADculo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            <FaWhatsapp />
            Consultanos
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
