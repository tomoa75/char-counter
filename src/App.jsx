import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app-wrapper" data-theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
