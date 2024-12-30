import React from "react";
import SkillItem from "../SkillItem/SkillItem";
import "./Skills.scss";

function Skills() {
  const skills = [
    { name: "JavaScript", icon: "FaJs", bgColor: "rgba(247, 223, 30, 1)" },
    { name: "React", icon: "FaReact", bgColor: "rgba(97, 218, 251, 1)" },
    { name: "Node.js", icon: "FaNode", bgColor: "rgba(51, 153, 51, 1)" },
    { name: "Python", icon: "FaPython", bgColor: "rgba(55, 118, 171, 1)" },
    { name: "Unity3D", icon: "FaUnity", bgColor: "rgba(78, 75, 75, 1)" },
    { name: "C#", icon: "FaMicrosoft", bgColor: "rgba(65, 138, 158, 1)" },
    { name: "SQL", icon: "FaDatabase", bgColor: "rgba(68, 121, 161, 1)" },
    { name: "HTML", icon: "FaHtml5", bgColor: "rgba(227, 79, 38, 1)" },
    { name: "GitHub", icon: "FaGithub", bgColor: "rgba(60, 60, 60, 1)" },
  ];

  return (
    <div className="skills">
      <div className="skills__list">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            name={skill.name}
            icon={skill.icon}
            bgColor={skill.bgColor}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
