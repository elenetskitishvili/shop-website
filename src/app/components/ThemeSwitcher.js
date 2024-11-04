"use client";
import { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import { useDarkMode } from "../context/DarkModeContext";

export default function ThemeSwitcher() {
  const { isDarkMode, themeMode, setThemeMode } = useDarkMode();
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => setShowOptions((prev) => !prev);

  return (
    <div className="relative">
      <button onClick={toggleOptions}>
        {isDarkMode ? (
          <MoonIcon className="h-9 w-9 text-amber-500" />
        ) : (
          <SunIcon className="h-10 w-10 text-amber-300" />
        )}
      </button>

      {showOptions && (
        <div className="absolute top-14 -left-5 flex flex-col bg-white dark:bg-zinc-800 border-2 border-zinc-100 dark:border-zinc-700 shadow-sm rounded-3xl overflow-hidden">
          <button
            onClick={() => setThemeMode("light")}
            className={`flex items-center gap-4 pt-4 pb-2 px-6 hover:bg-zinc-200 dark:hover:bg-zinc-700 ${
              themeMode === "light" ? "bg-zinc-200 dark:bg-zinc-700" : ""
            }`}
          >
            <SunIcon className="h-9 w-9 text-amber-300" />
            <span>Light</span>
          </button>
          <button
            onClick={() => setThemeMode("dark")}
            className={`flex items-center gap-5 py-3 px-6 hover:bg-zinc-200 dark:hover:bg-zinc-700 ${
              themeMode === "dark" ? "dark:bg-zinc-700" : ""
            }`}
          >
            <MoonIcon className="h-7 w-7 text-amber-500" />
            <span>Dark</span>
          </button>
          <button
            onClick={() => setThemeMode("system")}
            className={`flex items-center gap-4 pt-2 pb-5 px-6 hover:bg-zinc-200 dark:hover:bg-zinc-700 ${
              themeMode === "system" ? "bg-zinc-200 dark:bg-zinc-700" : ""
            }`}
          >
            <ComputerDesktopIcon className="h-7 w-7 text-amber-700" />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  );
}
