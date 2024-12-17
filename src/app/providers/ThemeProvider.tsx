"use client";

import { ReactNode } from "react";
import { DarkModeProvider } from "../context/DarkModeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}
