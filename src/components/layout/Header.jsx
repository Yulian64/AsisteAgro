import { useState, useEffect } from "react";
import Navbar from "./NavBar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // La barra de navegación es sticky (se queda fija arriba)
    <header className={`
        text-white py-6 px-4 z-50 shadow-lg sticky top-0 
        transition-colors duration-300 ease-in-out animate-fade-in-down
        ${isScrolled ? 'bg-green-800/80 backdrop-blur-sm' : 'bg-green-800'}
      `}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src="/Imgs/logo.png" alt="AsisteAgro Logo" className="h-full w-full object-contain" />
          </div>
          <span className="text-2xl md:text-3xl font-bold">AsisteAgro</span>
        </div>
        
        {/* Componente de Navegación */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;