import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSelector() {
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("water-theme-mode") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme-mode", mode);
    localStorage.setItem("water-theme-mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      className={`water-mode-toggle mode-${mode}`}
      onClick={toggleMode}
      title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Dark and Light Mode"
    >
      <span className="toggle-thumb">
        {mode === "dark" ? <Moon size={15} className="toggle-icon-moon" /> : <Sun size={15} className="toggle-icon-sun" />}
      </span>
      <span className="toggle-label-text">
        {mode === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
}
