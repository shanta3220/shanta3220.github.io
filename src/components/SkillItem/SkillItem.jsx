import React from "react";
import "./SkillItem.scss";
import { GetSkill } from "../../scripts/utils";

function SkillItem({ name }) {
  const skill = GetSkill(name);

  if (!skill) {
    console.error(`Skill "${name}" not found.`);
    return null;
  }

  const { icon: IconComponent, bgColor, color } = skill;

  return (
    <div
      className="skill-item"
      style={{ backgroundColor: bgColor || "rgba(0, 0, 0, 0.1)" }}
    >
      {IconComponent && (
        <span className="skill-item__icon" style={{ color }}>
          <IconComponent size={24} />
        </span>
      )}
      <span className="skill-item__name" style={{ color }}>
        {name}
      </span>
    </div>
  );
}

export default SkillItem;
