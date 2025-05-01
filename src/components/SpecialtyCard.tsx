import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface SpecialtyCardProps {
  title: string;
  description: string;
  themeKey: string;
  icon?: React.ReactNode;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({
  title,
  description,
  themeKey,
  icon,
}) => {
  const { theme, setTheme } = useTheme();
  const isSelected = theme === themeKey;

  return (
    <div
      className={`
        p-4 rounded-lg cursor-pointer transition-all duration-300
        ${isSelected ? 'ring-2 ring-primary shadow-lg scale-105' : 'hover:shadow-md'}
        bg-background border border-border
      `}
      onClick={() => setTheme(themeKey as any)}
    >
      <div className="flex items-center space-x-3 mb-2">
        {icon && <div className="text-primary text-2xl">{icon}</div>}
        <h3 className="text-lg font-semibold text-text">{title}</h3>
      </div>
      <p className="text-sm text-secondary">{description}</p>
    </div>
  );
};

export default SpecialtyCard; 