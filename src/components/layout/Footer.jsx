import {Link} from 'react-router-dom'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';


const Footer = () => {
  const brandGreen = 'bg-green-900';
  const textPrimary = 'text-white';
  const textSecondary = 'text-green-200';

  return (
    <footer className={`${brandGreen} ${textPrimary}`}>
      <div className="container mx-auto px-6 py-12">
        {/* Contenedor principal con Grid para las columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Columna 1: Logo y Descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/Imgs/logo.png" alt="AsisteAgro Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold">AsisteAgro</span>
            </div>
            <p className={`${textSecondary} font-bold max-w-sm`}>
              Asistencia básica para el agricultor colombiano.
            </p>
          </div>

          {/* Columna 2: Servicios */}
           <div className="space-y-4">
            <h3 className="text-xl font-bold">Servicios</h3>
            <ul className={`space-y-3 ${textSecondary}`}>
              <li>
                <Link to="/" state={{ hash: '#cultivos' }} className="hover:text-white transition-colors">
                  Cultivos
                </Link>
              </li>
              <li>
                <Link to="/" state={{ hash: '#enfermedades' }} className="hover:text-white transition-colors">
                  Enfermedades
                </Link>
              </li>
              <li>
                <Link to="/" state={{ hash: '#consulta' }} className="hover:text-white transition-colors">
                  Consulta Técnica
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contacto</h3>
            <ul className={`space-y-3 ${textSecondary}`}>
              
              {/* --- CAMBIO: Usamos los componentes de react-icons --- */}
              {/* Se pueden estilizar directamente con clases de Tailwind como cualquier otro elemento. */}
              <li className="flex items-center">
                <HiPhone className="w-5 h-5 mr-2 text-yellow-500" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <HiMail className="w-5 h-5 mr-2 text-yellow-500" />
                <a href="mailto:info@asisteagro.com" className="hover:text-white transition-colors">info@asisteagro.com</a>
              </li>
              <li className="flex items-center">
                <HiLocationMarker className="w-5 h-5 mr-2 text-yellow-500" />
                <span>Tecnoparque, Nodo Bogotá</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Línea divisoria y Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className={`${textSecondary} text-sm`}>
            © {new Date().getFullYear()} AsisteAgro. Todos los derechos reservados.
          </p>
          <p className={`${textSecondary} text-sm mt-1`}>
            Desarrollado por Yulian Tovar - Tecnoparque
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;