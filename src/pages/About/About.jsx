import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MediaModal from "../../components/MediaModal/MediaModal";
import { getTransition } from "../../scripts/utils";
import { aboutIntros, generalInfo } from "../../scripts/data/about-data";
import { skillCategories } from "../../scripts/data/skills-data";
import { educationData } from "../../scripts/data/education-data";
import { experienceData } from "../../scripts/data/experience-data";
import { awardsData } from "../../scripts/data/awards-data";
import Skills from "../../components/Skills/Skills";
import "./About.scss";
import SocialIcon from "../../components/SocialIcon/SocialIcon";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import { FaLocationDot } from "react-icons/fa6";

function About() {
  const [modalContent, setModalContent] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(null);
  const [currentMediaSource, setCurrentMediaSource] = useState([]);

  const updateModalContent = (mediaItem, sourceItem) => ({
    ...mediaItem,
    title: mediaItem.title || sourceItem.title,
    shortDescription: mediaItem.shortDescription || sourceItem.shortDescription,
    longDescription: mediaItem.longDescription || sourceItem.description,
    skills: mediaItem.skills || sourceItem.skills,
    github: mediaItem.github || sourceItem.github,
    website: mediaItem.website || sourceItem.website,
    year: mediaItem.year || sourceItem.year,
  });

  const handleCardClick = (sourceItem, mediaArray, index) => {
    const mediaItem = mediaArray[index];
    console.log(mediaItem);
    setModalContent(updateModalContent(mediaItem, sourceItem));
    setCurrentMediaSource(mediaArray);
    setCurrentMediaIndex(index);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setCurrentMediaIndex(null);
    setCurrentMediaSource([]);
  };

  const handleNext = () => {
    if (!currentMediaSource || currentMediaSource.length === 0) {
      console.warn("No media source available for navigation.");
      return;
    }
    const nextIndex = (currentMediaIndex + 1) % currentMediaSource.length;
    const nextMediaItem = currentMediaSource[nextIndex];
    setCurrentMediaIndex(nextIndex);
    setModalContent((prev) => updateModalContent(nextMediaItem, prev));
  };

  const handlePrevious = () => {
    if (!currentMediaSource || currentMediaSource.length === 0) {
      console.warn("No media source available for navigation.");
      return;
    }
    const prevIndex =
      (currentMediaIndex - 1 + currentMediaSource.length) %
      currentMediaSource.length;
    const prevMediaItem = currentMediaSource[prevIndex];
    setCurrentMediaIndex(prevIndex);
    setModalContent((prev) => updateModalContent(prevMediaItem, prev));
  };

  return (
    <motion.section className="about" {...getTransition(0, 1.3)}>
      <motion.h1 className="about__title" {...getTransition(0.3, 0.9)}>
        About Me
      </motion.h1>
      <motion.section {...getTransition(0.4, 0.9)} className="about__intro">
        <div className="about__intro-content">
          <div className="about__intro-photo-and-texts">
            <div className="about__intro-photo-and-social">
              <img
                className="about__intro-content__photo"
                src={generalInfo.profileImage}
                alt="Profile placeholder"
              />
              {generalInfo.location && (
                <div className={"about__intro-location"}>
                  <SocialIcon
                    icon={<FaLocationDot />}
                    label={generalInfo.location}
                  />
                </div>
              )}
              {(generalInfo.github ||
                generalInfo.linkedIn ||
                generalInfo.email) && (
                <div className="social-links delayed-visible">
                  {generalInfo.github && (
                    <SocialIcon
                      link={generalInfo.github}
                      icon={<FaGithub />}
                      label="GitHub"
                    />
                  )}
                  {generalInfo.linkedIn && (
                    <SocialIcon
                      link={generalInfo.linkedIn}
                      icon={<FaLinkedin />}
                      label="LinkedIn"
                    />
                  )}
                  {generalInfo.email && (
                    <SocialIcon
                      link={`mailto:${generalInfo.email}`}
                      icon={<FaEnvelope />}
                      label="Email"
                    />
                  )}
                </div>
              )}
              <Link to="/projects" className="about__intro-view-projects">
                View projects
              </Link>
            </div>
            <div>
              {aboutIntros.map((text, i) => {
                return (
                  <p key={i} className="about__intro-content__text">
                    {text}{" "}
                    {i < aboutIntros.length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>
      <motion.div {...getTransition(0.4, 1.1)}>
        <Skills skillCategories={skillCategories} />
        <TimelineSection
          title="Experience"
          data={experienceData}
          handleCardClick={handleCardClick}
        />
        <TimelineSection
          title="Education"
          data={educationData}
          handleCardClick={handleCardClick}
        />
        <TimelineSection
          title="Awards"
          data={awardsData}
          handleCardClick={handleCardClick}
        />
        <MediaModal
          isOpen={!!modalContent}
          content={modalContent}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrevious={handlePrevious}
          showNextPreviousButton={currentMediaSource?.length > 1}
        />
      </motion.div>
    </motion.section>
  );
}

export default About;
