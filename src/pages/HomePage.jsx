import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Crops from '../components/sections/Crops';
import Diseases from '../components/sections/Diseases';
import TechnicalConsultation from '../components/sections/TechnicalConsultation';

import AnimateOnScroll from '../components/common/AnimateOnScroll';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica si hay un hash en el estado de la ubicación
    if (location.state?.hash) {
      // Extrae el ID del hash (sin el '#')
      const elementId = location.state.hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
      <>
        <Hero />
        <AnimateOnScroll>
          <Services />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Crops />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Diseases />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <TechnicalConsultation />
        </AnimateOnScroll>
      </>
  );
};

export default HomePage;