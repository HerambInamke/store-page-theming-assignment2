import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useThemeStore } from '@/store/theme.store'
import { MEDICAL_SPECIALTY } from '@/constants/medical-themes.constant'

const MenuBar: React.FC = () => {
    const location = useLocation()
    const { currentTheme, setTheme } = useThemeStore()

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(e.target.value as MEDICAL_SPECIALTY)
    }

    return (
        <nav className="bg-primary text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link
                        to="/"
                        className={`px-3 py-2 rounded-md ${
                            location.pathname === '/' ? 'bg-primary-deep' : ''
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/themes"
                        className={`px-3 py-2 rounded-md ${
                            location.pathname === '/themes' ? 'bg-primary-deep' : ''
                        }`}
                    >
                        Themes
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <select
                        value={currentTheme.id}
                        onChange={handleThemeChange}
                        className="bg-secondary text-white px-3 py-2 rounded-md"
                    >
                        {Object.values(MEDICAL_SPECIALTY).map((specialty) => (
                            <option key={specialty} value={specialty}>
                                {specialty.charAt(0).toUpperCase() + specialty.slice(1).replace('_', ' ')}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default MenuBar 