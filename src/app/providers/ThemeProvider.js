"use client";

import { DarkModeProvider } from "../context/DarkModeContext";

export default function ThemeProvider({ children }) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}
