import { FaShieldAlt, FaHandshake, FaFileContract, FaTools } from "react-icons/fa";

const highlights = [
  {
    icon: FaShieldAlt,
    title: "Vehículos Garantizados",
    description:
      "Todos nuestros vehículos usados pasan por una inspección rigurosa. Comprá con confianza y tranquilidad.",
  },
  {
    icon: FaHandshake,
    title: "Financiación Accesible",
    description:
      "Te ofrecemos las mejores opciones de financiación para que puedas acceder al vehículo que necesitás.",
  },
  {
    icon: FaFileContract,
    title: "Gestoría Incluida",
    description:
      "Nos encargamos de todo el trámite. Transferencia, patentamiento y toda la documentación necesaria.",
  },
  {
    icon: FaTools,
    title: "Servicio Post-Venta",
    description:
      "Te acompañamos después de la compra. Asesoramiento técnico y seguimiento para tu tranquilidad.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 section-divider pt-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Una experiencia de compra transparente, segura y personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="card-premium p-8 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold/10 to-gold/5 text-gold rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
