# ⚛️ React Context API - Dynamic Theme Switcher

A production-ready, highly organized Theme Switcher application built to master global state management in React. This project demonstrates clean architecture by separating the state logic, style system, and component layer using React's built-in Context API, CSS custom properties (variables), and persistent state via `localStorage`.

---

## 🚀 Features

- **Global State Management:** Implemented React Context API to eliminate prop drilling, sharing the theme state seamlessly across components.
- **State Persistence:** Automatically saves the user's theme preference (`light` or `dark`) inside the browser's `localStorage` so it stays intact after a page refresh.
- **Clean Design Token System:** Utilizes CSS Custom Properties (`:root` variables) for scalable theme transitions and maintenance.
- **Optimized UI:** Cleaned default environment styling to ensure 100% text visibility and seamless transitions between dark and light modes.

---

## 🏗️ Architecture & Development Phases

Following standard software development practices, the project is structured into 3 clean phases:

### 🧠 Phase 1: The Brain (Context Setup)
- Created the global connection tower using `createContext`.
- Developed the `ThemeProvider` wrapper to supply values (`theme` and `toggleTheme`).
- Handled side effects with `useEffect` to cache user preferences in browser storage.

### 🎨 Phase 2: The Look (Design System)
- Defined dynamic style tokens (`--bg-color`, `--text-color`, etc.) in `theme.css`.
- Configured clean overrides for the `.dark` class with a smooth `0.3s` ease animation.

### 🔗 Phase 3: The Action (Component Wiring)
- Constructed the interactive `ThemeSwitcher.jsx` button component using the standard `useContext` hook.
- Wired the root container dynamically in `App.jsx` using JavaScript template literals (`app-container ${theme}`).

---

## 📁 Folder Structure

```text
src/
├── components/
│   └── ThemeSwitcher.jsx    # Consumer Button (UI Switch)
├── context/
│   └── themecontext.jsx     # Central State Management Tower
├── styles/
│   └── theme.css            # Global Theme Design Tokens
├── App.jsx                  # Root Layout Wrapper & Connector
└── main.jsx                 # Application Entry Point
🛠️ Tech Stack & Concepts Used
Frontend Library: React (Vite)

Hooks Used: useState, useEffect, useContext

Styling: CSS3 Custom Properties (Variables)

Storage: Web Storage API (localStorage)

👩‍💻 Author
Warda

Frontend Developer