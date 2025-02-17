import { useState, useEffect, useMemo } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const pages = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
    ],
    []
  );

  const currentPage = useMemo(() => {
    const currentPath = location.pathname;
    return pages.map(({ path }) => path).includes(currentPath)
      ? currentPath
      : pages[pages.length - 1].path;
  }, [location, pages]);

  const navLinks = useMemo(
    () => pages.filter((page) => page.path !== currentPage),
    [pages, currentPage]
  );

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul className="header__list">
            {navLinks.map((link) => (
              <li key={link.path} className="header__item">
                <Link className="header__link" to={link.path}>
                  {link.name}
                </Link>
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
