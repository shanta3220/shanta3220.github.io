import React from "react";
import SkillItem from "../SkillItem/SkillItem";
import "./Skills.scss";

function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages & Frameworks",
      skills: [
        { name: "JavaScript", icon: "FaJs", bgColor: "rgba(247, 223, 30, 1)" },
        { name: "React", icon: "FaReact", bgColor: "rgba(97, 218, 251, 1)" },
        { name: "Node.js", icon: "FaNode", bgColor: "rgba(51, 153, 51, 1)" },
        { name: "Python", icon: "FaPython", bgColor: "rgba(55, 118, 171, 1)" },
        { name: "HTML", icon: "FaHtml5", bgColor: "rgba(227, 79, 38, 1)" },
        { name: "CSS", icon: "FaCss3Alt", bgColor: "rgba(38, 77, 227, 1)" },
        { name: "Sass", icon: "FaSass", bgColor: "rgba(204, 102, 153, 1)" },
        { name: "Express", icon: "FaNodeJs", bgColor: "rgba(51, 153, 51, 1)" },
        { name: "Knex.js", icon: "FaJs", bgColor: "rgba(247, 223, 30, 1)" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: "FaDatabase", bgColor: "rgba(68, 121, 161, 1)" },
      ],
    },
    {
      category: "Collaboration & Design Tools",
      skills: [
        { name: "Git", icon: "FaGitAlt", bgColor: "rgba(240, 80, 51, 1)" },
        { name: "GitHub", icon: "FaGithub", bgColor: "rgba(60, 60, 60, 1)" },
        {
          name: "Postman",
          icon: "FaPaperPlane",
          bgColor: "rgba(255, 153, 51, 1)",
        },
        { name: "Trello", icon: "FaTrello", bgColor: "rgba(0, 121, 191, 1)" },
        { name: "Heroku", icon: "FaCloud", bgColor: "rgba(103, 58, 183, 1)" },
      ],
    },
    {
      category: "Game Development",
      skills: [
        { name: "Unity3D", icon: "FaUnity", bgColor: "rgba(78, 75, 75, 1)" },
        { name: "C#", icon: "FaMicrosoft", bgColor: "rgba(65, 138, 158, 1)" },
      ],
    },
    {
      category: "General Software & Productivity Tools",
      skills: [
        {
          name: "Visual Studio Code",
          icon: "FaCode",
          bgColor: "rgba(0, 122, 204, 1)",
        },
        {
          name: "Microsoft Office",
          icon: "FaFileWord",
          bgColor: "rgba(0, 115, 207, 1)",
        },
        {
          name: "Google Docs",
          icon: "FaGoogle",
          bgColor: "rgba(66, 133, 244, 1)",
        },
        { name: "Photoshop", icon: "FaAdobe", bgColor: "rgba(227, 38, 54, 1)" },
        {
          name: "SourceTree",
          icon: "FaGitAlt",
          bgColor: "rgba(240, 80, 51, 1)",
        },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        {
          name: "Problem-Solving",
          icon: "FaLightbulb",
          bgColor: "rgba(255, 223, 0, 1)",
        },
        {
          name: "Task Prioritization",
          icon: "FaTasks",
          bgColor: "rgba(67, 160, 71, 1)",
        },
        {
          name: "Team Collaboration",
          icon: "FaUsers",
          bgColor: "rgba(3, 155, 229, 1)",
        },
        {
          name: "Mentoring",
          icon: "FaChalkboardTeacher",
          bgColor: "rgba(255, 112, 67, 1)",
        },
      ],
    },
  ];

  return (
    <div className="skills">
      {skillCategories.map((category, index) => (
        <div key={index} className="skills__category">
          <h3 className="skills__category-title">{category.category}</h3>
          <div className="skills__list">
            {category.skills.map((skill, i) => (
              <SkillItem
                key={i}
                name={skill.name}
                icon={skill.icon}
                bgColor={skill.bgColor}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
