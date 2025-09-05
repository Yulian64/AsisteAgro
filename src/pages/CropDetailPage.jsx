import React, { useEffect } from 'react';
// 1. Importa los hooks y los datos necesarios
import { useParams, Link } from 'react-router-dom';
import { getCropBySlug } from '../data/cropsData'; // Nuestra función de ayuda

const CropDetailPage = () => {
  // 2. Obtiene el parámetro 'slug' de la URL actual
  const { slug } = useParams();

  // 3. Busca el cultivo correspondiente en nuestros datos
  const crop = getCropBySlug(slug);

  // 4. Efecto para hacer scroll al principio de la página cada vez que cambia el cultivo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 5. Maneja el caso en que el cultivo no se encuentra
  if (!crop) {
    return (
      <div className="container mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-red-600">Cultivo no encontrado</h1>
        <p className="mt-4 text-gray-700">Lo sentimos, no pudimos encontrar información para el cultivo "{slug}".</p>
        <Link to="/" className="mt-8 inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition">
          Volver a la página de inicio
        </Link>
      </div>
    );
  }

  // 6. Si el cultivo se encuentra, renderiza toda su información
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-6">
        <article className="max-w-4xl mx-auto">
          
          {/* --- ENCABEZADO DEL ARTÍCULO --- */}
          <header className="mb-12 text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-extrabold text-green-800">{crop.name}</h1>
            <p className="text-xl text-gray-500 mt-2 italic">{crop.scientificName}</p>
          </header>
          
          <img src={crop.image} alt={crop.name} className="w-full rounded-xl shadow-lg mb-15 animate-fade-in-up" />
          <p className="text-lg text-gray-700 leading-relaxed mb-12 animate-fade-in-up">{crop.description}</p>

          {/* --- SECCIÓN: VARIEDADES DEL CULTIVO (SOLO ALGUNOS) --- */}
          {crop.varieties && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-6">{crop.varieties.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{crop.varieties.introduction}</p>
              <img src={crop.varieties.image} className="w-xs rounded-xl shadow-lg my-8" />
            </section>
          )}
          
          {/* --- SECCIÓN: CONDICIONES IDEALES --- */}
          {crop.growingConditions && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-6">{crop.growingConditions.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{crop.growingConditions.introduction}</p>
              <div className="space-y-6">
                {crop.growingConditions.conditions.map(condition => (
                  <div key={condition.subtitle}>
                    <h3 className="text-xl font-semibold text-green-700">{condition.subtitle}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{condition.text}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* --- SECCIÓN: ETAPAS DEL CULTIVO --- */}
          {crop.cultivationSteps && (
             <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-6">{crop.cultivationSteps.title}</h2>
              <img src={crop.cultivationSteps.image} alt="Etapas del cultivo" className="w-full rounded-xl shadow-lg my-8" />
              <p className="text-gray-700 leading-relaxed mb-6">{crop.cultivationSteps.introduction}</p>
              <div className="space-y-6">
                {crop.cultivationSteps.steps.map(step => (
                  <div key={step.subtitle}>
                    <h3 className="text-xl font-semibold text-green-700">{step.subtitle}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{step.text}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* --- SECCIÓN: COMO CULTIVAR (ARROZ) --- */}
            {crop.howtoCultivate && (
                <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-6">{crop.howtoCultivate.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{crop.howtoCultivate.introduction}</p>
                <div className="space-y-6">
                    {crop.howtoCultivate.methods.map(methods => (
                    <div key={methods.subtitle}>
                        <h3 className="text-xl font-semibold text-green-700">{methods.subtitle}</h3>
                        <p className="text-gray-700 leading-relaxed mt-2">{methods.text}</p>
                    </div>
                    ))}
                    <p className="text-gray-700 leading-relaxed mb-6">{crop.howtoCultivate.finalConsiderations}</p>
                </div>
                </section>
            )}

          {/* --- SECCIÓN: RECOMENDACIONES TÉCNICAS --- */}
          {crop.technicalRecommendations && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-6">{crop.technicalRecommendations.title}</h2>
              <div className="space-y-6">
                {crop.technicalRecommendations.recommendations.map(rec => (
                  <div key={rec.subtitle}>
                    <h3 className="text-xl font-semibold text-green-700">{rec.subtitle}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{rec.text}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* --- SECCIÓN: POSCOSECHA --- */}
          {crop.postHarvest && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-6">{crop.postHarvest.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{crop.postHarvest.introduction}</p>
              <img src={crop.postHarvest.image} className="w-full rounded-xl shadow-lg my-8" />
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {crop.postHarvest.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </section>
          )}

          {/* --- SECCIÓN: PROCEDIMIENTOS POSCOSECHA (ARROZ) --- */}
          {crop.postHarvestProcedures && (
            <section>
              <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-6">{crop.postHarvestProcedures.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{crop.postHarvestProcedures.introduction}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {crop.postHarvestProcedures.procedures.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mt-6">{crop.postHarvestProcedures.finalConsiderations}</p>
              <img src={crop.postHarvestProcedures.image} alt="Procedimiento de poscosecha" className="w-full rounded-xl shadow-lg my-8" />
            </section>
          )}
        </article>
      </div>
    </div>
  );
};

export default CropDetailPage;