import "./About.scss";
import profileImage from "../../assets/images/Nusrat_Jahan_Shanta.jpg";
import profileImage2 from "../../assets/images/pic01.jpg";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
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
    <section className="about">
      <h1 className="about__title">About Me</h1>
      <div className="about__intro">
        <div className="about__intro-content">
          <img
            className="about__intro-content__photo"
            src={profileImage}
            alt="Profile placeholder"
          />
          <p className="about__intro-content__text">
            I’m Nusrat Jahan Shanta, a full-stack software engineer and game
            programmer with over four years of experience in game development,
            primarily using Unity3D. Originally from Bangladesh and now residing
            in Canada, I have a Bachelor of Science in Computer Science and
            Engineering and a Master of Science in Management Information
            Systems. <br />
            <br />
            My journey began as a child gamer, which led me to pursue a career
            in game development where I tackled complex challenges, optimized
            performance, and collaborated with teams to deliver engaging
            experiences. Over time, my curiosity for technology grew, leading me
            to explore web development. <br />
            <br />
            Today, I bring expertise in both backend and frontend technologies,
            combining my game development background with web technologies to
            build scalable, interactive applications. Throughout my career, I’ve
            participated in project showcasing competitions during my academic
            years, which further strengthened my problem-solving skills and
            technical knowledge. Whether developing games or building
            applications, I thrive on finding creative solutions and delivering
            impactful results.
          </p>
          <section className="about-gallery">
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
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="Wide-angle view of a lively crowd at a concert, illuminated by colorful stage lights."
              />
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="Close-up shot of a band member focused on playing their instrument during a rehearsal."
              />
              <img
                className="about-gallery__photo"
                src={profileImage2}
                alt="The main singer passionately singing the chorus into the microphone."
              />
            </div>
          </section>
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
    </section>
  );
}

export default About;
