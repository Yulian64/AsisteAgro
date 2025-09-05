
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Este componente envolverá cualquier sección que queramos animar
const AnimateOnScroll = ({ children, animationClass = 'animate-fade-in-up' }) => {
  const { ref, inView } = useInView({
    // `triggerOnce: true` asegura que la animación solo ocurra una vez
    triggerOnce: true,
    // `threshold: 0.1` significa que la animación se disparará 
    // cuando el 10% del elemento sea visible
    threshold: 0.1, 
  });

  return (
    // 'ref' es como una etiqueta que le ponemos al div para que 'useInView' pueda observarlo
    <div 
      ref={ref} 
      // Si el elemento no está a la vista ('inView' es false), es invisible.
      // Cuando entra en la vista ('inView' es true), le añadimos la clase de animación.
      className={inView ? animationClass : 'opacity-0'}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;