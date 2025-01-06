import React, { useState } from "react";
import "./Projects.scss";
import MediaModal from "../../components/MediaModal/MediaModal";
import { projectsData } from "../../scripts/data/projects-data";
import MediaCard from "../../components/MediaCard/MediaCard";

const Projects = () => {
  const [modalContent, setModalContent] = useState(null);
  const [currentMediaSource, setCurrentMediaSource] = useState([]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(null);

  const updateModalContent = (mediaItem, project) => ({
    ...mediaItem,
    title: mediaItem.title || project.title,
    shortDescription: mediaItem.shortDescription || project.shortDescription,
    longDescription: mediaItem.longDescription || project.description,
    skills: mediaItem.skills || project.skills,
    github: mediaItem.github || project.github,
    website: mediaItem.website || project.website,
    year: mediaItem.year || project.year,
  });
  const handleCardClick = (project, mediaArray, index) => {
    const mediaItem = mediaArray[index];
    setModalContent(updateModalContent(mediaItem, project)); // Reusing the function
    setCurrentMediaSource(mediaArray);
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
    const nextMediaItem = currentMediaSource[nextIndex];
    setCurrentMediaIndex(nextIndex);
    setModalContent((prev) => updateModalContent(nextMediaItem, prev));
  };

  const handlePrevious = () => {
    if (!currentMediaSource || currentMediaSource.length === 0) return;
    const prevIndex =
      (currentMediaIndex - 1 + currentMediaSource.length) %
      currentMediaSource.length;
    const prevMediaItem = currentMediaSource[prevIndex];
    setCurrentMediaIndex(prevIndex);
    setModalContent((prev) => updateModalContent(prevMediaItem, prev));
  };

  return (
    <div className="projects">
      <h1 className="projects__title">My Projects</h1>
      <div className="projects__grid">
        {projectsData.map((project, index) => (
          <div className="projects__card" key={index}>
            {project.media?.length > 0 &&
              project.media.map((mediaItem, mediaIndex) => (
                <MediaCard
                  key={`${index}-${mediaIndex}`}
                  media={mediaItem}
                  onClick={() =>
                    handleCardClick(project, project.media, mediaIndex)
                  }
                />
              ))}
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
