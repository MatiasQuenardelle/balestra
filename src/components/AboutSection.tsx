import Image from "next/image";

const stats = [
  { value: "500+", label: "Vehículos vendidos" },
  { value: "10+", label: "Años de trayectoria" },
  { value: "100%", label: "Garantía" },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/exterior-local.png"
                alt="Local de Balestra Automotores en Tandil"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 hidden md:block">
              <div className="relative h-32 w-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/about/cliente-feliz.png"
                  alt="Cliente feliz de Balestra Automotores"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sobre Balestra Automotores
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Somos una concesionaria ubicada en la ciudad de Tandil, provincia de Buenos Aires.
              Con años de trayectoria en el mercado automotor, nos especializamos en la compra y venta
              de vehículos usados garantizados y 0km de la marca Nissan.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Además, ofrecemos servicios de gestoría automotor, financiación personalizada y
              comercialización de maquinaria vial de la línea Taurus Vialen. Nuestro compromiso
              es brindar calidad de asesoramiento y transparencia en cada operación.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-accent">{stat.value}</p>
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
