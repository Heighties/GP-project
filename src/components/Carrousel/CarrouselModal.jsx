import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CarrouselModal = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full flex-row">
      {images.length > 1 && (
        <button 
          onClick={handlePrevClick} 
          className="left-4 text-white text-4xl p-2"
          style={{ zIndex: 10 }}
        >
          <IoIosArrowBack />
        </button>
      )}
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div key={currentIndex} className="realisation-card cursor-pointer w-full h-full">
          <p className="text-white text-center mt-2">{images[currentIndex].title}</p>
          <img src={process.env.PUBLIC_URL + images[currentIndex].src} alt={images[currentIndex].title} className="w-full h-full object-contain" />
        </div>
      </div>
      {images.length > 1 && (
        <button 
          onClick={handleNextClick} 
          className="right-4 text-white text-4xl p-2"
          style={{ zIndex: 10 }}
        >
          <IoIosArrowForward />
        </button>
      )}
    </div>
  );
};

export default CarrouselModal;
