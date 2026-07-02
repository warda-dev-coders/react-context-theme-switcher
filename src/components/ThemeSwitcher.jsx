import { useContext } from "react";
// Context import kiya takay tower se signals recieive kar sakein
import { ThemeContext } from "../context/themecontext";

export default function ThemeSwitcher() {
  // Extracting data using standard useContext hook
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Go Dark" : "☀️ Go Light"}
    </button>
  );
}