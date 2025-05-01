import React from 'react';
import SpecialtyCard from './SpecialtyCard';

const specialties = [
  {
    title: 'General Practice',
    description: 'Clean and professional theme for general medical practice',
    themeKey: 'general-practice',
  },
  {
    title: 'Pediatrics',
    description: 'Friendly and engaging theme for pediatric care',
    themeKey: 'pediatrics',
  },
  {
    title: 'Cardiology',
    description: 'Professional theme with emphasis on vital statistics',
    themeKey: 'cardiology',
  },
  {
    title: 'Neurology',
    description: 'Calm and focused theme for neurological care',
    themeKey: 'neurology',
  },
  {
    title: 'Oncology',
    description: 'Supportive and clear theme for cancer care',
    themeKey: 'oncology',
  },
  {
    title: 'Emergency Medicine',
    description: 'High contrast theme for emergency situations',
    themeKey: 'emergency',
  },
  {
    title: 'Surgery',
    description: 'Clean and precise theme for surgical departments',
    themeKey: 'surgery',
  },
  {
    title: 'Psychiatry',
    description: 'Calming and supportive theme for mental health care',
    themeKey: 'psychiatry',
  },
  {
    title: 'Organ Transplant',
    description: 'Precise and life-saving theme for transplant procedures',
    themeKey: 'organ-transplant',
  },
  {
    title: 'Cosmetic Surgery',
    description: 'Elegant and aesthetic theme for cosmetic procedures',
    themeKey: 'cosmetic-surgery',
  },
];

const SpecialtyThemes: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-text mb-6">Medical Specialty Themes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {specialties.map((specialty) => (
          <SpecialtyCard
            key={specialty.themeKey}
            title={specialty.title}
            description={specialty.description}
            themeKey={specialty.themeKey}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialtyThemes; 