import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import RealCard from '../RealCard/RealCard';
import RealisationModal from '../Modals/RealisationModal/RealisationModal';

export const Carrousel = ({ items = [] }) => { // Provide a default value for items
  const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
  const [scrollRightVisible, setScrollRightVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRealisation, setSelectedRealisation] = useState(null);
  const containerRef = useRef(null);

  // Determine items per slide based on screen size
  const getItemsPerSlide = () => {
    if (window.innerWidth < 768) {
      return 6;
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1280) {
      return 8;
    }
    return 12; 
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide);

  const handleResize = () => {
    setItemsPerSlide(getItemsPerSlide());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      setScrollLeftVisible(container.scrollLeft > 0);
      setScrollRightVisible(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: -container.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: container.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const openModal = (realisation) => {
    setSelectedRealisation(realisation);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRealisation(null);
    setModalOpen(false);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  // Sort items by id in descending order
  const sortedItems = [...items].sort((a, b) => b.id - a.id);

  // Split items into slides based on itemsPerSlide
  const slides = [];
  for (let i = 0; i < sortedItems.length; i += itemsPerSlide) {
    slides.push(sortedItems.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="relative w-full h-full flex items-center border-black pt-10">
      {scrollLeftVisible && (
        <button
          className="absolute top-[55%] xl:top-1/2 left-0 transform -translate-y-1/2 ml-4 z-20 rounded-lg bg-white bg-opacity-50"
          onClick={scrollLeft}
        >
          <IoIosArrowBack size={32} />
        </button>
      )}
      {scrollRightVisible && (
        <button
          className="absolute top-[55%] xl:top-1/2 right-0 transform -translate-y-1/2 mr-4 z-20 rounded-lg bg-white bg-opacity-50"
          onClick={scrollRight}
        >
          <IoIosArrowForward size={32} />
        </button>
      )}
      <div
        ref={containerRef}
        className="flex overflow-x-auto hide-scrollbar"
        onScroll={handleScroll}
      >
        <div className="flex flex-nowrap p-4 gap-20">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="flex-none grid gap-2
                grid-cols-2 sm:grid-cols-2 md:grid-cols-4
                grid-rows-2 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-3 gap-y-12 gap-x-6"
            >
              {slide.map((item, index) => (
                
                <RealCard  key={index} realisation={item} openModal={openModal} />
            
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center'>
      <RealisationModal isOpen={modalOpen} closeModal={closeModal} realisation={selectedRealisation} />
      </div>
    </div>
  );
};

export default Carrousel;
