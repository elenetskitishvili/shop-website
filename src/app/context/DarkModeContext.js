"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [themeMode, setThemeMode] = useLocalStorageState("themeMode", "system");

  const [isDarkMode, setIsDarkMode] = useState(() =>
    themeMode === "dark"
      ? true
      : themeMode === "light"
      ? false
      : typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    function updateTheme() {
      if (themeMode === "dark") {
        setIsDarkMode(true);
      } else if (themeMode === "light") {
        setIsDarkMode(false);
      } else {
        setIsDarkMode(
          window.matchMedia("(prefers-color-scheme: dark)").matches
        );
      }
    }

    updateTheme();

    if (themeMode === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", updateTheme);
      return () => mediaQuery.removeEventListener("change", updateTheme);
    }
  }, [themeMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, themeMode, setThemeMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext must be used within a DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
