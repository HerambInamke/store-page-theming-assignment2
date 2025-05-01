import React from 'react'
import { useThemeStore } from '@/store/theme.store'
import { MEDICAL_SPECIALTY, MEDICAL_THEME_CONFIGS } from '@/constants/medical-themes.constant'
import classNames from 'classnames'

const ThemesPage: React.FC = () => {
    const { currentTheme, setTheme } = useThemeStore()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-text-primary">Medical Specialty Themes</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(MEDICAL_THEME_CONFIGS).map((theme) => (
                    <div
                        key={theme.id}
                        className={classNames(
                            'p-6 rounded-lg transition-all duration-200',
                            'border-2 hover:shadow-lg',
                            {
                                'border-primary bg-background-paper': currentTheme.id === theme.id,
                                'border-border': currentTheme.id !== theme.id
                            }
                        )}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-text-primary">{theme.name}</h2>
                            <button
                                onClick={() => setTheme(theme.id)}
                                className={classNames(
                                    'px-4 py-2 rounded-md transition-colors',
                                    'text-white',
                                    {
                                        'bg-primary': currentTheme.id === theme.id,
                                        'bg-secondary': currentTheme.id !== theme.id
                                    }
                                )}
                            >
                                {currentTheme.id === theme.id ? 'Active' : 'Apply Theme'}
                            </button>
                        </div>
                        
                        <p className="text-text-secondary mb-4">{theme.description}</p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.colors.primary }} />
                                <span className="text-text-primary">Primary Color</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.colors.secondary }} />
                                <span className="text-text-primary">Secondary Color</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.colors.accent }} />
                                <span className="text-text-primary">Accent Color</span>
                            </div>
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-border">
                            <h3 className="text-sm font-medium text-text-secondary mb-2">Theme Details</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <span className="text-text-secondary">Font:</span>
                                    <span className="ml-2 text-text-primary">{theme.typography.fontFamily.primary}</span>
                                </div>
                                <div>
                                    <span className="text-text-secondary">Border Radius:</span>
                                    <span className="ml-2 text-text-primary">{theme.layout.borderRadius.medium}</span>
                                </div>
                                <div>
                                    <span className="text-text-secondary">Spacing:</span>
                                    <span className="ml-2 text-text-primary">{theme.layout.spacing.unit}px</span>
                                </div>
                                <div>
                                    <span className="text-text-secondary">Layout:</span>
                                    <span className="ml-2 text-text-primary">
                                        {theme.layout.spacing.compact ? 'Compact' : 'Standard'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ThemesPage 