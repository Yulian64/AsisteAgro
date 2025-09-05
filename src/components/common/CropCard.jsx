
const CropCard = ({ name, imageSrc, slug }) => {
  // El slug se usará en el futuro para la URL, ej: /cultivos/aguacate
  const futureHref = `/cultivos/${slug}`;

  return (
    // Usamos 'group' para controlar efectos hover en los hijos
    <a 
      href={futureHref} 
      className="relative block rounded-xl overflow-hidden shadow-md group transform hover:scale-105 transition-all duration-300"
    >
      {/* Imagen de fondo */}
      <img src={imageSrc} alt={name} className="w-full h-60 object-cover" />
      
      {/* Superposición oscura para contraste */}
      <div className="absolute inset-0 bg-black/50 transition-all duration-300 group-hover:bg-black/30" />

      {/* Texto centrado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-2xl font-light uppercase tracking-wider text-shadow">
          {name}
        </h3>
      </div>
    </a>
  );
};

export default CropCard;