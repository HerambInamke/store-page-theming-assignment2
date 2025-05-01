import React, { createContext, useContext, useState, useCallback } from 'react'
import { MEDICAL_SPECIALTY, MEDICAL_THEME_CONFIGS, type MedicalThemeConfig } from '@/constants/medical-themes.constant'

interface MedicalThemeContextValue {
    currentTheme: MedicalThemeConfig
    setTheme: (specialty: MEDICAL_SPECIALTY) => void
}

const MedicalThemeContext = createContext<MedicalThemeContextValue | undefined>(undefined)

export const MedicalThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<MedicalThemeConfig>(
        MEDICAL_THEME_CONFIGS[MEDICAL_SPECIALTY.GENERAL]
    )

    const setTheme = useCallback((specialty: MEDICAL_SPECIALTY) => {
        const theme = MEDICAL_THEME_CONFIGS[specialty]
        if (!theme) {
            console.error(`Theme configuration not found for specialty: ${specialty}`)
            return
        }

        setCurrentTheme(theme)
        
        // Update CSS variables
        const root = document.documentElement

        // Set color variables
        root.style.setProperty('--medical-primary', theme.colors.primary)
        root.style.setProperty('--medical-secondary', theme.colors.secondary)
        root.style.setProperty('--medical-accent', theme.colors.accent)
        root.style.setProperty('--medical-background-main', theme.colors.background.main)
        root.style.setProperty('--medical-background-paper', theme.colors.background.paper)
        root.style.setProperty('--medical-text-primary', theme.colors.text.primary)
        root.style.setProperty('--medical-text-secondary', theme.colors.text.secondary)
        root.style.setProperty('--medical-border', theme.colors.border)
        root.style.setProperty('--medical-success', theme.colors.success)
        root.style.setProperty('--medical-warning', theme.colors.warning)
        root.style.setProperty('--medical-error', theme.colors.error)
        root.style.setProperty('--medical-info', theme.colors.info)

        // Set layout variables
        if (theme.layout?.borderRadius) {
            root.style.setProperty('--medical-border-radius', theme.layout.borderRadius.medium)
        }
        
        if (theme.layout?.spacing?.unit) {
            root.style.setProperty('--medical-spacing-unit', `${theme.layout.spacing.unit}px`)
        }

        // Set typography
        if (theme.typography?.fontFamily?.primary) {
            root.style.fontFamily = theme.typography.fontFamily.primary
        }
    }, [])

    return (
        <MedicalThemeContext.Provider value={{ currentTheme, setTheme }}>
            {children}
        </MedicalThemeContext.Provider>
    )
}

export const useMedicalTheme = () => {
    const context = useContext(MedicalThemeContext)
    if (!context) {
        throw new Error('useMedicalTheme must be used within a MedicalThemeProvider')
    }
    return context
} 