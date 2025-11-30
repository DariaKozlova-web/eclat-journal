import { useEffect, useState } from "react";

/**
 * Manages current DaisyUI theme and persists it to localStorage.
 * Uses the custom theme names defined in index.css: "eclatlight" and "eclatdark".
 * Also migrates older plain values like "light"/"dark" to the custom names.
 */
export const useTheme = () => {
  // Try to read saved theme from localStorage
  const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;

  // Map legacy/default values to our custom theme names
  const normalize = (value) => {
    if (!value) return "eclatlight";     // default
    if (value === "light") return "eclatlight";
    if (value === "dark") return "eclatdark";
    return value; // assume it's already correct (e.g. "eclatlight"/"eclatdark")
  };

  const [theme, setTheme] = useState(() => normalize(saved));

  useEffect(() => {
    // Apply theme to <html> and persist
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "eclatdark" ? "eclatlight" : "eclatdark"));
  };

  return { theme, toggleTheme };
};
