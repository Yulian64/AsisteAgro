
// Importa los componentes necesarios de react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';

import HomePage from './pages/HomePage';
import CropDetailPage from './pages/CropDetailPage';
import DiseaseDetailPage from './pages/DiseaseDetailPage';

function App() {
  return (
    // 3. Envuelve toda tu aplicación en el componente Router
    <Router>
      <Routes>
        {/* 1. Crea una ruta "padre" que renderice el MainLayout */}
        <Route path="/" element={<MainLayout />}>
          
          {/* La ruta "index" es la que se renderiza por defecto cuando la URL
              coincide con la del padre (en este caso, "/"). */}
          <Route index element={<HomePage />} />
          
          {/* Las demás rutas anidadas heredan el layout */}
          <Route path="cultivos/:slug" element={<CropDetailPage />} />
          <Route path="enfermedades/:slug" element={<DiseaseDetailPage />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;