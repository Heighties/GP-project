import React from 'react';

const RealCard = ({ realisation, openModal }) => {
  const firstImage = realisation.images && realisation.images.length > 0 ? realisation.images[0] : null;

  if (!firstImage) {
    return null; // Si aucune image n'est trouvée, ne rien rendre
  }

  return (
    <div className="realisation-card cursor-pointer w-40 h-32 md:w-32 md:h24 xl:w-64 xl:h-48 transition-transform duration-300 ease-in-out transform hover:scale-105" onClick={() => openModal(realisation)}>
      <img src={`${process.env.PUBLIC_URL}${firstImage.src}`} alt={realisation.title} className="w-full h-full object-cover rounded-32 border-4 border-white" />
    </div>
  );
};

export default RealCard;
