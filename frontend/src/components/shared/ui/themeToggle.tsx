"use client";
import { useRef, useCallback } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/src/components/provider/providers";

const SHUTTER_SOUND_URL = "/camera-shutter.wav";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Lazy-init audio only on first interaction, not on mount
  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(SHUTTER_SOUND_URL);
      audio.preload = "auto";
      audio.volume = 0.3;
      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  const handleToggle = () => {
    const audio = getAudio();
    audio.currentTime = 0;
    audio.play().catch(() => {});
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-8 h-8 rounded-full 
                 text-primary hover:bg-bg-hover transition-colors duration-200
                 active:scale-95"
    >
      <div className="transition-transform duration-100 active:rotate-12">
        {/* ✅ CSS-driven swap — no JS needed, no flash */}
        <Sun className="w-5 h-5 hidden dark:block" />
        <Moon className="w-5 h-5 block dark:hidden" />
      </div>
    </button>
  );
}
