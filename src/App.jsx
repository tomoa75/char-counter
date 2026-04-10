import { useState, useEffect } from "react";
import Header from "./components/Header";
import Textarea from "./components/Textarea";
import Checkboxes from "./components/Checkboxes";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [text, setText] = useState("");
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const numOfWords = text.match(/\b[\p{L}\p{N}']+\b/gu)?.length || 0;
  const numOfSentences = text
    .split(/[.!?]+/)
    .filter((r) => r.trim() !== "").length;

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
      <p>{option1 ? text.replace(/\s/g, "").length : text.length} characters</p>
      <p>{numOfWords} words</p>
      <p>{numOfSentences} sentences</p>

      {option2 && text.length >= 200 && (
        <p className="warning">You have reached the character limit.</p>
      )}
    </div>
  );
}

export default App;
