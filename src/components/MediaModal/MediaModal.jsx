import { FaGlobe, FaGithub, FaProjectDiagram, FaTimes } from "react-icons/fa";
import SkillItem from "../SkillItem/SkillItem";
import "./MediaModal.scss";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineX } from "react-icons/hi";
function MediaModal({
  isOpen,
  onClose,
  content,
  onPrevious,
  onNext,
  showNextPreviousButton,
}) {
  if (!isOpen || !content) return null;
  console.log(content);
  const {
    type,
    src,
    title,
    shortDescription,
    longDescription,
    year,
    skills,
    website,
    github,
    project,
  } = content;

  return (
    <div className="media-modal">
      <div className="media-modal__overlay" onClick={onClose}></div>
      <div className="media-modal__container">
        {showNextPreviousButton && (
          <button className="media-modal__prev" onClick={onPrevious}>
            <span className="icon">
              <FaArrowLeftLong />
            </span>
          </button>
        )}
        <div className="media-modal__content">
          <div className="media-modal__close-container">
            <button className="media-modal__close" onClick={onClose}>
              <span className="icon">
                <HiOutlineX />
              </span>
            </button>
          </div>

          <div className="media-modal__columns">
            <div className="media-modal__media">
              {type === "image" && <img src={src} alt={title} />}
              {type === "video" && <video src={src} controls />}
            </div>

            <div className="media-modal__info">
              <h3 className="media-modal__title">{title}</h3>
              <p className="media-modal__short-desc">{shortDescription}</p>
              {longDescription.split("\n").map((line, index) => (
                <p key={index} className="media-modal__long-desc">
                  {line}
                </p>
              ))}
              {year && (
                <div className="media-modal__section">
                  <h4 className="media-modal__header">Year</h4>
                  <div className="media-modal__long-desc">{year}</div>
                </div>
              )}
              {skills && (
                <div className="media-modal__section">
                  <h4 className="media-modal__header">Skills</h4>
                  <div className="media-modal__skills">
                    {skills.map((skill, index) => (
                      <SkillItem key={index} name={skill} />
                    ))}
                  </div>
                </div>
              )}

              <div className="media-modal__links">
                {website && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="media-modal__button"
                  >
                    <FaGlobe className="icon" /> Visit Website
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="media-modal__button github-button"
                  >
                    <FaGithub className="icon" /> View GitHub
                  </a>
                )}
                {project && (
                  <a
                    href={project}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="media-modal__button"
                  >
                    <FaProjectDiagram className="icon" /> View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {showNextPreviousButton && (
          <button className="media-modal__next" onClick={onNext}>
            <span className="icon">
              <FaArrowRightLong />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default MediaModal;
