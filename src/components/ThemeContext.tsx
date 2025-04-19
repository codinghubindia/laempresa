import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Only use dark theme now
type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
}

// Modified to always return dark theme
const getInitialTheme = (): Theme => {
  return 'dark';
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme] = useState<Theme>('dark');
  const isDark = true;

  // Set theme in localStorage and apply it to document
  const applyTheme = useCallback((newTheme: Theme) => {
    // Update localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', newTheme);
    }

    // Update document attributes
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
    document.body.className = 'dark';
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  // Apply theme when component mounts
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 