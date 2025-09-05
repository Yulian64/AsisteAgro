
import CropCard from '../common/CropCard';
import AnimateOnScroll from '../common/AnimateOnScroll';

// Separamos los datos para mantener el componente limpio
const cropsData = [
  { name: 'Aguacate', slug: 'aguacate', imageSrc: '/Imgs/crops/crops-home/aguacate.jpg' },
  { name: 'Arroz', slug: 'arroz', imageSrc: '/Imgs/crops/crops-home/arroz.jpeg' },
  { name: 'Café', slug: 'cafe', imageSrc: '/Imgs/crops/crops-home/cafe.jpg' },
  { name: 'Caña de Azúcar', slug: 'cana-de-azucar', imageSrc: '/Imgs/crops/crops-home/cana-azucar.jpg' },
  { name: 'Cebolla', slug: 'cebolla', imageSrc: '/Imgs/crops/crops-home/cebolla.jpg' },
  { name: 'Maíz', slug: 'maiz', imageSrc: '/Imgs/crops/crops-home/maiz.webp' },
  { name: 'Papa', slug: 'papa', imageSrc: '/Imgs/crops/crops-home/papa.jpg' },
  { name: 'Plátano', slug: 'platano', imageSrc: '/Imgs/crops/crops-home/platano.jpg' },
  { name: 'Tomate', slug: 'tomate', imageSrc: '/Imgs/crops/crops-home/tomate.jpg' },
];

const Crops = () => {
  return (
    <section id="cultivos" className="bg-green-50 py-20">
      <div className="container mx-auto px-6">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">Cultivos</h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            A continuación encontrarás una lista de cultivos comunes en Colombia. Selecciona el que te interese para ver información técnica como tipo de suelo ideal, clima recomendado, riego y fertilización básica.
          </p>
        </div>

        {/* Galería de Cultivos */}
        <animateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cropsData.map((crop) => (
              <CropCard 
                key={crop.slug}
                name={crop.name}
                slug={crop.slug}
                imageSrc={crop.imageSrc}
              />
            ))}
          </div>
        </animateOnScroll>
      </div>
    </section>
  );
};

export default Crops;