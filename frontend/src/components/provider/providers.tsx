"use client";
import { createContext, useContext, useEffect, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";


type Theme_Mode = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme_Mode;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme_Mode>("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme_Mode | null;
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const resolved = saved ?? system;
    setTheme(resolved);
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Tooltip.Provider delayDuration={300}>{children}</Tooltip.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
