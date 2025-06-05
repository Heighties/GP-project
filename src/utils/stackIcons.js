import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaAngular,
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
  SiJquery,
  SiStrapi,
} from "react-icons/si";

import { DiSass } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";

export const stackIconMap = {
  HTML: { icon: FaHtml5, color: "text-orange-500" },
  CSS: { icon: FaCss3Alt, color: "text-blue-500" },
  JavaScript: { icon: FaJs, color: "text-yellow-500" },
  React: { icon: FaReact, color: "text-cyan-400" },
  "Vue.js": { icon: FaVuejs, color: "text-green-400" },
  Angular: { icon: FaAngular, color: "text-red-500" },
  jQuery: { icon: SiJquery, color: "text-blue-300" },
  SCSS: { icon: DiSass, color: "text-pink-500" },
  NodeJS: { icon: FaNodeJs, color: "text-green-500" },
  Tailwind: { icon: SiTailwindcss, color: "text-teal-400" },
  Figma: { icon: SiFigma, color: "text-purple-400" },
  MongoDB: { icon: SiMongodb, color: "text-green-400" },
  "Framer Motion": { icon: SiFramer, color: "text-pink-400" },
  Git: { icon: FaGitAlt, color: "text-orange-600" },
  GitHub: { icon: FaGithub, color: "text-gray-400" },
  Terminal: { icon: FaTerminal, color: "text-green-400" },
  SQL: { icon: AiOutlineConsoleSql, color: "text-blue-400" },
  Strapi: { icon: SiStrapi, color: "text-purple-500" },
};
