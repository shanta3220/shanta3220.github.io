import React from "react";
import { FaGlobe, FaGithub } from "react-icons/fa";
import SkillItem from "../SkillItem/SkillItem";
import "./MediaModal.scss";

/*MediaModal */
function MediaModal({ isOpen, onClose, content }) {
  if (!isOpen || !content) return null;

  const {
    type,
    src,
    title,
    shortDescription,
    longDescription,
    technologies = [],
    website,
    github,
  } = content;

  return (
    <div className="image-modal">
      <div className="image-modal__overlay" onClick={onClose}></div>
      <div className="image-modal__container">
        {/* Close Button */}
        <div className="image-modal__close-container">
          <button className="image-modal__close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="image-modal__columns">
          <div className="image-modal__media">
            {type === "image" && <img src={src} alt={title} />}
            {type === "video" && <video src={src} controls />}
          </div>

          <div className="image-modal__details">
            <h3 className="image-modal__title">{title}</h3>
            <p className="image-modal__short-description">{shortDescription}</p>
            <p className="image-modal__long-description">{longDescription}</p>

            <div className="image-modal__section">
              <h4 className="image-modal__header">Technologies</h4>
              <div className="skills__list">
                {technologies.map((tech, index) => (
                  <SkillItem key={index} name={tech} />
                ))}
              </div>
            </div>

            <div className="image-modal__links">
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="image-modal__button"
                >
                  <FaGlobe className="icon" /> Visit Website
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="image-modal__button github-button"
                >
                  <FaGithub className="icon" /> View GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaModal;
