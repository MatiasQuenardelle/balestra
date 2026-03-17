export interface Vehicle {
  id: string;
  name: string;
  year: number;
  price: string;
  km: string;
  fuel: string;
  transmission: string;
  image: string;
  images: string[];
  description: string;
  features: string[];
  category: "usado" | "0km" | "maquinaria";
}

export const vehicles: Vehicle[] = [
  {
    id: "ford-ranger-xlt",
    name: "Ford Ranger XLT 3.2 4x4",
    year: 2019,
    price: "Consultar",
    km: "85.000 km",
    fuel: "Diésel",
    transmission: "Automática",
    image: "/images/hero/ford-ranger.png",
    images: ["/images/hero/ford-ranger.png"],
    description:
      "Ford Ranger XLT 3.2 Diésel 4x4 en excelente estado. Vehículo con todos los services al día, cubiertas nuevas y accesorios premium. Ideal para trabajo y aventura.",
    features: [
      "Motor 3.2 TDCi 200 CV",
      "Tracción 4x4",
      "Caja automática",
      "Aire acondicionado",
      "Dirección asistida",
      "Airbags frontales",
      "Control de estabilidad",
      "Cámara de retroceso",
    ],
    category: "usado",
  },
  {
    id: "vw-gol-power",
    name: "Volkswagen Gol Power 1.4",
    year: 2013,
    price: "Consultar",
    km: "120.000 km",
    fuel: "Nafta",
    transmission: "Manual",
    image: "/images/vehicles/gol-power-2013.png",
    images: ["/images/vehicles/gol-power-2013.png"],
    description:
      "Volkswagen Gol Power 1.4 con bajo consumo y excelente mecánica. Auto ideal para ciudad, económico y confiable. Service al día y papeles en regla.",
    features: [
      "Motor 1.4 Power",
      "Dirección asistida",
      "Aire acondicionado",
      "Cierre centralizado",
      "Alzacristales eléctricos",
      "Radio con Bluetooth",
      "Bajo consumo",
      "Cubiertas en buen estado",
    ],
    category: "usado",
  },
  {
    id: "nissan-kicks-0km",
    name: "Nissan Kicks Sense CVT",
    year: 2025,
    price: "Consultar",
    km: "0 km",
    fuel: "Nafta",
    transmission: "CVT",
    image: "/images/hero/ford-ranger.png",
    images: ["/images/hero/ford-ranger.png"],
    description:
      "Nissan Kicks 0km con garantía de fábrica. SUV compacto con diseño moderno, tecnología de punta y la mejor relación precio-calidad del segmento. Disponible con financiación.",
    features: [
      "Motor 1.6 16V",
      "Transmisión CVT",
      "Pantalla multimedia",
      "Cámara 360°",
      "Control de crucero",
      "Sensores de estacionamiento",
      "Garantía de fábrica",
      "Financiación disponible",
    ],
    category: "0km",
  },
  {
    id: "nissan-frontier-0km",
    name: "Nissan Frontier SE 4x4",
    year: 2025,
    price: "Consultar",
    km: "0 km",
    fuel: "Diésel",
    transmission: "Automática",
    image: "/images/hero/ford-ranger.png",
    images: ["/images/hero/ford-ranger.png"],
    description:
      "Nissan Frontier 0km, la pickup que combina potencia, confort y tecnología. Ideal para trabajo pesado y uso familiar. Disponible con financiación a tasa preferencial.",
    features: [
      "Motor 2.3 Biturbo Diésel",
      "Tracción 4x4",
      "Caja automática 7 marchas",
      "Pantalla táctil 8\"",
      "Apple CarPlay / Android Auto",
      "Control de tracción",
      "6 Airbags",
      "Garantía de fábrica",
    ],
    category: "0km",
  },
  {
    id: "taurus-vialen-pala",
    name: "Taurus Vialen - Pala Cargadora",
    year: 2025,
    price: "Consultar",
    km: "0 hs",
    fuel: "Diésel",
    transmission: "Hidráulica",
    image: "/images/gallery/tractores.png",
    images: ["/images/gallery/tractores.png"],
    description:
      "Maquinaria vial Taurus Vialen. Equipos nuevos con garantía y financiación. Amplio stock disponible para entrega inmediata. Servicio técnico post-venta.",
    features: [
      "Motor diésel de alta potencia",
      "Sistema hidráulico reforzado",
      "Cabina con aire acondicionado",
      "Garantía de fábrica",
      "Servicio técnico especializado",
      "Repuestos originales",
      "Financiación disponible",
      "Entrega inmediata",
    ],
    category: "maquinaria",
  },
];
