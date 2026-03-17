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
    <section className="py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            En Balestra Automotores te brindamos una experiencia de compra
            transparente, segura y personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-xl mb-4">
                <item.icon size={26} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
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
