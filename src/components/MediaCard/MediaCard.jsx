import React from "react";
import "./MediaCard.scss";
import Video from "../Video/Video";

//MediaCard
function MediaCard({ media, onClick }) {
  const { type, src, thumbnail, title } = media;

  return (
    <div className="media-card" onClick={onClick}>
      <div className="media-card__media">
        {type === "image" && <img src={src} alt={title} loading="lazy" />}
        {type === "video" && (
          //to add thumbnail at 3 seconds dynamically,
          // add thumbnailTime={3} and remove thumbnailImage
          <Video videoSrc={src} thumbnailImage={thumbnail} />
        )}

        {type === "gif" && <img src={src} alt={title} loading="lazy" />}
      </div>
    </div>
  );
}

export default MediaCard;
