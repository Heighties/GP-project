import React from "react";
import { motion } from "framer-motion";

const AboutMe = ({ scrollToSection }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: -18 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative md:p-8 xl:p-8 text-white rounded-lg w-full h-screen flex justify-center items-center bg-fixed bg-cover bg-parallax">
      <div className="absolute inset-0 bg-slate-900 bg-opacity-90"></div>
      <div className="flex flex-col sm:flex-col md:flex-row xl:flex-row  xl:justify-center items-center gap-4 xl:gap-72 xl:w-5/6 z-1 relative">
        <motion.img
          src={process.env.PUBLIC_URL + "/profilepic2.png"}
          alt="Profile picture"
          className="w-32 h-32 md:w-1/5 md:h-1/5 xl:w-1/5 xl:h-1/5 rounded-full xl:rounded-32 border-4 border-white"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        />
        <motion.div
          className="flex flex-col gap-2 items-center md:w-3/4 xl:w-3/4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="text-center mb-6">
            <h1 className="font-bold text-white text-2xl xl:text-4xl mb-3">
              À propos de moi
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="flex items-center xl:space-x-4 mb-4">
            <ul className="flex xl:gap-28 space-x-2">
              <li className="bg-slate-800 border-2 border-slate-600 hover:border-slate-400 px-5 py-1 xl:px-10 xl:py-2 rounded-2xl">
                Curieux
              </li>
              <li className="bg-slate-800 border-2 border-slate-600 hover:border-slate-400 px-5 py-1 xl:px-10 xl:py-2 rounded-2xl">
                Créatif
              </li>
              <li className="bg-slate-800 border-2 border-slate-600 hover:border-slate-400 px-5 py-1 xl:px-10 xl:py-2 rounded-2xl">
                Autonome
              </li>
            </ul>
          </div>
          <p className="pl-6 pr-6 xl:pl-0 xl:pr-0 w-full text-sm xl:text-lg">
            Développeur web basé en Nouvelle-Aquitaine, je me suis reconverti
            avec la volonté d’allier curiosité, créativité et rigueur technique.
            Mon parcours, nourri par l’autonomie et la diversité des projets,
            m’a permis de développer une vision complète du développement web,
            de la maquette à la mise en production, en passant par
            l’optimisation SEO. Dans un environnement en constante évolution,
            marqué notamment par l’essor de l’IA, le rôle du développeur
            s’enrichit. Il ne s’agit plus seulement de coder, mais aussi de
            comprendre les enjeux métiers, d’optimiser les processus, de
            collaborer efficacement et de faire les bons choix technologiques
            pour répondre aux besoins réels. M’inscrivant pleinement dans cette
            évolution, et soucieux de la qualité comme de l’impact de mon
            travail, je suis à la recherche d’opportunités pour collaborer sur
            des projets ambitieux.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-5 xl:mt-10 bg-slate-700 border-2 border-slate-400 px-10 py-2 rounded-full"
          >
            Me contacter
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
