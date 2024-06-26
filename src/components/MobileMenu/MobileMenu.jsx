import React, { useState, useEffect } from "react";

const MobileMenu = ({ scrollToSection, setMobileMenuOpen }) => {
  const [animationState, setAnimationState] = useState('entering');

  useEffect(() => {
    if (animationState === 'exiting') {
      const timer = setTimeout(() => {
        setMobileMenuOpen(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationState, setMobileMenuOpen]);

  const handleSectionClick = (section) => {
    setAnimationState('exiting');
    setTimeout(() => {
      scrollToSection(section);
    }, 500);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-95 text-white flex flex-col gap-8 items-center justify-center z-20 ${
        animationState === 'entering' ? 'mobile-menu-enter' : 'mobile-menu-exit'
      }`}
    >
      <button className="text-3xl my-4" onClick={() => handleSectionClick("aboutme")}>
        Infos
      </button>
      <button className="text-3xl my-4" onClick={() => handleSectionClick("skills")}>
        Compétences
      </button>
      <button className="text-3xl my-4" onClick={() => handleSectionClick("portfolio")}>
        Portfolio
      </button>
      <button className="text-3xl my-4" onClick={() => handleSectionClick("contact")}>
        Contact
      </button>
    </div>
  );
};

export default MobileMenu;