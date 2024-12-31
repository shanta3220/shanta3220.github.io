import React from "react";
import "./ImageCard.scss";

const ImageCard = ({ media, onClick }) => {
  const { type, src, title } = media;

  return (
    <div className="image-card" onClick={onClick}>
      <div className="image-card__media">
        {type === "image" && <img src={src} alt={title} />}
        {type === "video" && <video src={src} muted />}
        {type === "gif" && <img src={src} alt={title} />}
      </div>
    </div>
  );
};

export default ImageCard;
