import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/images/Nusrat_Jahan_Shanta.jpg";
import profileImage2 from "../../assets/images/pic01.jpg";
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

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Unity3D",
    "C#",
    "SQL",
    "HTML/CSS",
    "Git/GitHub",
  ];

  const educationData = [
    {
      media: { type: "image", src: profileImage },
      title: "B.Sc. in Computer Science",
      year: "2014 - 2018",
      technologies: ["C++", "Java"],
      description: "Graduated with honors in software engineering.",
      website: "https://university.edu",
    },
    {
      media: { type: "image", src: profileImage },
      title: "M.Sc. in Management Information Systems",
      year: "2019 - 2021",
      technologies: ["Python", "Data Analysis"],
      description: "Focused on data management and analytics.",
      website: "https://university.edu",
    },
  ];

  const experienceData = [
    {
      media: { type: "image", src: profileImage2 },
      title: "Freelance Game Programmer",
      company: "Nudge Nudge Games GmbH",
      location: "Berlin, DE",
      year: "Feb 2020 - Jun 2024",
      description: [
        "Implemented UI into the game, iterating multiple times to enhance usability and visual consistency.",
        "Completed 949 tasks in Trello—the highest in the team due to long tenure.",
        "Mentored a junior developer to contribute significantly to key game features.",
        "Collaborated with a 30-person team on a major project, ensuring design consistency and cohesive execution.",
        "Resolved 30% of reported bugs, improving game stability, and conducted code reviews to ensure high-quality code.",
      ],
      website: "https://nudge-games.com",
    },
    {
      media: { type: "image", src: profileImage2 },
      title: "Part-Time Software Engineer",
      company: "Arcade Studios",
      location: "Dhaka, BD",
      year: "Jan 2020 - Sep 2020",
      description: [
        "Started with a small role in core feature development and quickly progressed to leading a personal project within a month.",
        "Collaborated with 10 engineers on GitHub, reviewing, testing, and ensuring seamless integration.",
        "Improved code quality and reduced integration issues by 25%.",
      ],
      website: "https://arcadestudios.com",
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
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="about__section">
        <h2 className="about__sub-title">Skills</h2>
        <ul className="about__skills">
          {skills.map((skill, index) => (
            <li key={index} className="about__skills-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Experience Section */}
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

      {/* Education Section */}
      <div className="about__section">
        <h2 className="about__sub-title">Education</h2>
        <div className="about__timeline">
          {educationData.map((item, index) => (
            <div key={index} className="about__timeline-item">
              <div className="about__timeline-marker" />
              <div className="about__timeline-content">
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__timeline-title"
                >
                  {item.title}
                </a>
                <p className="about__timeline-description">
                  {item.description}
                </p>
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
