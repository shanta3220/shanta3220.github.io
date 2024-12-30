import React from "react";
import "./SkillItem.scss";
import { GetSkill } from "../../utils";

function SkillItem({ name }) {
  const skill = GetSkill(name);
  if (!skill) {
    console.error(`Skill "${name}" not found.`);
    return null;
  }

  const { icon: IconComponent, bgColor, color: textColor } = skill;

  return (
    <div
      className="skill-item"
      style={{ backgroundColor: bgColor || "rgba(0, 0, 0, 0.1)" }}
    >
      <span className="skill-item__icon" style={{ color: textColor }}>
        <IconComponent size={24} />
      </span>
      <span className="skill-item__name" style={{ color: textColor }}>
        {name}
      </span>
    </div>
  );
}

export default SkillItem;
