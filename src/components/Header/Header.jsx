import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.scss";

function Header() {
  const location = useLocation();
  const [theme, setTheme] = useState("dark");

  const changeTheme = (newTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const currentPage = location.pathname;

  const navLinks = pages.filter((page) => page.path !== currentPage);

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul className="header__list">
            {navLinks.map((link) => (
              <li key={link.path} className="header__item">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
            <li className="header__item">
              <ThemeToggle currentTheme={theme} onChangeTheme={changeTheme} />
            </li>
          </ul>
        </nav>
      </header>
      <div className="header-gap"></div>
    </>
  );
}

export default Header;
