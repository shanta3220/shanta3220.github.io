import { motion } from "framer-motion";
import "./Home.scss";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { getTransition } from "../../scripts/utils";
import { Link } from "react-router-dom";
import SocialIcon from "../../components/SocialIcon/SocialIcon";
import { generalInfo, homeIntros } from "../../scripts/data/about-data";

function Hero() {
  return (
    <section className="home">
      <div className="hero">
        <motion.h1 className="hero__header" {...getTransition(0.3)}>
          {`Hi, I'm ${generalInfo.fullName}`}
        </motion.h1>
        {homeIntros.map((intro, i) => {
          return (
            <motion.p
              key={i}
              className="hero__paragraph"
              {...getTransition(0.5 + i * 0.2)}
            >
              {intro}
            </motion.p>
          );
        })}
        <Link to="/about" className="hero__see-more  delayed-visible">
          See more about me
          <svg
            className="hero__arrow-icon"
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
          )}{" "}
          {generalInfo.instagram && (
            <SocialIcon
              link={generalInfo.instagram}
              icon={<FaInstagram />}
              label="Instagram"
            />
          )}
          {generalInfo.twitter && (
            <SocialIcon
              link={generalInfo.twitter}
              icon={<FaTwitter />}
              label="Twitter"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
