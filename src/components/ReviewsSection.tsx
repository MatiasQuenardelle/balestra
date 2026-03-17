import { FaStar, FaGoogle, FaQuoteLeft } from "react-icons/fa";
import { reviews } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <section id="opiniones" className="py-24 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 section-divider pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaGoogle className="text-blue-500" size={24} />
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-primary">
              Opiniones de Clientes
            </h2>
          </div>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            La confianza de nuestros clientes es nuestro mayor orgullo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="card-premium p-7 relative"
            >
              <FaQuoteLeft className="absolute top-5 right-5 text-gold/10" size={32} />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    size={14}
                    className={
                      i < review.rating ? "text-gold" : "text-gray-200"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
