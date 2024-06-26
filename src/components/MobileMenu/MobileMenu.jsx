import React, { useEffect, useState } from "react";

const MobileMenu = ({ scrollToSection, setMobileMenuOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true); 

  useEffect(() => {
    if (isAnimating) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isAnimating]);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const handleSectionClick = (section) => {
    setIsAnimating(false);
    setTimeout(() => {
      scrollToSection(section);
      setMobileMenuOpen(false);
    }, 500);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-95 text-white flex flex-col gap-8 items-center justify-center z-20 ${
        isVisible ? "mobile-menu-enter" : "mobile-menu-exit"
      }`}
      onAnimationEnd={() => {
        if (!isVisible) {
          setMobileMenuOpen(false);
        }
      }}
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
