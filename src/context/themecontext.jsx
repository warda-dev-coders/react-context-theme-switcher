import { createContext, useState, useEffect } from "react";

// 1. Context banaya
export const ThemeContext = createContext();

// 2. Provider Component jo saare data ko handle karega
export function ThemeProvider({ children }) {
    
    // Local storage se purani selected theme check karte hain
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("app-theme") || "light";
    });

    // Jab bhi theme state badle, usay browser ki memory mein update karo
    useEffect(() => {
        localStorage.setItem("app-theme", theme);
    }, [theme]);

    // Theme badalne ka simple switch logic
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        // Value ke zariye hum poori app ko data supply kar rahe hain
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}