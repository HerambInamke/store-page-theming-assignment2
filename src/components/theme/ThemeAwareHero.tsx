import React from 'react'
import { useThemeStore } from '@/store/theme.store'
import classNames from 'classnames'

interface ThemeAwareHeroProps {
    title: string
    subtitle: string
    ctaText: string
    onCtaClick: () => void
    image?: string
    variant?: 'primary' | 'secondary' | 'accent'
}

const ThemeAwareHero: React.FC<ThemeAwareHeroProps> = ({
    title,
    subtitle,
    ctaText,
    onCtaClick,
    image,
    variant = 'primary'
}) => {
    const { currentTheme } = useThemeStore()

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return currentTheme.components.button.primary
            case 'secondary':
                return currentTheme.components.button.secondary
            case 'accent':
                return currentTheme.components.button.accent
            default:
                return currentTheme.components.button.primary
        }
    }

    return (
        <div
            className="relative overflow-hidden"
            style={{
                background: currentTheme.colors.background.gradient,
                padding: currentTheme.layout.spacing.section.padding,
                margin: currentTheme.layout.spacing.section.margin
            }}
        >
            <div
                className="container mx-auto"
                style={{
                    maxWidth: currentTheme.layout.spacing.container.maxWidth,
                    padding: currentTheme.layout.spacing.container.padding
                }}
            >
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h1
                            className="mb-4"
                            style={{
                                fontSize: currentTheme.typography.fontSize.h1,
                                fontFamily: currentTheme.typography.fontFamily.primary,
                                fontWeight: currentTheme.typography.fontWeight.bold,
                                color: currentTheme.colors.text.primary,
                                lineHeight: currentTheme.typography.lineHeight.tight
                            }}
                        >
                            {title}
                        </h1>
                        
                        <p
                            className="mb-8"
                            style={{
                                fontSize: currentTheme.typography.fontSize.h3,
                                fontFamily: currentTheme.typography.fontFamily.secondary,
                                color: currentTheme.colors.text.secondary,
                                lineHeight: currentTheme.typography.lineHeight.normal
                            }}
                        >
                            {subtitle}
                        </p>
                        
                        <button
                            onClick={onCtaClick}
                            className={classNames(
                                'px-6 py-3 rounded-md transition-colors',
                                getVariantStyles()
                            )}
                            style={{
                                fontSize: currentTheme.typography.fontSize.body,
                                fontFamily: currentTheme.typography.fontFamily.primary,
                                fontWeight: currentTheme.typography.fontWeight.medium
                            }}
                        >
                            {ctaText}
                        </button>
                    </div>
                    
                    {image && (
                        <div className="flex-1">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-auto rounded-lg"
                                style={{
                                    boxShadow: currentTheme.layout.shadows.large,
                                    borderRadius: currentTheme.layout.borderRadius.large
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ThemeAwareHero 