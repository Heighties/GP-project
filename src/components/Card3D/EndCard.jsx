import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EndCard = () => {
  const cardRef = useRef(null);
  const x = useMotionValue(200);
  const y = useMotionValue(105);
  const rotateY = useTransform(x, [0, 400], [10, -10]);
  const rotateX = useTransform(y, [0, 210], [-10, 10]);
  const navigate = useNavigate();

  const handleHoverStart = (e) => {
    if (!cardRef.current) return;
    const cardRect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - cardRect.left;
    const mouseY = e.clientY - cardRect.top;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleHoverEnd = () => {
    if (!cardRef.current) return;
    const cardRect = cardRef.current.getBoundingClientRect();
    x.set(cardRect.width / 2);
    y.set(cardRect.height / 2);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <motion.div
      className="relative realisation-card mt-6 xl:mt-0 w-64 h-36 xl:w-96 xl:h-48 flex flex-col items-center justify-center border-2 border-slate-600 hover:border-slate-400 rounded-2xl"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/technology.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        rotateY: rotateY,
        rotateX: rotateX,
      }}
      onMouseMove={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      ref={cardRef}
    >
      <div className="absolute inset-0 bg-slate-900 bg-opacity-70 rounded-32"></div>

      <h1 className="text-white text-sm xl:text-lg font-bold z-10 text-center xl:ml-8 xl:mr-8">
        Merci pour votre visite
        <br />
        et à bientôt pour de futurs projets !
      </h1>
      <button
        className="bg-slate-700 text-white border-2 border-white font-bold px-2 xl:px-4 mt-8 rounded-full z-10"
        onClick={handleClick}
      >
        Retour
      </button>
    </motion.div>
  );
};

export default EndCard;
