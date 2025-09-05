

// 1. Importa los hooks de React
import React, { useState } from 'react';
import AnimateOnScroll from "../common/AnimateOnScroll";

// Datos para el dropdown
const cropsData = [
  'Aguacate', 'Arroz', 'Café', 'Caña de Azúcar', 'Cebolla', 'Maíz', 'Papa', 'Plátano', 'Tomate'
];

const TechnicalConsultation = () => {
  // 2. Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cropType: '',
    consultation: '',
  });

  // 3. Estado para manejar el mensaje de éxito/error
  const [formStatus, setFormStatus] = useState('');

  // 4. Función para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 5. Función para enviar los datos a Netlify
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending'); // Opcional: para mostrar un estado de "enviando"

    const encodedData = new URLSearchParams({
      'form-name': 'consulta-tecnica',
      ...formData,
    }).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData,
    })
      .then(() => {
        setFormStatus('success');
      })
      .catch((error) => {
        setFormStatus('error');
        console.error("Error al enviar el formulario:", error);
      });
  };

  return (
    <section id="consulta" className="bg-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Encabezado de la sección (sin cambios) */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700 inline-block pb-2">
            Consulta un técnico
          </h2>
          <p className="text-lg text-gray-700 mt-4">¿Necesitas ayuda con tu cultivo?</p>
          <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
            En esta sección puedes dejar tus datos y tu consulta para recibir orientación técnica sobre el manejo de tus cultivos.
          </p>
        </div>

        {/* Contenedor del formulario */}
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border-2 border-green-700 mb-6">
            
            {/* 6. Lógica condicional para mostrar el mensaje de éxito o el formulario */}
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-green-800">¡Gracias por tu consulta!</h3>
                <p className="text-gray-700 mt-2">Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form 
                name="consulta-tecnica" 
                onSubmit={handleSubmit} 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Campos ocultos requeridos por Netlify */}
                <input type="hidden" name="form-name" value="consulta-tecnica" />
                <input type="hidden" name="bot-field" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {/* Campo Nombre */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-green-100 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                    />
                  </div>

                  {/* Campo Teléfono */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-green-100 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                    />
                  </div>

                  {/* Campo Tipo de Cultivo */}
                  <div className="md:col-span-2">
                    <label htmlFor="cropType" className="block text-sm font-semibold text-gray-700 mb-2">Tipo de cultivo</label>
                    <select 
                      id="cropType" 
                      name="cropType"
                      value={formData.cropType}
                      onChange={handleChange}
                      required
                      className="w-full bg-green-100 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                    >
                      <option value="">Select...</option>
                      {cropsData.map(crop => (
                        <option key={crop} value={crop}>{crop}</option>
                      ))}
                    </select>
                  </div>

                  {/* Campo Consulta */}
                  <div className="md:col-span-2">
                    <label htmlFor="consultation" className="block text-sm font-semibold text-gray-700 mb-2">Consulta</label>
                    <textarea 
                      id="consultation" 
                      name="consultation"
                      rows="5"
                      placeholder="Descripción del problema"
                      value={formData.consultation}
                      onChange={handleChange}
                      required
                      className="w-full bg-green-100 border-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                    />
                  </div>

                  {/* Botón de Enviar */}
                  <div className="md:col-span-2 text-center">
                    <button 
                      type="submit"
                      disabled={formStatus === 'sending'} // Deshabilita el botón mientras se envía
                      className="w-full bg-transparent border-2 border-green-700 text-green-800 font-bold py-3 px-6 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'sending' ? 'Enviando...' : 'Enviar'}
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* Mensaje de error si el envío falla */}
            {formStatus === 'error' && (
              <p className="mt-4 text-center text-red-600 font-semibold">
                Hubo un error al enviar tu consulta. Por favor, inténtalo de nuevo más tarde.
              </p>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TechnicalConsultation;