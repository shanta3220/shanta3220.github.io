import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.scss";
import MediaModal from "../../components/MediaModal/MediaModal";
import {
  getAllCategories,
  getProjectsByCategory,
} from "../../scripts/data/projects-data";
import MediaCard from "../../components/MediaCard/MediaCard";
import { getTransition } from "../../scripts/utils";

const Projects = () => {
  const [modalContent, setModalContent] = useState(null);
  const [currentMediaSource, setCurrentMediaSource] = useState([]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
    setModalContent(updateModalContent(mediaItem, project));
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

  const categories = getAllCategories() ?? [];
  const filteredProjects = categories
    ? getProjectsByCategory(selectedCategory)
    : [];

  return (
    <motion.div className="projects" {...getTransition(0, 1)}>
      <motion.h1 className="projects__title" {...getTransition(0.2, 0.8)}>
        My Projects
      </motion.h1>

      <motion.div className="projects__categories" {...getTransition(0.2, 0.8)}>
        {categories.map((category) => (
          <button
            key={category}
            className={`projects__category ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div className="projects__grid" {...getTransition(0.3, 0.8)}>
        {filteredProjects.map((project, index) => (
          <motion.div
            className="projects__card"
            key={index}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
          >
            {project.media?.length > 0 &&
              project.media.map((mediaItem, mediaIndex) => (
                <MediaCard
                  key={`${index}-${project.title}`}
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
          </motion.div>
        ))}
      </motion.div>

      <MediaModal
        isOpen={!!modalContent}
        content={modalContent}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrevious={handlePrevious}
        showNextPreviousButton={currentMediaSource?.length > 1}
      />
    </motion.div>
  );
};

export default Projects;
