import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50 bg-background p-4 rounded-lg shadow-lg border border-border">
      <h3 className="text-text mb-2 font-semibold">Theme Switcher</h3>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setTheme('light')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            theme === 'light'
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            theme === 'dark'
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Dark
        </button>
        <button
          onClick={() => setTheme('custom')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            theme === 'custom'
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Custom
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher; 