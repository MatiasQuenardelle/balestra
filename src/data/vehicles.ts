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
    id: "ford-ranger-cs",
    name: "Ford Ranger Cabina Simple 2.2",
    year: 2018,
    price: "Consultar",
    km: "95.000 km",
    fuel: "Diésel",
    transmission: "Manual",
    image: "/images/vehicles/ford-ranger-gris.png",
    images: ["/images/vehicles/ford-ranger-gris.png"],
    description:
      "Ford Ranger Cabina Simple 2.2 Diésel en excelente estado. Ideal para trabajo, con caja de carga amplia. Services al día y cubiertas en buen estado.",
    features: [
      "Motor 2.2 TDCi 150 CV",
      "Cabina simple",
      "Caja de carga amplia",
      "Aire acondicionado",
      "Dirección asistida",
      "Airbags frontales",
      "Control de estabilidad",
      "Excelente mecánica",
    ],
    category: "usado",
  },
  {
    id: "chevrolet-cruze-ltz",
    name: "Chevrolet Cruze LTZ 2.0 VCDI",
    year: 2013,
    price: "Consultar",
    km: "98.000 km",
    fuel: "Diésel",
    transmission: "Automática",
    image: "/images/vehicles/chevrolet-cruze-ltz.png",
    images: ["/images/vehicles/chevrolet-cruze-ltz.png"],
    description:
      "Chevrolet Cruze LTZ 2.0 Turbo Diésel 163cv automático. Excelente sedan con equipamiento completo, cuero, clima automático y bajo consumo.",
    features: [
      "Motor 2.0 VCDI Turbo 163 CV",
      "Caja automática",
      "Tapizado de cuero",
      "Climatizador automático",
      "Control de crucero",
      "Sensores de estacionamiento",
      "Alzacristales eléctricos x4",
      "Computadora de a bordo",
    ],
    category: "usado",
  },
  {
    id: "toyota-hilux",
    name: "Toyota Hilux SR 4x4",
    year: 2017,
    price: "Consultar",
    km: "110.000 km",
    fuel: "Diésel",
    transmission: "Manual",
    image: "/images/vehicles/toyota-hilux-blanca.png",
    images: ["/images/vehicles/toyota-hilux-blanca.png"],
    description:
      "Toyota Hilux SR 4x4 en excelente estado. La pickup más confiable del mercado, con mecánica impecable y lista para trabajo pesado.",
    features: [
      "Motor 2.8 Turbo Diésel",
      "Tracción 4x4",
      "Aire acondicionado",
      "Dirección asistida",
      "Airbags frontales",
      "Control de tracción",
      "Cámara de retroceso",
      "Cubiertas en buen estado",
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
    id: "vw-saveiro",
    name: "Volkswagen Saveiro 1.6",
    year: 2014,
    price: "Consultar",
    km: "90.000 km",
    fuel: "Nafta",
    transmission: "Manual",
    image: "/images/vehicles/vw-saveiro-roja.png",
    images: ["/images/vehicles/vw-saveiro-roja.png"],
    description:
      "Volkswagen Saveiro 1.6 en excelente estado. Pickup compacta ideal para trabajo y uso diario. Motor confiable y bajo costo de mantenimiento.",
    features: [
      "Motor 1.6 101 CV",
      "Caja de carga",
      "Dirección asistida",
      "Aire acondicionado",
      "Cierre centralizado",
      "Alzacristales eléctricos",
      "Radio con USB",
      "Bajo consumo",
    ],
    category: "usado",
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
