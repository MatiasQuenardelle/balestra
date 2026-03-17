import Image from "next/image";

const stats = [
  { value: "500+", label: "Vehículos vendidos" },
  { value: "10+", label: "Años de trayectoria" },
  { value: "100%", label: "Garantía" },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[28rem] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/about/exterior-local.png"
                alt="Local de Balestra Automotores en Tandil"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-3 hidden md:block ring-1 ring-black/5">
              <div className="relative h-36 w-52 rounded-xl overflow-hidden">
                <Image
                  src="/images/about/familia-feliz.png"
                  alt="Familia feliz con su nuevo auto en Balestra Automotores"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl p-3 hidden md:block ring-1 ring-black/5">
              <div className="relative h-28 w-40 rounded-xl overflow-hidden">
                <Image
                  src="/images/about/cliente-feliz-2.png"
                  alt="Cliente feliz en Balestra Automotores"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Nuestra Historia
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Sobre Balestra Automotores
            </h2>
            <p className="text-muted leading-relaxed mb-4 text-lg">
              Somos una concesionaria ubicada en la ciudad de Tandil, provincia
              de Buenos Aires. Con años de trayectoria en el mercado automotor,
              nos especializamos en la compra y venta de vehículos usados
              garantizados y 0km de la marca Nissan.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              Además, ofrecemos servicios de gestoría automotor, financiación
              personalizada y comercialización de maquinaria vial de la línea
              Taurus Vialen. Nuestro compromiso es brindar calidad de
              asesoramiento y transparencia en cada operación.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-surface">
                  <p className="text-3xl font-bold text-gradient-gold">{stat.value}</p>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
