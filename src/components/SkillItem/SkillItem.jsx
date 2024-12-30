import React from "react";
import * as Icons from "react-icons/fa";
import "./SkillItem.scss";
import { getContrastColor } from "../../scripts/utils";

function SkillItem({ name, icon, bgColor }) {
  const IconComponent = Icons[icon];
  if (!IconComponent) {
    console.error(`Icon "${icon}" not found in react-icons/fa`);
    return null;
  }

  const textColor = getContrastColor(bgColor);

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
