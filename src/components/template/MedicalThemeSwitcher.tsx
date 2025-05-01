import React from 'react'
import { useMedicalTheme } from '@/contexts/medicalTheme.context'
import { MEDICAL_SPECIALTY, MEDICAL_THEME_CONFIGS } from '@/constants/medical-themes.constant'
import classNames from 'classnames'

const MedicalThemeSwitcher: React.FC = () => {
    const { currentTheme, setTheme } = useMedicalTheme()

    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Medical Specialty Themes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.values(MEDICAL_THEME_CONFIGS).map((theme) => (
                    <button
                        key={theme.id}
                        onClick={() => setTheme(theme.id)}
                        className={classNames(
                            'p-4 rounded-lg transition-all duration-200 text-left',
                            'hover:shadow-lg hover:scale-105',
                            'border-2',
                            {
                                'border-primary bg-background-paper': currentTheme.id === theme.id,
                                'border-border': currentTheme.id !== theme.id
                            }
                        )}
                        style={{
                            '--tw-shadow-color': theme.colors.primary,
                            borderColor: currentTheme.id === theme.id ? theme.colors.primary : undefined
                        } as React.CSSProperties}
                    >
                        <div
                            className="w-8 h-8 rounded-full mb-2"
                            style={{ backgroundColor: theme.colors.primary }}
                        />
                        <h4 className="font-medium mb-1">{theme.name}</h4>
                        <p className="text-sm text-text-secondary">{theme.description}</p>
                        <div className="flex gap-2 mt-2">
                            <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: theme.colors.primary }}
                            />
                            <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: theme.colors.secondary }}
                            />
                            <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: theme.colors.accent }}
                            />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default MedicalThemeSwitcher 