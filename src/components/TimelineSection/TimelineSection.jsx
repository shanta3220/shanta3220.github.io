import MediaCard from "../MediaCard/MediaCard";
import "./TimelineSection.scss";

function TimelineSection({ title, data, handleCardClick }) {
  return (
    <section className="timeline">
      <h2 className="timeline__title">{title}</h2>
      <div className="timeline__list">
        {data.map((item, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline__marker" />
            <div className="timeline__content">
              <p className="timeline__content-title">{item.title}</p>
              {item.subTitle && (
                <a
                  href={item.website ? item.website : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline__company"
                >
                  {item.subTitle}
                </a>
              )}
              <div className="timeline__description">
                {item.description.split("\n").map((line, index) => (
                  <p key={index} className="timeline__desc-line">
                    {line}
                  </p>
                ))}
              </div>
              <div className="timeline__media">
                {item.media?.length > 0 &&
                  item.media.map((mediaItem, mediaIndex) => (
                    <MediaCard
                      key={`${index}-${mediaIndex}`}
                      media={mediaItem}
                      onClick={() =>
                        handleCardClick(item, item.media, mediaIndex)
                      }
                    />
                  ))}
              </div>
            </div>
            <div className="timeline__side">
              {item.year && <span className="timeline__date">{item.year}</span>}
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline__website"
                >
                  View Website
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline__website"
                >
                  View Github
                </a>
              )}
              {item.projects && (
                <a
                  to={item.projects}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline__website"
                >
                  View Projects
                </a>
              )}
              {item.project && (
                <a
                  to={item.project}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline__website"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;
