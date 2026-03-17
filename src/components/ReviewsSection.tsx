import { FaStar, FaGoogle } from "react-icons/fa";
import { reviews } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <section id="opiniones" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaGoogle className="text-blue-500" size={24} />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Opiniones de Clientes
            </h2>
          </div>
          <p className="text-muted max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor orgullo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    size={14}
                    className={
                      i < review.rating ? "text-amber-400" : "text-gray-200"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
