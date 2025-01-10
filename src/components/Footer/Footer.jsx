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
  FaPhoneSquare,
} from "react-icons/fa";
import "./Footer.scss";
import { generalInfo } from "../../scripts/data/about-data";

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
          {generalInfo.github && (
            <SocialIcon
              link={generalInfo.github}
              ariaLabel="Github"
              label="Github"
              icon={<FaGithub />}
            />
          )}
          {generalInfo.linkedIn && (
            <SocialIcon
              link={generalInfo.linkedIn}
              ariaLabel="LinkedIn"
              label="LinkedIn"
              icon={<FaLinkedin />}
            />
          )}
          {generalInfo.instagram && (
            <SocialIcon
              link={generalInfo.instagram}
              ariaLabel="Instagram"
              label="Instagram"
              icon={<FaInstagram />}
            />
          )}
        </div>
        {generalInfo.email && (
          <SocialIcon
            ariaLabel="Email"
            label={generalInfo.email}
            icon={<FaEnvelope />}
          />
        )}
        {generalInfo.phone && (
          <SocialIcon
            ariaLabel="Phone"
            icon={<FaPhoneSquare />}
            label={generalInfo.phone}
          />
        )}
      </motion.footer>
    )
  );
}

export default Footer;
