import React, { useState } from "react";
import "./Projects.scss";
import MediaModal from "../../components/MediaModal/MediaModal";
import { projectsData } from "../../scripts/data/projects-data";

const Projects = () => {
  const [modalContent, setModalContent] = useState(null);
  const [currentMediaSource, setCurrentMediaSource] = useState([]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(null);

  const handleCardClick = (project, index) => {
    setModalContent(project);
    setCurrentMediaSource(project.media);
    setCurrentMediaIndex(index);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setCurrentMediaSource([]);
    setCurrentMediaIndex(null);
  };

  const handleNext = () => {
    if (!currentMediaSource || currentMediaSource.length === 0) return;
    const nextIndex = (currentMediaIndex + 1) % currentMediaSource.length;
    setCurrentMediaIndex(nextIndex);
    setModalContent(currentMediaSource[nextIndex]);
  };

  const handlePrevious = () => {
    if (!currentMediaSource || currentMediaSource.length === 0) return;
    const prevIndex =
      (currentMediaIndex - 1 + currentMediaSource.length) %
      currentMediaSource.length;
    setCurrentMediaIndex(prevIndex);
    setModalContent(currentMediaSource[prevIndex]);
  };

  return (
    <div className="projects">
      <h1 className="projects__title">My Projects</h1>
      <div className="projects__grid">
        {projectsData.map((project, index) => (
          <div
            className="projects__card"
            key={index}
            onClick={() => handleCardClick(project, index)}
          >
            <div className="projects__card-media">
              <img src={project.media[0].src} alt={project.title} />
            </div>
            <div className="projects__card-overlay">
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-description">
                {project.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
      <MediaModal
        isOpen={!!modalContent}
        content={modalContent}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrevious={handlePrevious}
        showNextPreviousButton={currentMediaSource?.length > 1}
      />
    </div>
  );
};

export default Projects;
