import React, { useRef, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import AboutMe from "../../../sections/AboutMe/AboutMe";
import Skills from "../../../sections/Skills/Skills";
import Portfolio from "../../../sections/Portfolio/Portfolio";
import Contact from "../../../sections/Contact/Contact";
import MobileMenu from "../../MobileMenu/MobileMenu";

const MainModal = () => {
  const [currentSection, setCurrentSection] = useState("aboutme");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const modalRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  const scrollToSection = (section) => {
    const sectionMap = {
      aboutme: aboutMeRef,
      skills: skillsRef,
      portfolio: portfolioRef,
      contact: contactRef,
    };
    const targetRef = sectionMap[section];
    if (targetRef?.current && modalRef.current) {
      const topOffset = targetRef.current.offsetTop;
      modalRef.current.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const sectionMap = {
      aboutme: aboutMeRef,
      skills: skillsRef,
      portfolio: portfolioRef,
      contact: contactRef,
    };

    const observerOptions = {
      root: modalRef.current,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newSection = entry.target.getAttribute("data-section");
          if (newSection !== currentSection) {
            setCurrentSection(newSection);
            window.history.replaceState(null, null, `/#${newSection}`);
          }
        }
      });
    }, observerOptions);

    Object.entries(sectionMap).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", key);
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionMap).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [currentSection]);

  useEffect(() => {
    const section = location.hash.replace("#", "");
    if (section) {
      scrollToSection(section);
    }
  }, [location]);

  return (
    <div
      className="bg-slate-900 h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar items-center justify-center"
      ref={modalRef}
    >
      <div className="sticky top-0 z-10 hidden xl:block w-full">
        <NavBar
          scrollToSection={scrollToSection}
          currentSection={currentSection}
        />
      </div>

      <div
        className="min-h-screen xl:h-screen flex items-center justify-center snap-start"
        ref={aboutMeRef}
      >
        <AboutMe scrollToSection={scrollToSection} />
      </div>
      <div
        className="min-h-screen xl:h-screen flex items-center justify-center snap-start"
        ref={skillsRef}
      >
        <Skills />
      </div>
      <div
        className="min-h-screen xl:h-screen flex items-center justify-center snap-start"
        ref={portfolioRef}
      >
        <Portfolio />
      </div>
      <div
        className="min-h-screen xl:h-screen flex items-center justify-center snap-start bottom-0"
        ref={contactRef}
      >
        <Contact />
      </div>

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 w-full justify-between items-center p-4 show-on-mobile hide-on-desktop xl:hidden z-30">
        <Link
          to="/"
          className="logo h-12 w-12 flex items-center justify-center"
        >
          {/* logo SVG */}
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        >
          <div className="bar1 z-50"></div>
          <div className="bar2 z-50"></div>
          <div className="bar3 z-50"></div>
        </button>
      </div>

      {isMobileMenuOpen && (
        <MobileMenu
          scrollToSection={scrollToSection}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
    </div>
  );
};

export default MainModal;
