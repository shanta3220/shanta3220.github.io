import React from "react";
import "./ImageCard.scss";

const ImageCard = ({
  media,
  title,
  year,
  technologies,
  website,
  github,
  onClick,
}) => {
  return (
    <div className="image-card" onClick={onClick}>
      <div className="image-card__media">
        {media.type === "image" && <img src={media.src} alt={title} />}
        {media.type === "video" && <video src={media.src} controls />}
        {media.type === "gif" && <img src={media.src} alt={title} />}
      </div>
      <div className="image-card__content">
        <h3>{title}</h3>
        <p>{year}</p>
        <div className="image-card__tech-stack">
          {technologies.map((tech, index) => (
            <span key={index} className="image-card__tech">
              {tech}
            </span>
          ))}
        </div>
        <div className="image-card__links">
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
