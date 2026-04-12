import LogoDarkTheme from "../assets/logo-dark-theme.svg";
import LogoLightTheme from "../assets/logo-light-theme.svg";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";
export default function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="logo-theme">
        <img
          src={theme === "dark" ? LogoDarkTheme : LogoLightTheme}
          alt="Logo"
        />

        <button className="btn-theme" onClick={toggleTheme}>
          <img
            src={theme === "dark" ? Sun : Moon}
            alt={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          />
        </button>
      </div>
      <h1 className="header-title">
        Analyze your text
        <br /> in real-time.
      </h1>
    </header>
  );
}
