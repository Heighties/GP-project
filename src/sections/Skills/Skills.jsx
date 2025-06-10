import { stackIconMap } from "../../utils/stackIcons";

const Skills = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "SCSS",
    "React",
    "Tailwind",
  ];

  const backendSkills = ["NodeJS", "Strapi", "SQL", "MongoDB"];
  const designSkills = ["Figma", "Framer Motion"];
  const otherSkills = ["Git", "GitHub", "Terminal"];

  const buildSkillData = (skillNames) =>
    skillNames.map((name) => ({
      icon: stackIconMap[name].icon,
      name,
      color: stackIconMap[name].color,
    }));

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
    <div className="flex flex-col items-center w-full pt-20 pb-8 xl:mt-16">
      <div className="text-center mb-6">
        <h1 className="font-bold text-white text-2xl xl:text-4xl mb-3">
          Mes Compétences
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SkillCard skills={buildSkillData(frontendSkills)} title="Frontend" />
          <SkillCard
            skills={buildSkillData(backendSkills)}
            title="Backend"
            gridCols="grid-cols-2"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SkillCard
            skills={buildSkillData(designSkills)}
            title="Web Design"
            gridCols="grid-cols-2"
          />
          <SkillCard
            skills={buildSkillData(otherSkills)}
            title="Outils & Divers"
          />
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
