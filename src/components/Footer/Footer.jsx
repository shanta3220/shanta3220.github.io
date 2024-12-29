import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} Nusrat Jahan Shanta
      </p>
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/njshanta"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/shanta3220"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          GitHub
        </a>
        <a href="mailto:njshanta.ca@gmail.com" className="footer__link">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
