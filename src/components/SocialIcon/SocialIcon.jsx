import React from "react";
import "./SocialIcon.scss";

function SocialIcon({ link, icon, label }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      {icon} {label}
    </a>
  );
}

export default SocialIcon;
