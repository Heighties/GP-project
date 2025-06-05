import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = ({ scrollToSection, currentSection }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-slate-800 text-white h-20 z-50">
      <Link to="/" className="logo h-16 w-16 flex items-center justify-center">
        <svg
          viewBox="0 0 111 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.3176 0.621951C27.1886 3.76429 10.5666 17.178 3.29762 36.1455C-0.161381 
                    45.1703 -1.01138 58.2643 1.28262 67.1776C7.21862 90.2393 24.6796 105.817 48.5556 
                    109.352C75.0436 113.275 102.553 94.9538 109.385 68.8384C111.33 61.4017 
                    111.35 48.5545 109.427 41.2035C102.443 14.5076 74.6586 -3.64649 47.3176 
                    0.621951ZM67.2716 8.22788C85.6046 12.9344 99.6276 27.2711 103.447 45.2131C104.236 
                    48.921 104.889 53.4094 104.899 55.1897L104.916 58.4256H93.9156H82.9156V61.4126V64.3997H93.3346H103.755L102.738 
                    68.1334C99.6416 79.505 88.9796 92.5433 78.7246 97.4977C62.8196 105.182 46.7576 105.018 31.6346 97.0178C21.2246 91.5108 
                    9.86162 76.9511 8.24862 67.0521L7.65362 63.404H18.2846H28.9156V60.417V57.43H17.9156H6.91562V52.6607C6.91562 41.323 12.7596 
                    28.7755 22.1646 19.9181C34.1746 8.60922 51.3826 4.14961 67.2716 8.22788ZM39.9156 54.7974V92.2784H43.4156H46.9156V58.808V25.3365L56.6856 25.7278C64.6256 26.0454 67.1366 26.5383 70.0966 28.3594C78.6776 33.6394 77.5356 44.6535 67.8636 49.8947C65.1426 51.3693 62.9156 52.7941 62.9156 53.061C62.9156 53.3278 63.6166 54.896 64.4726 56.5448L66.0306 59.5438L70.7226 56.8614C80.7236 51.1453 83.4486 46.5234 82.7216 36.5129C82.1756 29.0036 78.6896 24.2751 71.1696 20.848C66.5376 18.7362 63.7516 18.2792 52.8126 17.8381L39.9156 17.3174V54.7974Z"
            fill="white"
          />
        </svg>
      </Link>
      <ul className="flex space-x-4 gap-40">
        <li
          className={`${
            currentSection === "aboutme" ? "font-bold" : ""
          } cursor-pointer`}
          onClick={() => scrollToSection("aboutme")}
        >
          À propos de moi
        </li>
        <li
          className={`${
            currentSection === "skills" ? "font-bold" : ""
          } cursor-pointer`}
          onClick={() => scrollToSection("skills")}
        >
          Compétences
        </li>
        <li
          className={`${
            currentSection === "portfolio" ? "font-bold" : ""
          } cursor-pointer`}
          onClick={() => scrollToSection("portfolio")}
        >
          Portfolio
        </li>
        <li
          className={`${
            currentSection === "contact" ? "font-bold" : ""
          } cursor-pointer`}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
      <div className="relative">
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-slate-800 border rounded shadow-lg z-10">
            <button
              className="block px-4 py-2 text-white hover:bg-slate-900"
              onClick={() => {
                toggleDropdown();
                alert("Switched to French");
              }}
            >
              Fr
            </button>
            <button
              className="block px-4 py-2 text-white hover:bg-slate-900"
              onClick={() => {
                toggleDropdown();
                alert("Switched to English");
              }}
            >
              En
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
