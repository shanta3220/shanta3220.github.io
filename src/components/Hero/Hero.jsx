import { motion } from "framer-motion";
import "./Hero.scss";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { getTransition } from "../../scripts/utils";
import { Link } from "react-router-dom";
import SocialIcon from "../SocialIcon/SocialIcon";

function Hero() {
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
      <motion.p className="hero-section__paragraph" {...getTransition(0.9)}>
        Outside of coding, I enjoy exploring new technologies, reading
        insightful articles, and staying inspired by data-driven innovation.
      </motion.p>

      <Link to="/about" className="hero-section__see-more  delayed-visible">
        See more about me
        <svg
          className="hero-section__arrow-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="0" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
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
        <SocialIcon
          link="https://instagram.com/njshanta"
          icon={<FaInstagram />}
          label="Instagram"
        />
        <SocialIcon
          link="https://twitter.com/msnjshanta"
          icon={<FaTwitter />}
          label="Twitter"
        />
      </div>
    </section>
  );
}

export default Hero;
