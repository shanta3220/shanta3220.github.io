import React from "react";
import SkillItem from "../SkillItem/SkillItem";
import "./Skills.scss";

function Skills({ skillCategories }) {
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
