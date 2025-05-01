import React, { useEffect } from 'react'
import { useThemeStore } from '@/store/theme.store'

interface ThemeProviderProps {
    children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const { currentTheme } = useThemeStore()

    useEffect(() => {
        const root = document.documentElement

        // Apply theme colors
        root.style.setProperty('--primary', currentTheme.colors.primary)
        root.style.setProperty('--secondary', currentTheme.colors.secondary)
        root.style.setProperty('--accent', currentTheme.colors.accent)
        root.style.setProperty('--background-main', currentTheme.colors.background.main)
        root.style.setProperty('--background-paper', currentTheme.colors.background.paper)
        root.style.setProperty('--background-gradient', currentTheme.colors.background.gradient)
        root.style.setProperty('--text-primary', currentTheme.colors.text.primary)
        root.style.setProperty('--text-secondary', currentTheme.colors.text.secondary)
        root.style.setProperty('--text-accent', currentTheme.colors.text.accent)
        root.style.setProperty('--border', currentTheme.colors.border)
        root.style.setProperty('--success', currentTheme.colors.success)
        root.style.setProperty('--warning', currentTheme.colors.warning)
        root.style.setProperty('--error', currentTheme.colors.error)
        root.style.setProperty('--info', currentTheme.colors.info)

        // Apply typography
        root.style.setProperty('--font-primary', currentTheme.typography.fontFamily.primary)
        root.style.setProperty('--font-secondary', currentTheme.typography.fontFamily.secondary)
        root.style.setProperty('--font-accent', currentTheme.typography.fontFamily.accent)
        root.style.setProperty('--font-size-base', currentTheme.typography.fontSize.base)
        root.style.setProperty('--font-size-h1', currentTheme.typography.fontSize.h1)
        root.style.setProperty('--font-size-h2', currentTheme.typography.fontSize.h2)
        root.style.setProperty('--font-size-h3', currentTheme.typography.fontSize.h3)
        root.style.setProperty('--font-size-body', currentTheme.typography.fontSize.body)
        root.style.setProperty('--font-size-small', currentTheme.typography.fontSize.small)

        // Apply layout
        root.style.setProperty('--spacing-unit', `${currentTheme.layout.spacing.unit}px`)
        root.style.setProperty('--border-radius-small', currentTheme.layout.borderRadius.small)
        root.style.setProperty('--border-radius-medium', currentTheme.layout.borderRadius.medium)
        root.style.setProperty('--border-radius-large', currentTheme.layout.borderRadius.large)
        root.style.setProperty('--border-radius-full', currentTheme.layout.borderRadius.full)
        root.style.setProperty('--shadow-small', currentTheme.layout.shadows.small)
        root.style.setProperty('--shadow-medium', currentTheme.layout.shadows.medium)
        root.style.setProperty('--shadow-large', currentTheme.layout.shadows.large)

        // Apply component styles
        root.style.setProperty('--card-padding', currentTheme.components.card.padding)
        root.style.setProperty('--card-border-radius', currentTheme.components.card.borderRadius)
        root.style.setProperty('--card-shadow', currentTheme.components.card.shadow)
        root.style.setProperty('--input-padding', currentTheme.components.input.padding)
        root.style.setProperty('--input-border-radius', currentTheme.components.input.borderRadius)
        root.style.setProperty('--input-border', currentTheme.components.input.border)
    }, [currentTheme])

    return <>{children}</>
}

export default ThemeProvider 