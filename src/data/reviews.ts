export interface Review {
  name: string;
  initials: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    name: "Martín Rodríguez",
    initials: "MR",
    rating: 5,
    text: "Excelente atención y seriedad. Compré mi camioneta y todo fue transparente desde el primer momento. Los recomiendo al 100%.",
    date: "Hace 2 semanas",
  },
  {
    name: "Carolina Pérez",
    initials: "CP",
    rating: 5,
    text: "Muy buena experiencia. Me ayudaron con toda la gestoría y la financiación. El auto estaba impecable, tal cual las fotos.",
    date: "Hace 1 mes",
  },
  {
    name: "Diego Fernández",
    initials: "DF",
    rating: 5,
    text: "Gente de confianza, compré un Gol y no tuve ningún problema. Muy profesionales y atentos. Volvería a comprar sin dudarlo.",
    date: "Hace 2 meses",
  },
  {
    name: "Laura Gómez",
    initials: "LG",
    rating: 4,
    text: "Buena atención, me asesoraron bien para elegir el vehículo que necesitaba. La financiación fue accesible. Muy recomendable.",
    date: "Hace 3 meses",
  },
  {
    name: "Roberto Silva",
    initials: "RS",
    rating: 5,
    text: "Compré maquinaria vial a través de Balestra y quedé muy conforme. Seriedad y cumplimiento en los plazos de entrega.",
    date: "Hace 4 meses",
  },
  {
    name: "Valentina Torres",
    initials: "VT",
    rating: 5,
    text: "Mi primera compra de un 0km Nissan y la experiencia fue increíble. Todo el equipo de Balestra me acompañó en cada paso.",
    date: "Hace 5 meses",
  },
];
