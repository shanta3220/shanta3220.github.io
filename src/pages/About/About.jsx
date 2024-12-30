import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/images/Nusrat_Jahan_Shanta.jpg";
import profileImage2 from "../../assets/images/pic01.jpg";
import ImageCard from "../../components/ImageCard/ImageCard";
import ImageModal from "../../components/ImageModal/ImageModal";
import { getTransition } from "../../scripts/utils";
import "./About.scss";

function About() {
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (content) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  const educationData = [
    {
      media: {
        type: "image",
        src: "src/assets/images/Nusrat_Jahan_Shanta.jpg",
      },
      title: "B.Sc. in Computer Science",
      year: "2014 - 2018",
      technologies: ["C++", "Java"],
      description: "Graduated with honors in software engineering.",
    },
    {
      media: {
        type: "image",
        src: "src/assets/images/Nusrat_Jahan_Shanta.jpg",
      },
      title: "M.Sc. in Management Information Systems",
      year: "2019 - 2021",
      technologies: ["Python", "Data Analysis"],
      description: "Focused on data management and analytics.",
    },
  ];

  const experienceData = [
    {
      media: { type: "image", src: "path/to/experience-image.jpg" },
      title: "Software Engineer",
      year: "2021 - Present",
      technologies: ["React", "Node.js"],
      description: "Worked on interactive web applications.",
    },
    {
      media: { type: "image", src: "path/to/experience-image-2.jpg" },
      title: "Game Developer",
      year: "2018 - 2021",
      technologies: ["Unity3D", "C#"],
      description: "Developed immersive gaming experiences.",
    },
  ];

  return (
    <motion.section className="about" {...getTransition(0, 1)}>
      {/* About Me Section */}
      <h1 className="about__title">About Me</h1>
      <div className="about__intro">
        <div className="about__intro-content">
          <div className="about__intro-photo-and-texts">
            <img
              className="about__intro-content__photo"
              src={profileImage}
              alt="Profile placeholder"
            />
            <p className="about__intro-content__text">
              Hello, this is Nusrat Jahan Shanta, and I believe in the potential
              of technology to create solutions that inspire and connect people.
              My passion for building applications drives me to focus on
              functionality, scalability, and delivering meaningful user
              experiences.
              <br />
              <br />
              My journey began in game development, where I tackled complex
              challenges and collaborated with teams to create engaging
              applications. Now, as I transition into full-stack web
              development, I’m applying my experiences to craft dynamic web
              solutions. My approach combines backend and frontend expertise
              with a focus on problem-solving and collaboration.
              <br />
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
            <h2 className="section-header">Photo Gallery</h2>
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
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="Photo 3"
              />
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="Photo 3"
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
        <h3 className="about__sub-title">Education</h3>
        <div className="about__timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="about__timeline-item">
              <div className="about__timeline-marker" />
              <div className="about__timeline-content">
                <h3>{item.title}</h3>
                <span className="about__timeline-date">{item.year}</span>
                <p className="about__timeline-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about__section">
        <h3 className="about__sub-title">Education</h3>
        <div className="about__section-cards">
          {educationData.map((item, index) => (
            <ImageCard
              key={index}
              {...item}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!modalContent}
        content={modalContent}
        onClose={handleCloseModal}
      />
    </motion.section>
  );
}

export default About;
