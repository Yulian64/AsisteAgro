import React from 'react';
// 1. Importa el componente Outlet de react-router-dom
import { Outlet } from 'react-router-dom';

// 2. Importa tu Header y Footer
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        {/* 3. El componente Outlet actúa como un placeholder. */}
        {/* React Router renderizará aquí el componente de la página que coincida con la URL */}
        {/* (por ejemplo, HomePage, CropDetailPage, etc.) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;