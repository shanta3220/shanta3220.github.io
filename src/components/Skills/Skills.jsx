import React from "react";
import SkillItem from "../SkillItem/SkillItem";
import "./Skills.scss";

function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages & Frameworks",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "HTML",
        "CSS",
        "Sass",
        "Express",
        "Knex.js",
      ],
    },
    {
      category: "Databases",
      skills: ["MySQL"],
    },
    {
      category: "Collaboration & Design Tools",
      skills: ["Git", "GitHub", "Postman", "Trello", "Heroku"],
    },
    {
      category: "Game Development",
      skills: ["Unity3D", "C#"],
    },
    {
      category: "General Software & Productivity Tools",
      skills: [
        "Visual Studio Code",
        "Microsoft Office",
        "Google Docs",
        "Photoshop",
        "SourceTree",
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem-Solving",
        "Task Prioritization",
        "Team Collaboration",
        "Mentoring",
      ],
    },
  ];

  return (
    <div className="skills">
      {skillCategories.map((category, index) => (
        <div key={index} className="skills__category">
          <h3 className="skills__category-title">{category.category}</h3>
          <div className="skills__list">
            {category.skills.map((skillName, i) => (
              <SkillItem key={i} name={skillName} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
