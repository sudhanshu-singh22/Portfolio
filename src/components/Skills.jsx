import React from "react";
import { FaJava, FaGit } from "react-icons/fa";
import { SiC, SiCplusplus, SiPython, SiPhp, SiJavascript, SiMysql, SiMongodb, SiPostman } from "react-icons/si";
import { DiHtml5, DiCss3, DiGithub, DiReact, DiNodejsSmall, DiVisualstudio } from "react-icons/di";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Programming Languages",
    technologies: [
      { name: "C++", icon: <SiCplusplus className="text-blue-700 text-6xl" /> },
      { name: "C", icon: <SiC className="text-blue-700 text-6xl" /> },
      { name: "Python", icon: <SiPython className="text-yellow-400 text-6xl" /> },
      { name: "Java", icon: <FaJava className="text-red-600 text-6xl" /> },
      { name: "PHP", icon: <SiPhp className="text-purple-600 text-6xl" /> },
    ],
  },
  {
    category: "Development Tools/Platforms",
    technologies: [
      { name: "HTML5", icon: <DiHtml5 className="text-orange-600 text-6xl" /> },
      { name: "CSS3", icon: <DiCss3 className="text-blue-600 text-6xl" /> },
      { name: "React", icon: <DiReact className="text-blue-500 text-6xl" /> },
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-600 text-6xl" /> },
      { name: "PHP", icon: <SiPhp className="text-purple-600 text-6xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-orange-600 text-6xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-6xl" /> },
      { name: "Git", icon: <FaGit className="text-orange-600 text-6xl" /> },
      { name: "GitHub", icon: <DiGithub className="text-gray-400 text-6xl" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-600 text-6xl" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-600 text-6xl" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 text-gray-200" id="skills">
      <Reveal>
        <h2 className="text-4xl font-bold mb-8 text-center">My Tech Stack</h2>

        <div className="w-full grid grid-cols-5 gap-6">
          <h3 className="text-xl font-bold mb-4 col-span-5 text-center">Programming Languages</h3>
          {skills[0].technologies.map((tech, idx) => (
            <div key={idx} className="relative group flex items-center justify-center">
              <span className="text-6xl">{tech.icon}</span>
              <span className="absolute bottom-[-30px] bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full mt-16">
          <h3 className="text-xl font-bold mb-4 text-center">{skills[1].category}</h3>
          <div className="grid grid-cols-5 gap-6">
            {skills[1].technologies.map((tech, idx) => (
              <div key={idx} className="relative group flex items-center justify-center">
                <span className="text-6xl">{tech.icon}</span>
                <span className="absolute bottom-[-30px] bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
