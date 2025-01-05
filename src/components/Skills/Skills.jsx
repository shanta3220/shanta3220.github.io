import React from "react";
import SkillItem from "../SkillItem/SkillItem";
import "./Skills.scss";

function Skills({ skillCategories }) {
  return (
    <section className="skills">
      <h2 className="skills__sub-title">Skills</h2>
      <div className="skills__list">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills__category">
            <h3 className="skills__category-title">{category.category}</h3>
            <div className="skills__categorized-list">
              {category.skills.map((skillName, i) => (
                <SkillItem key={i} name={skillName} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
