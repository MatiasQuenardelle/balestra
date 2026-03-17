import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

export default function MapSection() {
  return (
    <section id="ubicacion" className="py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Visitanos en nuestro local en Tandil. Te esperamos para asesorarte
            personalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.8!2d-59.1493661!3d-37.3025575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9591218375102113%3A0xc3c857a806af1416!2sBalestra%20Automotores!5e0!3m2!1ses-419!2sar!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Balestra Automotores en Tandil"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Dirección</h3>
                  <p className="text-sm text-muted">
                    Tandil, Buenos Aires
                    <br />
                    Argentina
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-3">
                <FaClock className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Horarios</h3>
                  <p className="text-sm text-muted">
                    Lunes a Viernes: 9:00 - 18:00
                    <br />
                    Sábados: 9:00 - 13:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-3">
                <FaPhone className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Contacto</h3>
                  <p className="text-sm text-muted">
                    WhatsApp: Consultanos
                    <br />
                    Instagram: @balestra.automotores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
