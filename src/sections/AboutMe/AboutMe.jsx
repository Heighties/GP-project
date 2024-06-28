import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = ({ scrollToSection }) => {
    const fadeInUp = {
        hidden: { opacity: 0, y: -18 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <div className="relative md:p-8 xl:p-8 text-white rounded-lg w-full h-screen flex justify-center items-center bg-fixed bg-cover bg-parallax">
            <div className="absolute inset-0 bg-slate-900 bg-opacity-90"></div>
            <div className='flex flex-col sm:flex-col md:flex-row xl:flex-row  xl:justify-center items-center gap-4 xl:gap-72 xl:w-5/6 z-1 relative'>
                <motion.img
                    src={process.env.PUBLIC_URL + "/profilepic2.png"}
                    alt="Profile picture"
                    className="w-32 h-32 md:w-1/5 md:h-1/5 xl:w-1/5 xl:h-1/5 rounded-full xl:rounded-32 border-4 border-white"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                />
                <motion.div
                    className='flex flex-col gap-2 items-center md:w-3/4 xl:w-3/4'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <h1 className="font-bold text-white text-2xl md:text-4xl xl:text-4xl mb-6 xl:mb-16">À propos de moi</h1>
                    <div className="flex items-center xl:space-x-4 mb-4">
                        <ul className="flex xl:gap-28 space-x-2">
                            <li className="bg-slate-800 border-2 border-white px-5 py-1 xl:px-10 xl:py-2 rounded-2xl">Curieux</li>
                            <li className="bg-slate-800 border-2 border-white px-5 py-1 xl:px-10 xl:py-2 rounded-2xl">Créatif</li>
                            <li className="bg-slate-800 border-2 border-white px-5 py-1 xl:px-10 xl:py-2 rounded-2xl">Autonome</li>
                        </ul>
                    </div>
                    <p className='pl-6 pr-6 xl:pl-0 xl:pr-0 w-full text-sm xl:text-lg'>
                        Développeur web indépendant basé en Nouvelle Aquitaine, ma reconversion professionnelle m'a permis de marier ma curiosité et mon envie de créer par le biais de mes compétences techniques. Fort de diverses expériences, j'ai su m'adapter et évoluer pour concevoir des projets de A à Z. De la conception de maquettes, au développement frontend et backend, ainsi qu'à la création d'API, j'aborde chaque projet avec passion et méthode. Aussi, mon intérêt pour le SEO (référencement naturel) me permet d'optimiser la visibilité et l'efficacité des sites que je développe. Curieux de nature, j'apprends en continu pour proposer des solutions innovantes et sur-mesure.
                    </p>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="mt-5 xl:mt-10 bg-slate-700 border-2 border-white px-10 py-2 rounded-full"
                    >
                        Me contacter
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMe;
