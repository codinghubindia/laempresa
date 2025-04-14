import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

// Create a script to detect the user's preferred color scheme before page load
// This script will be executed immediately before rendering
const getInitialTheme = (): Theme => {
  // Check if theme is stored in localStorage
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }
  }

  // If no theme in localStorage, check user preference
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }

  // Default to dark theme
  return 'dark';
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isDark = theme === 'dark';

  // Set theme in localStorage and apply it to document
  const applyTheme = useCallback((newTheme: Theme) => {
    // Update localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', newTheme);
    }

    // Update document attributes
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      document.body.className = 'dark';
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      document.body.className = 'light';
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const userPrefersDark = e.matches;
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setTheme(userPrefersDark ? 'dark' : 'light');
      }
    };
    
    // Add listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // For older browsers
      mediaQuery.addListener(handleChange);
    }
    
    // Clean up
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        // For older browsers
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
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