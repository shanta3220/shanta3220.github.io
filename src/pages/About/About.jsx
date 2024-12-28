import "./About.scss";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">About Me</h2>
      <p className="about__text">
        I'm a software engineer passionate about building interactive, scalable
        web applications and games. With a background in game development and
        web technologies, I specialize in delivering engaging experiences that
        combine creativity and functionality.
      </p>
      <Skills />
      <Experience />
    </section>
  );
}

export default About;
