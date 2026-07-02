import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./context/themecontext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./styles/theme.css"; // Connecting styles folder

function MainLayout() {
  // Getting the current active theme
  const { theme } = useContext(ThemeContext);

  return (
    // Applying dynamic class 'light' or 'dark' on the outer container
    <div className={`app-container ${theme}`}>
      <div className="card">
        <h1>Theme Switcher Project 🚀</h1>
        <p>Software House Architecture successfully completed!</p>
        {/* Rendering our functional button */}
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default function App() {
  return (
    // Wrapping everything inside the provider so context works everywhere
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}