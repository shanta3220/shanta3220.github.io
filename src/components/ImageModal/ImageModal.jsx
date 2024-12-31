import React from "react";
import "./ImageModal.scss";

const ImageModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="image-modal">
      <div className="image-modal__overlay" onClick={onClose}></div>
      <div className="image-modal__content">
        <button className="image-modal__close" onClick={onClose}>
          Close
        </button>
        <div className="image-modal__media">
          {content.media.type === "image" && (
            <img src={content.media.src} alt={content.title} />
          )}
          {content.media.type === "video" && (
            <video src={content.media.src} controls />
          )}
          {content.media.type === "gif" && (
            <img src={content.media.src} alt={content.title} />
          )}
        </div>
        <div className="image-modal__details">
          <h3>{content.title}</h3>
          <p>{content.longDescription}</p>
          {content.year && <p>Year: {content.year}</p>}
          <div className="image-modal__tech-stack">
            {content.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          <div className="image-modal__links">
            {content.website && (
              <a
                href={content.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            )}
            {content.github && (
              <a
                href={content.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
