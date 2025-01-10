import "./SocialIcon.scss";

function SocialIcon({ link, icon, label }) {
  return (
    <>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          {icon} {label}
        </a>
      )}
      {!link && (
        <div className="social-icon">
          {icon}
          {label}
        </div>
      )}
    </>
  );
}

export default SocialIcon;
