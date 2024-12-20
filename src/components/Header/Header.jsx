import { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.scss";

function Header() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = (newTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a href="#about">About</a>
          </li>
          <li className="header__item">
            <a href="#skills">Skills</a>
          </li>
          <li className="header__item">
            <a href="#experience">Experience</a>
          </li>
          <li className="header__item">
            <a href="#projects">Projects</a>
          </li>
          <li className="header__item">
            <a href="#contact">Contact</a>
          </li>
          <li className="header__item">
            <ThemeToggle currentTheme={theme} onChangeTheme={changeTheme} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
