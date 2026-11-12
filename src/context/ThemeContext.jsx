import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

function readSavedTheme() {
  try {
    return window.localStorage.getItem('portfolio-theme');
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    window.localStorage.setItem('portfolio-theme', theme);
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = readSavedTheme();
      return saved === 'light' ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');
    saveTheme(theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
