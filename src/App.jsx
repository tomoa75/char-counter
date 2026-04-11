import "@fontsource/inter"; // Defaultna težina 400
import "@fontsource/inter/600.css"; // Bold
import "@fontsource/inter/700.css"; // Extra Bold
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Textarea from "./components/Textarea";
import Checkboxes from "./components/Checkboxes";
import Counter from "./components/Counter";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [text, setText] = useState("");
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app-wrapper" data-theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        option2={option2}
      />
      <Checkboxes
        option1={option1}
        setOption1={setOption1}
        option2={option2}
        setOption2={setOption2}
      />
      <Cards option1={option1} option2={option2} text={text} />

      <Counter text={text} />
    </div>
  );
}

export default App;
