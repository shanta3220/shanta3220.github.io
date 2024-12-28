import "./About.scss";
import { motion } from "framer-motion";
import profileImage from "../../assets/images/Nusrat_Jahan_Shanta.jpg";
import profileImage2 from "../../assets/images/pic01.jpg";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import { getTransition } from "../../scripts/utils";
function About() {
  const experienceTimeline = [
    {
      title: "Software Engineer",
      date: "2021 - Present",
      description:
        "Worked on interactive, scalable web applications and games, collaborating across teams to deliver engaging projects.",
    },
    {
      title: "Game Developer",
      date: "2018 - 2021",
      description:
        "Designed and developed immersive gaming experiences using Unity and C#, focusing on user engagement and optimization.",
    },
    {
      title: "B.Sc. in Computer Science",
      date: "2014 - 2018",
      description:
        "Graduated with honors, specializing in software engineering and game development.",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Unity",
    "C#",
    "SQL",
    "HTML/CSS",
    "Git/GitHub",
  ];

  return (
    <motion.section className="about" {...getTransition(0, 1)}>
      <h1 className="about__title">About Me</h1>
      <div className="about__intro">
        <div className="about__intro-content">
          <div className="about__intro-photo-and-texts">
            <div>
              <img
                className="about__intro-content__photo"
                src={profileImage}
                alt="Profile placeholder"
              />
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
            </p>{" "}
          </div>
          <div className="about-gallery">
            <h2 className="section-header">Photo Gallery</h2>
            <div className="about-gallery__photos">
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="Band members interacting with fans after the show, sharing smiles and laughter."
              />
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="A fan enjoying the show, capturing the moment with a bright smile."
              />
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="Audience members waving their hands in excitement during a live concert."
              />
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="A fan waving enthusiastically while enjoying the concert atmosphere."
              />
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="The band performing on stage at an outdoor festival at night, surrounded by colorful fireworks lighting up the sky."
              />
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="Band members performing an acoustic set in an intimate venue, engaging with the audience."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="about__timeline">
        <h2 className="about__title">Experience</h2>
        {experienceTimeline.map((item, index) => (
          <div key={index} className="about__timeline-item">
            <div className="about__timeline-marker" />
            <div className="about__timeline-content">
              <h3 className="about__timeline-title">{item.title}</h3>
              <span className="about__timeline-date">{item.date}</span>
              <p className="about__timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="about__skills">
        <h3 className="about__skills-title">Skills</h3>
        <ul className="about__skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="about__skills-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default About;
