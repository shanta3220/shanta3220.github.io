import "./ThemeToggle.scss";

function ThemeToggle({ currentTheme, onChangeTheme }) {
  const themes = [
    { name: "dark", color: "#1e90ff" },
    { name: "light", color: "#007bff" },
    { name: "orange", color: "#ff5722" },
  ];

  const handleClick = () => {
    const currentIndex = themes.findIndex(
      (theme) => theme.name === currentTheme
    );
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    if (onChangeTheme) onChangeTheme(nextTheme.name);
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleClick}
      title="Switch to next theme"
    >
      {currentTheme || "Theme"}
    </button>
  );
}

export default ThemeToggle;
