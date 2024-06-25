import React from "react";

const MobileMenu = ({ scrollToSection, setMobileMenuOpen }) => {
  const handleSectionClick = (section) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-90 text-white flex flex-col items-center justify-center z-50">
      <button className="text-3xl my-4" onClick={() => handleSectionClick("aboutme")}>Infos</button>
      <button className="text-3xl my-4" onClick={() => handleSectionClick("skills")}>Compétences</button>
      <button className="text-3xl my-4" onClick={() => handleSectionClick("portfolio")}>Portfolio</button>
      <button className="text-3xl my-4" onClick={() => handleSectionClick("contact")}>Contact</button>
    </div>
  );
};

export default MobileMenu;
