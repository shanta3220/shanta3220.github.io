import React from "react";
import MediaCard from "../MediaCard/MediaCard";
import "./TimelineSection.scss";

function TimelineSection({ title, data, handleCardClick }) {
  return (
    <div className="timeline">
      <h2 className="timeline__title">{title}</h2>
      <div className="timeline__list">
        {data.map((item, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline__marker" />
            <div className="timeline__content">
              <p className="timeline__content-title">{item.title}</p>
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline__company"
              >
                {`${item.company}, ${item.location}`}
              </a>
              <ul className="timeline__description">
                {item.description.map((desc, i) => (
                  <li key={i}>
                    <span className="timeline__dot">•</span> {desc}
                  </li>
                ))}
              </ul>

              <div className="timeline__media">
                {item.media?.length > 0 &&
                  item.media.map((mediaItem, mediaIndex) => (
                    <MediaCard
                      key={`${index}-${mediaIndex}`}
                      media={mediaItem}
                      onClick={() =>
                        handleCardClick(mediaItem, item.media, mediaIndex)
                      }
                    />
                  ))}
              </div>
            </div>
            <div className="timeline__side">
              <span className="timeline__date">{item.year}</span>
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline__website"
              >
                View Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineSection;
