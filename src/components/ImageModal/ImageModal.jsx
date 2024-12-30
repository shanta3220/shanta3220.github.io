import React from "react";
import "./ImageModal.scss";

const ImageModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="image-modal">
      <div className="image-modal__content">
        <button className="image-modal__close" onClick={onClose}>
          Close
        </button>
        <div className="image-modal__media">
          {content.type === "image" && (
            <img src={content.src} alt={content.title} />
          )}
          {content.type === "video" && <video src={content.src} controls />}
          {content.type === "gif" && (
            <img src={content.src} alt={content.title} />
          )}
        </div>
        <div className="image-modal__details">
          <h3>{content.title}</h3>
          <p>{content.description}</p>
          <div className="image-modal__tech-stack">
            {content.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
