"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Theme } from "@radix-ui/themes";

type Theme_Mode = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme_Mode;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme_Mode>("light"); // always "light" on SSR

  useEffect(() => {
    // Runs only on client, after hydration — no mismatch
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
      <Theme appearance={theme} hasBackground={false}>
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
