import AnimateOnScroll from './AnimateOnScroll';
import React from 'react';

const InfoCard = ({ name, scientificName, image, description, symptoms, prevention, imagePosition = 'right' }) => {
  const textContent = (
    
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-green-800">{name}</h3>
      {scientificName && <p className="text-md text-green-700 italic mb-4">{scientificName}</p>}
      
      <p className="text-justify text-gray-700 mb-2"><strong>Descripción:</strong> {description}</p>
      {symptoms && <p className="text-gray-700 mb-2"><strong>Síntomas:</strong> {symptoms}</p>}
      <p className="text-justify text-gray-700"><strong>Prevención:</strong> {prevention}</p>
    </div>
  );

  const imageContent = (
    <div className="flex-shrink-0 w-full md:w-1/3">
      <img src={image} alt={name} className="rounded-xl shadow-md w-75 h-50 object-cover" />
    </div>
  );

  // La magia del layout alternado
  return (
    <AnimateOnScroll>
      <div className={`bg-gray-100/50 p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-8 ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''}`}>
        {textContent}
        {imageContent}
      </div>
    </AnimateOnScroll>
  );
};

export default InfoCard;