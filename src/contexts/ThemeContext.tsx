import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'custom' | 
  'general-practice' | 'pediatrics' | 'cardiology' | 'neurology' |
  'oncology' | 'emergency' | 'surgery' | 'psychiatry' |
  'organ-transplant' | 'cosmetic-surgery';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const themeConfig = {
  light: {
    '--color-primary': '#3B82F6',
    '--color-secondary': '#6B7280',
    '--color-background': '#FFFFFF',
    '--color-text': '#1F2937',
    '--color-border': '#E5E7EB',
  },
  dark: {
    '--color-primary': '#60A5FA',
    '--color-secondary': '#9CA3AF',
    '--color-background': '#111827',
    '--color-text': '#F3F4F6',
    '--color-border': '#374151',
  },
  custom: {
    '--color-primary': '#8B5CF6',
    '--color-secondary': '#A78BFA',
    '--color-background': '#F5F3FF',
    '--color-text': '#4C1D95',
    '--color-border': '#C4B5FD',
  },
  'general-practice': {
    '--color-primary': '#3B82F6',
    '--color-secondary': '#60A5FA',
    '--color-background': '#EFF6FF',
    '--color-text': '#1E3A8A',
    '--color-border': '#BFDBFE',
  },
  'pediatrics': {
    '--color-primary': '#8B5CF6',
    '--color-secondary': '#A78BFA',
    '--color-background': '#F5F3FF',
    '--color-text': '#5B21B6',
    '--color-border': '#DDD6FE',
  },
  'cardiology': {
    '--color-primary': '#EF4444',
    '--color-secondary': '#F87171',
    '--color-background': '#FEF2F2',
    '--color-text': '#991B1B',
    '--color-border': '#FECACA',
  },
  'neurology': {
    '--color-primary': '#6366F1',
    '--color-secondary': '#818CF8',
    '--color-background': '#EEF2FF',
    '--color-text': '#3730A3',
    '--color-border': '#C7D2FE',
  },
  'oncology': {
    '--color-primary': '#06B6D4',
    '--color-secondary': '#67E8F9',
    '--color-background': '#ECFEFF',
    '--color-text': '#164E63',
    '--color-border': '#A5F3FC',
  },
  'emergency': {
    '--color-primary': '#DC2626',
    '--color-secondary': '#EF4444',
    '--color-background': '#FEF2F2',
    '--color-text': '#7F1D1D',
    '--color-border': '#FECACA',
  },
  'surgery': {
    '--color-primary': '#059669',
    '--color-secondary': '#34D399',
    '--color-background': '#ECFDF5',
    '--color-text': '#064E3B',
    '--color-border': '#A7F3D0',
  },
  'psychiatry': {
    '--color-primary': '#7C3AED',
    '--color-secondary': '#A78BFA',
    '--color-background': '#F5F3FF',
    '--color-text': '#4C1D95',
    '--color-border': '#DDD6FE',
  },
  'organ-transplant': {
    '--color-primary': '#10B981',
    '--color-secondary': '#34D399',
    '--color-background': '#ECFDF5',
    '--color-text': '#065F46',
    '--color-border': '#A7F3D0',
  },
  'cosmetic-surgery': {
    '--color-primary': '#EC4899',
    '--color-secondary': '#F472B6',
    '--color-background': '#FDF2F8',
    '--color-text': '#831843',
    '--color-border': '#FBCFE8',
  },
} as const;

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    // Check for system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (systemPrefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', theme);
    
    // Remove all theme classes
    document.documentElement.classList.remove(
      'light', 'dark', 'custom',
      'general-practice', 'pediatrics', 'cardiology', 'neurology',
      'oncology', 'emergency', 'surgery', 'psychiatry',
      'organ-transplant', 'cosmetic-surgery'
    );
    
    // Add current theme class
    document.documentElement.classList.add(theme);
    
    // Update CSS variables
    const root = document.documentElement;
    const currentThemeConfig = themeConfig[theme] || themeConfig.light;

    // Apply theme variables
    Object.entries(currentThemeConfig).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 