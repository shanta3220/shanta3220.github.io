import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "/images/Nusrat_Jahan_Shanta.jpg";
import MediaModal from "../../components/MediaModal/MediaModal";
import { getTransition } from "../../scripts/utils";
import { skillCategories } from "../../scripts/data/skills-data";
import { educationData } from "../../scripts/data/education-data";
import { experienceData } from "../../scripts/data/experience-data";
import { awardsData } from "../../scripts/data/awards-certificates-data";
import Skills from "../../components/Skills/Skills";
import "./About.scss";
import SocialIcon from "../../components/SocialIcon/SocialIcon";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import TimelineSection from "../../components/TimelineSection/TimelineSection";

function About() {
  const [modalContent, setModalContent] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(null);
  const [currentMediaSource, setCurrentMediaSource] = useState([]);

  const handleCardClick = (content, mediaArray, index) => {
    setModalContent(content);
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
    setCurrentMediaIndex(nextIndex);
    setModalContent(currentMediaSource[nextIndex]);
  };

  const handlePrevious = () => {
    if (!currentMediaSource || currentMediaSource.length === 0) {
      console.warn("No media source available for navigation.");
      return;
    }
    const prevIndex =
      (currentMediaIndex - 1 + currentMediaSource.length) %
      currentMediaSource.length;
    setCurrentMediaIndex(prevIndex);
    setModalContent(currentMediaSource[prevIndex]);
  };

  return (
    <motion.section className="about" {...getTransition(0, 1.3)}>
      <h1 className="about__title">About Me</h1>
      <motion.section {...getTransition(0.1, 0.9)} className="about__intro">
        <div className="about__intro-content">
          <div className="about__intro-photo-and-texts">
            <div className="about__intro-photo-and-social">
              <img
                className="about__intro-content__photo"
                src={profileImage}
                alt="Profile placeholder"
              />
              <div className="social-links delayed-visible">
                <SocialIcon
                  link="https://github.com/shanta3220"
                  icon={<FaGithub />}
                  label="GitHub"
                />
                <SocialIcon
                  link="https://linkedin.com/in/njshanta"
                  icon={<FaLinkedin />}
                  label="LinkedIn"
                />
                <SocialIcon
                  link="mailto:njshanta.ca@gmail.com"
                  icon={<FaEnvelope />}
                  label="Email"
                />
              </div>
              <Link to="/projects" className="about__intro-view-projects">
                View projects
              </Link>
            </div>

            <p className="about__intro-content__text">
              Hello, this is Nusrat Jahan Shanta, and I believe in the potential
              of technology to create solutions that inspire and connect people.
              My passion for building applications drives me to focus on
              functionality, scalability, and delivering meaningful user
              experiences. <br />
              <br />
              My journey began in game development, where I tackled complex
              challenges and collaborated with teams to create engaging
              applications. Now, as I transition into full-stack web
              development, I’m applying my experiences to craft dynamic web
              solutions. My approach combines backend and frontend expertise
              with a focus on problem-solving and collaboration. <br />
              <br />
              Throughout my academic and professional journey, I’ve participated
              in project showcasing competitions, presenting innovative ideas
              and demonstrating technical solutions. These experiences have been
              pivotal in shaping my perspective on teamwork and creativity.
              Today, I strive to create applications that not only meet user
              needs but also reflect my passion for quality and impactful
              design.
            </p>
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
