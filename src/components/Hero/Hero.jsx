import { motion } from "framer-motion";
import "./Hero.scss";
import { getTransition } from "../../scripts/utils";

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.h1 className="hero-section__header" {...getTransition(0.3)}>
        Hi, I'm Nusrat Jahan Shanta
      </motion.h1>
      <motion.p className="hero-section__paragraph" {...getTransition(0.5)}>
        A passionate software engineer and game developer with a deep curiosity
        for how technology can shape our lives.
      </motion.p>
      <motion.p className="hero-section__paragraph" {...getTransition(0.7)}>
        With a background in both game development and web technologies, I
        specialize in building dynamic applications, tackling complex
        challenges, and collaborating across teams.
      </motion.p>
    </section>
  );
};

export default Hero;
