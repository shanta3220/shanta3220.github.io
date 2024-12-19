import React from "react";
import "./Header.scss";

const Header = () => (
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
      </ul>
    </nav>
  </header>
);

export default Header;
