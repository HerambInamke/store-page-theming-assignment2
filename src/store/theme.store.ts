import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { MEDICAL_SPECIALTY, MEDICAL_THEME_CONFIGS } from '@/constants/medical-themes.constant'

interface ThemeState {
    currentTheme: typeof MEDICAL_THEME_CONFIGS[keyof typeof MEDICAL_THEME_CONFIGS]
    setTheme: (themeId: MEDICAL_SPECIALTY) => void
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            currentTheme: MEDICAL_THEME_CONFIGS[MEDICAL_SPECIALTY.GENERAL],
            setTheme: (themeId) => set(() => ({ currentTheme: MEDICAL_THEME_CONFIGS[themeId] })),
        }),
        {
            name: 'medical-theme-store',
        }
    )
) 