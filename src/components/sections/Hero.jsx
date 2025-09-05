
const Hero = () => {
  return (
    // La sección principal que ocupa el resto de la pantalla
    <section 
      id="inicio"
      // NOTA: he quitado `flex-grow` y `min-h-screen` de aquí, porque la página principal controlará el layout
      className="relative h-[calc(100vh-88px)] bg-[url('/Imgs/Agricultura.jpg')] bg-cover bg-center flex items-center justify-center text-center"
    >
      {/* Degradado suave encima de la imagen */}
      <div className="absolute inset-0 bg-green-900/60" />

      <div className="relative z-10 text-white p-4 max-w-4xl overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-300">
          TODO LO QUE<br /> NECESITAS
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up delay-500">
          SABER SOBRE TU CULTIVO
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight animate-fade-in-up delay-700">
          LO ENCUENTRAS AQUÍ
        </h3>
        <div className="flex justify-center animate-fade-in-up delay-900">
          <a href="#cultivos" className="bg-yellow-500/70 hover:bg-yellow-500/90 text-white font-bold py-3 px-6 rounded-full text-xl shadow-xl hover:shadow-2xl mb-3 cursor-pointer ">
            Explorar Cultivos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;