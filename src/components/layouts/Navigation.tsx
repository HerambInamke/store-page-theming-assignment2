import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useThemeStore } from '@/store/theme.store'
import classNames from 'classnames'

const Navigation: React.FC = () => {
    const location = useLocation()
    const { currentTheme } = useThemeStore()

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/themes', label: 'Themes' }
    ]

    return (
        <nav className={classNames(
            'fixed top-0 left-0 right-0 z-50',
            'bg-background-paper border-b border-border',
            'shadow-sm'
        )}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={classNames(
                                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                                    {
                                        'text-primary bg-primary/10': location.pathname === item.path,
                                        'text-text-secondary hover:text-text-primary hover:bg-background-main': location.pathname !== item.path
                                    }
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: currentTheme.colors.primary }}
                            />
                            <span className="text-sm text-text-secondary">
                                {currentTheme.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation 