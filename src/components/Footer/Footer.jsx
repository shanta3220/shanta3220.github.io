import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SocialIcon from "../SocialIcon/SocialIcon";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setShowFooter(false);
      setTimeout(() => setShowFooter(true), 100);
    }
  }, [location, isHome]);

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    !isHome &&
    showFooter && (
      <motion.footer
        className="footer"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={footerVariants}
      >
        <div className="social-links">
          <SocialIcon
            link="https://github.com/shanta3220"
            icon={<FaGithub />}
            ariaLabel="GitHub profile"
          />
          <SocialIcon
            link="https://linkedin.com/in/njshanta"
            ariaLabel="LinkedIn profile"
            icon={<FaLinkedin />}
          />
          <SocialIcon
            link="mailto:njshanta.ca@gmail.com"
            ariaLabel="Email"
            icon={<FaEnvelope />}
          />
          <SocialIcon
            link="https://instagram.com/njshanta"
            ariaLabel="Instagram"
            icon={<FaInstagram />}
          />
          <SocialIcon
            link="https://twitter.com/msnjshanta"
            ariaLabel="Twitter"
            icon={<FaTwitter />}
          />
        </div>
      </motion.footer>
    )
  );
}

export default Footer;
