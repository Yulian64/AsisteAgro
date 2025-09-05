import { FaSeedling, FaBug} from "react-icons/fa"; // íconos desde react-icons/fa
import { MdOutlineContactSupport } from "react-icons/md";
import AnimateOnScroll from "../common/AnimateOnScroll";

export default function Services() {
  const services = [
    {
      icon: <FaSeedling className="w-10 h-10 text-white" />,
      title: "Cultivos",
      description: "Información detallada sobre diferentes tipos de cultivos y técnicas de siembra",
    },
    {
      icon: <FaBug className="w-10 h-10 text-white" />,
      title: "Enfermedades",
      description: "Identificación y tratamiento de plagas y enfermedades en cultivos",
    },
    {
      icon: <MdOutlineContactSupport className="w-10 h-10 text-white" />,
      title: "Consulta Técnica",
      description: "Asesoramiento profesional personalizado para tu proyecto agrícola",
    },
  ];

  return (
    <section className="py-16 bg-white mb-6">
      <div className="max-w-6xl mx-auto px-15 text-center">
        <h2 className="text-5xl md:text-5xl font-bold text-green-700 mb-6">Nuestros Servicios</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-15">
          Ofrecemos soluciones integrales para el sector agrícola con tecnología avanzada y experiencia profesional
        </p>
        <AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-md p-8 hover:shadow-xl transition border border-green-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-green-600 p-4 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
