import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import logo from '../assets/images/logo.png';
import { AddEntry } from "./AddEntry";
import { ModalWindow } from "./ModalWindow";

export const Header = ({ onAddEntry }) => {
  // Controls visibility of the "Add Entry" modal
  const [isBtnPressed, setIsBtnPressed] = useState(false);

  /*
    THEME HOOK:
    - `useTheme()` reads the saved theme from localStorage
    - Applies the theme to <html data-theme="...">
    - Persists changes back to localStorage
    - Provides a `toggleTheme` function that switches between
      "eclatlight" and "eclatdark"
  */
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-6">
      {/* LOGO */}
      <div className="flex-1">
        <a className="flex items-center gap-3">
          <img
            className="logo w-20 h-auto"
            src={logo}
            alt="Éclat Journal"
          />
          <span className="hidden sm:inline text-2xl font-serif tracking-wide">
            Éclat Journal
          </span>
        </a>
      </div>

      {/* RIGHT SIDE - (Theme switch + Add button)*/}
      <div className="flex items-center gap-6">
        {/* THEME SWITCH- (DaisyUI controller automatically switches themes) */}
        {/*
          THEME SWITCH:
          The checkbox is *controlled* by React:
          - `checked` reflects the current theme state
          - `onChange` triggers toggleTheme()
          This ensures the UI always matches the saved theme.
        */}
        <label className="swap swap-rotate cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "eclatdark"} // controlled input
            onChange={toggleTheme} // toggles & saves theme
            aria-label="Toggle theme"
          />

          {/*Light theme icon (SUN) */}
          <svg
            className="swap-off w-6 h-6 text-neutral"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.5-7.5L18 6m-12 12l-1.5 1.5m0-15L6 6m12 12l1.5 1.5" />
          </svg>

          {/* Dark theme icon (MOON) */}
          <svg
            className="swap-on w-6 h-6 text-neutral"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
          </svg>
        </label>

        {/* ADD ENTRY BUTTON — opens modal with the form */}
        <button
          onClick={() => setIsBtnPressed(true)}
          className="btn btn-xs sm:btn-sm px-4 sm:px-6 rounded-full bg-primary text-base-100 border-none transition-all duration-300 opacity-100 hover:opacity-90 shadow-[0_1px_3px_var(--color-primary)] hover:shadow-[0_2px_6px_var(--color-primary)]"
        >
          Add Entry
        </button>
      </div>

      {/* === ADD ENTRY MODAL === */}
      <ModalWindow isOpen={isBtnPressed} onClose={() => setIsBtnPressed(false)}>
        {/* When form submits → return new entry to parent → close modal */}
        <AddEntry
          onSubmitAdd={(newFormData) => {
            onAddEntry(newFormData);
            setIsBtnPressed(false);
          }}
        />
      </ModalWindow>
    </div>
  );
};
