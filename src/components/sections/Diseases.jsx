
import { HiArrowRight } from 'react-icons/hi';
import AnimateOnScroll from '../common/AnimateOnScroll';

// Usaremos las mismas imágenes de cultivos como miniaturas
const diseasesData = [
  { cropName: 'Aguacate', slug: 'aguacate', imageSrc: '/Imgs/diseases/diseases-home/aguacate.jpg' },
  { cropName: 'Arroz', slug: 'arroz', imageSrc: '/Imgs/diseases/diseases-home/arroz.jpg' },
  { cropName: 'Café', slug: 'cafe', imageSrc: '/Imgs/diseases/diseases-home/cafe.jpg' },
  { cropName: 'Caña de Azúcar', slug: 'cana-de-azucar', imageSrc: '/Imgs/diseases/diseases-home/cana-azucar.jpg' },
  { cropName: 'Cebolla', slug: 'cebolla', imageSrc: '/Imgs/diseases/diseases-home/cebolla.jpg' },
  { cropName: 'Maíz', slug: 'maiz', imageSrc: '/Imgs/diseases/diseases-home/maiz.jpg' },
  { cropName: 'Papa', slug: 'papa', imageSrc: '/Imgs/diseases/diseases-home/papa.png' },
  { cropName: 'Plátano', slug: 'platano', imageSrc: '/Imgs/diseases/diseases-home/platano.webp' },
  { cropName: 'Tomate', slug: 'tomate', imageSrc: '/Imgs/diseases/diseases-home/tomate.jpg' },
];

const Diseases = () => {
  return (
    <section id="enfermedades" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-700">Plagas y Enfermedades</h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Selecciona un cultivo para identificar las plagas y enfermedades más comunes que pueden afectarlo y aprende cómo tratarlas eficazmente.
          </p>
        </div>

        {/* Contenedor de la lista de tarjetas */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {diseasesData.map((disease) => (
            <AnimateOnScroll>
              <a 
                key={disease.slug}
                href={`/enfermedades/${disease.slug}`}
                // La tarjeta principal
                className="bg-white rounded-lg shadow-md p-4 flex items-center group transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                {/* Contenedor de la imagen */}
                <div className="flex-shrink-0">
                  <img 
                    src={disease.imageSrc} 
                    alt={disease.cropName} 
                    className="w-20 h-20 rounded-md object-cover"
                  />
                </div>
                
                {/* Contenedor del texto */}
                <div className="ml-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{disease.cropName}</h3>
                  <p className="text-green-700 font-semibold text-sm mt-1 flex items-center">
                    Ver principales enfermedades
                    {/* La flecha aparece al hacer hover */}
                    <HiArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diseases;