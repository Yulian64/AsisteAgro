import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Efecto para cerrar el menú con la tecla 'Escape'
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const links = [
    { name: 'Inicio', to: '/', hash: '#inicio' },
    { name: 'Cultivos', to: '/', hash: '#cultivos' },
    { name: 'Enfermedades', to: '/', hash: '#enfermedades' },
    { name: 'Consulta Técnica', to: '/', hash: '#consulta' },
  ];

  return (
    <>
      {/* Links - Desktop */}
      <nav className="hidden md:block">
        <ul className="flex space-x-10 text-lg font-semibold">
          {links.map((link) => (
            <li key={link.name}>
              {/* 3. Usamos el componente Link con la propiedad 'state' */}
              <Link
                to={link.to}
                state={{ hash: link.hash }} // <--- ¡Esta es la magia!
                className="hover:text-green-200 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>


      {/* Hamburger - Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          {/* Icono animado */}
          <div className="w-6 h-6 relative">
            <span className={`block absolute left-0 right-0 h-[2px] bg-white transition-all duration-300 ${open ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`block absolute left-0 right-0 top-2 h-[2px] bg-white transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block absolute left-0 right-0 h-[2px] bg-white transition-all duration-300 ${open ? 'top-2 -rotate-45' : 'top-4'}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay*/}
      {open && (
        <div
          className="md:hidden fixed inset-0"
          onClick={() => setOpen(false)}
        >
          <nav className="min-h-screen flex flex-col bg-green-900 items-center justify-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                state={{ hash: link.hash }}
                onClick={() => setOpen(false)}
                className="text-white text-2xl font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;