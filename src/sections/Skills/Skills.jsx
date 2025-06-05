import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiMongodb,
  SiFramer,
  SiStrapi,
} from "react-icons/si";
import { DiSass } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";

const Skills = () => {
  const frontendSkills = [
    { icon: FaHtml5, name: "HTML", color: "text-orange-500" },
    { icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
    { icon: DiSass, name: "SCSS", color: "text-pink-500" },
    { icon: FaReact, name: "React", color: "text-cyan-400" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400" },
  ];

  const backendSkills = [
    { icon: FaNodeJs, name: "NodeJS", color: "text-green-500" },
    { icon: SiStrapi, name: "Strapi", color: "text-purple-500" },
    { icon: AiOutlineConsoleSql, name: "SQL", color: "text-blue-400" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
  ];

  const designSkills = [
    { icon: SiFigma, name: "Figma", color: "text-purple-400" },
    { icon: SiFramer, name: "Framer Motion", color: "text-pink-400" },
  ];

  const otherSkills = [
    { icon: FaGitAlt, name: "Git", color: "text-orange-600" },
    { icon: FaGithub, name: "GitHub", color: "text-gray-400" },
    { icon: FaTerminal, name: "Terminal", color: "text-green-400" },
  ];

  const SkillCard = ({ skills, title, gridCols = "grid-cols-3" }) => (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-600 hover:border-slate-400 transition-all duration-300 w-full rounded-2xl flex flex-col items-center p-4 shadow-md hover:shadow-lg transform hover:-translate-y-1">
      <h2 className="text-white text-lg xl:text-xl font-semibold mb-4 text-center">
        {title}
      </h2>
      <div className={`grid ${gridCols} gap-4 w-full`}>
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="p-2 rounded-full bg-slate-700 group-hover:bg-slate-600 transition-all duration-300 mb-1">
                <IconComponent
                  className={`text-2xl xl:text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>
              <span className="text-white text-xs xl:text-sm font-medium text-center group-hover:text-gray-300 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full min-h-[calc(100vh-80px)] pt-20 pb-8">
      <div className="text-center mb-6">
        <h1 className="font-bold text-white text-2xl xl:text-4xl mb-3">
          Mes Compétences
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SkillCard skills={frontendSkills} title="Frontend" />
          <SkillCard
            skills={backendSkills}
            title="Backend"
            gridCols="grid-cols-2"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SkillCard
            skills={designSkills}
            title="Web Design"
            gridCols="grid-cols-2"
          />
          <SkillCard skills={otherSkills} title="Outils & Divers" />
        </div>
      </div>

      <div className="text-white w-full 4xl:h-40 py-4 flex justify-center items-center bg-fixed bg-cover bg-parallax mt-2">
        <div className="bg-slate-900 bg-opacity-50 w-full h-full flex justify-center items-center">
          <div className="bg-black bg-opacity-60 px-4 py-2 rounded-md">
            <h2 className="font-bold text-center text-sm xl:text-base">
              Animé par une curiosité constante et une soif d'apprendre, je
              reste toujours à l'affût des dernières technologies et tendances
              du développement web.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
