
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCropBySlug } from '../data/cropsData';
import InfoCard from '../components/common/InfoCard'; // Importamos la nueva tarjeta
import AnimateOnScroll from '../components/common/AnimateOnScroll';

const DiseaseDetailPage = () => {
  const { slug } = useParams();
  const crop = getCropBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Manejo de caso si el cultivo o la info de enfermedades no existen
  if (!crop || !crop.diseasesInfo) {
    return (
      <div className="container mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-red-600">Información no disponible</h1>
        <p className="mt-4 text-gray-700">Lo sentimos, no hay información de enfermedades para "{slug}".</p>
        <Link to="/" className="mt-8 inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  const { diseasesInfo } = crop;

  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-6">
        <article className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <img src={diseasesInfo.heroImage} alt={`Enfermedades del ${crop.name}`} className="w-full h-100 object-cover rounded-xl shadow-lg mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed mb-16">{diseasesInfo.introduction}</p>
          </AnimateOnScroll>

          {/* Sección de Enfermedades Comunes */}
          <AnimateOnScroll>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-8">Enfermedades más comunes</h2>
              <div className="space-y-8">
                {diseasesInfo.commonDiseases.map(disease => (
                  <InfoCard key={disease.name} {...disease} imagePosition="right" />
                ))}
              </div>
            </section>
          </AnimateOnScroll>

          {/* Sección de Plagas Comunes */}
          <AnimateOnScroll>
            <section>
              <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-8">Plagas más comunes</h2>
              <div className="space-y-8">
                {diseasesInfo.commonPests.map(pest => (
                  <InfoCard key={pest.name} {...pest} imagePosition="left" />
                ))}
              </div>
            </section>
          </AnimateOnScroll>

        </article>
      </div>
    </div>
  );
};

export default DiseaseDetailPage;