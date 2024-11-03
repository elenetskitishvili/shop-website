"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-9">
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <SunIcon className="h-10 w-10 text-yellow-500" />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <MoonIcon className="h-9 w-9 text-yellow-500" />
        </button>
      )}
    </div>
  );
}
