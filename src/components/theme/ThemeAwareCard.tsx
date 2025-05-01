import React from 'react'
import { useThemeStore } from '@/store/theme.store'
import classNames from 'classnames'

interface ThemeAwareCardProps {
    title: string
    description: string
    image?: string
    ctaText?: string
    onCtaClick?: () => void
    variant?: 'primary' | 'secondary' | 'accent'
}

const ThemeAwareCard: React.FC<ThemeAwareCardProps> = ({
    title,
    description,
    image,
    ctaText,
    onCtaClick,
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
            className={classNames(
                'overflow-hidden transition-all duration-300',
                'hover:shadow-lg',
                currentTheme.components.card.shadow
            )}
            style={{
                padding: currentTheme.components.card.padding,
                borderRadius: currentTheme.components.card.borderRadius,
                backgroundColor: currentTheme.colors.background.paper
            }}
        >
            {image && (
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        style={{
                            borderTopLeftRadius: currentTheme.components.card.borderRadius,
                            borderTopRightRadius: currentTheme.components.card.borderRadius
                        }}
                    />
                </div>
            )}
            
            <div className="p-6">
                <h3
                    className="font-semibold mb-2"
                    style={{
                        fontSize: currentTheme.typography.fontSize.h3,
                        fontFamily: currentTheme.typography.fontFamily.primary,
                        color: currentTheme.colors.text.primary
                    }}
                >
                    {title}
                </h3>
                
                <p
                    className="mb-4"
                    style={{
                        fontSize: currentTheme.typography.fontSize.body,
                        lineHeight: currentTheme.typography.lineHeight.normal,
                        color: currentTheme.colors.text.secondary
                    }}
                >
                    {description}
                </p>
                
                {ctaText && (
                    <button
                        onClick={onCtaClick}
                        className={classNames(
                            'px-4 py-2 rounded-md transition-colors',
                            getVariantStyles()
                        )}
                        style={{
                            fontFamily: currentTheme.typography.fontFamily.primary,
                            fontWeight: currentTheme.typography.fontWeight.medium
                        }}
                    >
                        {ctaText}
                    </button>
                )}
            </div>
        </div>
    )
}

export default ThemeAwareCard 