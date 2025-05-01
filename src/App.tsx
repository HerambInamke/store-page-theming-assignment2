import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Theme from '@/components/template/Theme'
import Layout from '@/components/layouts'
import { AuthProvider } from '@/auth'
import Views from '@/views'
import appConfig from './configs/app.config'
import './locales'
import { MedicalThemeProvider } from '@/contexts/medicalTheme.context'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitcher'
import SpecialtyThemes from './components/SpecialtyThemes'

// Conditional import for mock data
if (appConfig.enableMock) {
    import('./mock').catch((err) => {
        console.error('Failed to load mock data:', err)
    })
}

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-background text-text">
                <MedicalThemeProvider>
                    <Theme>
                        <BrowserRouter>
                            <AuthProvider>
                                <Layout>
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex justify-end">
                                            <ThemeSwitcher />
                                        </div>
                                        <SpecialtyThemes />
                                        <Views />
                                    </div>
                                </Layout>
                            </AuthProvider>
                        </BrowserRouter>
                    </Theme>
                </MedicalThemeProvider>
            </div>
        </ThemeProvider>
    )
}

export default App
