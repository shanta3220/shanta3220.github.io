import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/Nusrat_Jahan_Shanta.jpg";
import profileImage2 from "../../assets/images/pic01.jpg";
import MediaModal from "../../components/MediaModal/MediaModal";
import MediaCard from "../../components/MediaCard/MediaCard";
import { getTransition } from "../../scripts/utils";
import { skillCategories, educationData } from "../../scripts/Data";
import { experienceData } from "../../scripts/experience-data";
import Skills from "../../components/Skills/Skills";
import "./About.scss";
import SocialIcon from "../../components/SocialIcon/SocialIcon";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function About() {
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (content) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  return (
    <motion.section className="about" {...getTransition(0, 1)}>
      <h1 className="about__title">About Me</h1>
      <div className="about__intro">
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
          <div className="about-gallery">
            <h2 className="about__sub-title">Photo Gallery</h2>
            <div className="about-gallery__photos">
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="Photo 1"
              />
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="Photo 2"
              />
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="Photo 3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about__section">
        <h2 className="about__sub-title">Skills</h2>
        <Skills skillCategories={skillCategories} />
      </div>

      <div className="about__section">
        <h2 className="about__sub-title">Experience</h2>
        <div className="about__timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="about__timeline-item">
              <div className="about__timeline-marker" />
              <div className="about__timeline-content">
                <p className="about__timeline-content-title">{item.title}</p>
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__timeline-company"
                >
                  {` ${item.company}, ${item.location}`}
                </a>
                <ul className="about__timeline-description">
                  {item.description.map((desc, i) => (
                    <li key={i}>
                      <span className="about__timeline-dot">•</span> {desc}
                    </li>
                  ))}
                </ul>

                <div className="about__timeline-media">
                  {item.media &&
                    item.media.map((mediaItem, mediaIndex) => (
                      <MediaCard
                        key={`${index}-${mediaIndex}`}
                        media={mediaItem}
                        onClick={() => handleCardClick(mediaItem)}
                      />
                    ))}
                </div>
              </div>
              <div className="about__timeline-side">
                <span className="about__timeline-date">{item.year}</span>
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__timeline-website"
                >
                  View Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about__section">
        <h2 className="about__sub-title">Education</h2>
        <div className="about__timeline">
          {educationData.map((item, index) => (
            <div key={index} className="about__timeline-item">
              <div className="about__timeline-marker" />
              <div className="about__timeline-content">
                <p className="about__timeline-content-title">{item.title}</p>
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__timeline-company"
                >
                  {` ${item.institution}, ${item.location}`}
                </a>
                <ul className="about__timeline-description">
                  {item.description.map((desc, i) => (
                    <li key={i}>
                      <span className="about__timeline-dot">•</span> {desc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about__timeline-side">
                <span className="about__timeline-date">{item.year}</span>
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__timeline-website"
                >
                  View Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MediaModal
        isOpen={!!modalContent}
        content={modalContent}
        onClose={handleCloseModal}
      />
    </motion.section>
  );
}

export default About;
