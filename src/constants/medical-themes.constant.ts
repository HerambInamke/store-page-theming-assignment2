export enum MEDICAL_SPECIALTY {
    GENERAL = 'general',
    PEDIATRICS = 'pediatrics',
    CARDIOLOGY = 'cardiology',
    NEUROLOGY = 'neurology',
    ONCOLOGY = 'oncology',
    EMERGENCY = 'emergency',
    SURGERY = 'surgery',
    PSYCHIATRY = 'psychiatry',
    ORGAN_TRANSPLANT = 'organ_transplant',
    COSMETIC_SURGERY = 'cosmetic_surgery'
}

export interface MedicalThemeColors {
    primary: string
    secondary: string
    accent: string
    background: {
        main: string
        paper: string
        gradient: string
    }
    text: {
        primary: string
        secondary: string
        accent: string
    }
    border: string
    success: string
    warning: string
    error: string
    info: string
    // Additional theme-specific colors
    specialty: {
        primary: string
        secondary: string
        accent: string
    }
}

export interface MedicalThemeTypography {
    fontFamily: {
        primary: string
        secondary: string
        accent: string
    }
    fontSize: {
        base: string
        h1: string
        h2: string
        h3: string
        body: string
        small: string
    }
    fontWeight: {
        light: number
        regular: number
        medium: number
        bold: number
    }
    lineHeight: {
        tight: string
        normal: string
        relaxed: string
    }
}

export interface MedicalThemeLayout {
    spacing: {
        unit: number
        compact: boolean
        section: {
            padding: string
            margin: string
        }
        container: {
            maxWidth: string
            padding: string
        }
    }
    borderRadius: {
        small: string
        medium: string
        large: string
        full: string
    }
    shadows: {
        small: string
        medium: string
        large: string
    }
}

export interface MedicalThemeComponents {
    button: {
        primary: string
        secondary: string
        accent: string
    }
    card: {
        padding: string
        borderRadius: string
        shadow: string
    }
    input: {
        padding: string
        borderRadius: string
        border: string
    }
}

export interface MedicalThemeConfig {
    id: MEDICAL_SPECIALTY
    name: string
    description: string
    marketingCopy: {
        hero: string
        cta: string
        testimonials: string
    }
    colors: MedicalThemeColors
    typography: MedicalThemeTypography
    layout: MedicalThemeLayout
    components: MedicalThemeComponents
}

export const MEDICAL_THEME_CONFIGS: Record<MEDICAL_SPECIALTY, MedicalThemeConfig> = {
    [MEDICAL_SPECIALTY.GENERAL]: {
        id: MEDICAL_SPECIALTY.GENERAL,
        name: 'General Practice',
        description: 'Clean and professional theme for general medical practice',
        marketingCopy: {
            hero: 'Comprehensive Healthcare for Your Family',
            cta: 'Schedule Your Appointment Today',
            testimonials: 'Trusted by thousands of families for quality healthcare'
        },
        colors: {
            primary: '#2563eb',
            secondary: '#64748b',
            accent: '#0ea5e9',
            background: {
                main: '#ffffff',
                paper: '#f8fafc',
                gradient: 'linear-gradient(to bottom, #ffffff, #f8fafc)'
            },
            text: {
                primary: '#1e293b',
                secondary: '#64748b',
                accent: '#0ea5e9'
            },
            border: '#e2e8f0',
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#3b82f6',
            specialty: {
                primary: '#2563eb',
                secondary: '#64748b',
                accent: '#0ea5e9'
            }
        },
        typography: {
            fontFamily: {
                primary: 'Inter',
                secondary: 'system-ui',
                accent: 'Inter'
            },
            fontSize: {
                base: '16px',
                h1: '2.5rem',
                h2: '2rem',
                h3: '1.5rem',
                body: '1rem',
                small: '0.875rem'
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700
            },
            lineHeight: {
                tight: '1.25',
                normal: '1.5',
                relaxed: '1.75'
            }
        },
        layout: {
            spacing: {
                unit: 4,
                compact: false,
                section: {
                    padding: '2rem',
                    margin: '2rem'
                },
                container: {
                    maxWidth: '1200px',
                    padding: '1rem'
                }
            },
            borderRadius: {
                small: '0.25rem',
                medium: '0.375rem',
                large: '0.5rem',
                full: '9999px'
            },
            shadows: {
                small: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                large: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }
        },
        components: {
            button: {
                primary: 'bg-primary text-white hover:bg-primary/90',
                secondary: 'bg-secondary text-white hover:bg-secondary/90',
                accent: 'bg-accent text-white hover:bg-accent/90'
            },
            card: {
                padding: '1.5rem',
                borderRadius: '0.375rem',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            },
            input: {
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--border)'
            }
        }
    },
    [MEDICAL_SPECIALTY.PEDIATRICS]: {
        id: MEDICAL_SPECIALTY.PEDIATRICS,
        name: 'Pediatrics',
        description: 'Friendly and engaging theme for pediatric care',
        marketingCopy: {
            hero: 'Caring for Your Little Ones with Love and Expertise',
            cta: 'Book a Child-Friendly Appointment',
            testimonials: 'Making healthcare fun and comfortable for children'
        },
        colors: {
            primary: '#8b5cf6',
            secondary: '#f472b6',
            accent: '#a78bfa',
            background: {
                main: '#ffffff',
                paper: '#faf5ff',
                gradient: 'linear-gradient(to bottom, #ffffff, #faf5ff)'
            },
            text: {
                primary: '#1e293b',
                secondary: '#64748b',
                accent: '#8b5cf6'
            },
            border: '#e9d5ff',
            success: '#4ade80',
            warning: '#fbbf24',
            error: '#f87171',
            info: '#60a5fa',
            specialty: {
                primary: '#8b5cf6',
                secondary: '#f472b6',
                accent: '#a78bfa'
            }
        },
        typography: {
            fontFamily: {
                primary: 'Quicksand',
                secondary: 'system-ui',
                accent: 'Quicksand'
            },
            fontSize: {
                base: '16px',
                h1: '2.75rem',
                h2: '2.25rem',
                h3: '1.75rem',
                body: '1rem',
                small: '0.875rem'
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700
            },
            lineHeight: {
                tight: '1.3',
                normal: '1.6',
                relaxed: '1.8'
            }
        },
        layout: {
            spacing: {
                unit: 6,
                compact: false,
                section: {
                    padding: '2.5rem',
                    margin: '2.5rem'
                },
                container: {
                    maxWidth: '1200px',
                    padding: '1.5rem'
                }
            },
            borderRadius: {
                small: '0.5rem',
                medium: '0.75rem',
                large: '1rem',
                full: '9999px'
            },
            shadows: {
                small: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
                medium: '0 6px 8px -1px rgba(0, 0, 0, 0.1)',
                large: '0 12px 16px -3px rgba(0, 0, 0, 0.1)'
            }
        },
        components: {
            button: {
                primary: 'bg-primary text-white hover:bg-primary/90 rounded-full',
                secondary: 'bg-secondary text-white hover:bg-secondary/90 rounded-full',
                accent: 'bg-accent text-white hover:bg-accent/90 rounded-full'
            },
            card: {
                padding: '2rem',
                borderRadius: '1rem',
                shadow: '0 6px 8px -1px rgba(0, 0, 0, 0.1)'
            },
            input: {
                padding: '0.75rem 1.25rem',
                borderRadius: '0.75rem',
                border: '2px solid var(--border)'
            }
        }
    },
    [MEDICAL_SPECIALTY.CARDIOLOGY]: {
        id: MEDICAL_SPECIALTY.CARDIOLOGY,
        name: 'Cardiology',
        description: 'Professional theme with emphasis on vital statistics',
        marketingCopy: {
            hero: 'Advanced Cardiac Care for a Healthy Heart',
            cta: 'Schedule Your Heart Health Check',
            testimonials: 'Leading the way in cardiovascular care and treatment'
        },
        colors: {
            primary: '#dc2626',
            secondary: '#475569',
            accent: '#f87171',
            background: {
                main: '#ffffff',
                paper: '#fef2f2',
                gradient: 'linear-gradient(to bottom, #ffffff, #fef2f2)'
            },
            text: {
                primary: '#1e293b',
                secondary: '#64748b',
                accent: '#dc2626'
            },
            border: '#fee2e2',
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#3b82f6',
            specialty: {
                primary: '#dc2626',
                secondary: '#475569',
                accent: '#f87171'
            }
        },
        typography: {
            fontFamily: {
                primary: 'Inter',
                secondary: 'system-ui',
                accent: 'Inter'
            },
            fontSize: {
                base: '16px',
                h1: '2.5rem',
                h2: '2rem',
                h3: '1.5rem',
                body: '1rem',
                small: '0.875rem'
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700
            },
            lineHeight: {
                tight: '1.2',
                normal: '1.4',
                relaxed: '1.6'
            }
        },
        layout: {
            spacing: {
                unit: 4,
                compact: true,
                section: {
                    padding: '1.5rem',
                    margin: '1.5rem'
                },
                container: {
                    maxWidth: '1200px',
                    padding: '1rem'
                }
            },
            borderRadius: {
                small: '0.25rem',
                medium: '0.375rem',
                large: '0.5rem',
                full: '9999px'
            },
            shadows: {
                small: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                large: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }
        },
        components: {
            button: {
                primary: 'bg-primary text-white hover:bg-primary/90',
                secondary: 'bg-secondary text-white hover:bg-secondary/90',
                accent: 'bg-accent text-white hover:bg-accent/90'
            },
            card: {
                padding: '1.5rem',
                borderRadius: '0.375rem',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            },
            input: {
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--border)'
            }
        }
    },
    [MEDICAL_SPECIALTY.NEUROLOGY]: {
        id: MEDICAL_SPECIALTY.NEUROLOGY,
        name: 'Neurology',
        description: 'Calm and focused theme for neurological care',
        marketingCopy: {
            hero: 'Expert Neurological Care for Your Brain Health',
            cta: 'Schedule Your Neurological Consultation',
            testimonials: 'Trusted by patients for comprehensive neurological care'
        },
        colors: {
            primary: '#6366f1',
            secondary: '#94a3b8',
            accent: '#818cf8',
            background: {
                main: '#ffffff',
                paper: '#f5f3ff',
                gradient: 'linear-gradient(to bottom, #ffffff, #f5f3ff)'
            },
            text: {
                primary: '#1e293b',
                secondary: '#64748b',
                accent: '#6366f1'
            },
            border: '#e0e7ff',
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#3b82f6',
            specialty: {
                primary: '#6366f1',
                secondary: '#94a3b8',
                accent: '#818cf8'
            }
        },
        typography: {
            fontFamily: {
                primary: 'Roboto',
                secondary: 'system-ui',
                accent: 'Roboto'
            },
            fontSize: {
                base: '16px',
                h1: '2.5rem',
                h2: '2rem',
                h3: '1.5rem',
                body: '1rem',
                small: '0.875rem'
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700
            },
            lineHeight: {
                tight: '1.2',
                normal: '1.4',
                relaxed: '1.6'
            }
        },
        layout: {
            spacing: {
                unit: 4,
                compact: false,
                section: {
                    padding: '2rem',
                    margin: '2rem'
                },
                container: {
                    maxWidth: '1200px',
                    padding: '1rem'
                }
            },
            borderRadius: {
                small: '0.25rem',
                medium: '0.375rem',
                large: '0.5rem',
                full: '9999px'
            },
            shadows: {
                small: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                large: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }
        },
        components: {
            button: {
                primary: 'bg-primary text-white hover:bg-primary/90',
                secondary: 'bg-secondary text-white hover:bg-secondary/90',
                accent: 'bg-accent text-white hover:bg-accent/90'
            },
            card: {
                padding: '1.5rem',
                borderRadius: '0.375rem',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            },
            input: {
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--border)'
            }
        }
    },
    [MEDICAL_SPECIALTY.ONCOLOGY]: {
        id: MEDICAL_SPECIALTY.ONCOLOGY,
        name: 'Oncology',
        description: 'Supportive and clear theme for cancer care',
        marketingCopy: {
            hero: 'Compassionate Cancer Care and Treatment',
            cta: 'Book Your Oncology Consultation',
            testimonials: 'Providing hope and healing through advanced cancer care'
        },
        colors: {
            primary: '#0ea5e9',
            secondary: '#64748b',
            accent: '#38bdf8',
            background: {
                main: '#ffffff',
                paper: '#f0f9ff',
                gradient: 'linear-gradient(to bottom, #ffffff, #f0f9ff)'
            },
            text: {
                primary: '#1e293b',
                secondary: '#64748b',
                accent: '#0ea5e9'
            },
            border: '#e0f2fe',
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#3b82f6',
            specialty: {
                primary: '#0ea5e9',
                secondary: '#64748b',
                accent: '#38bdf8'
            }
        },
        typography: {
            fontFamily: {
                primary: 'Inter',
                secondary: 'system-ui',
                accent: 'Inter'
            },
            fontSize: {
                base: '16px',
                h1: '2.5rem',
                h2: '2rem',
                h3: '1.5rem',
                body: '1rem',
                small: '0.875rem'
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700
            },
            lineHeight: {
                tight: '1.2',
                normal: '1.4',
                relaxed: '1.6'
            }
        },
        layout: {
            spacing: {
                unit: 4,
                compact: false,
                section: {
                    padding: '2rem',
                    margin: '2rem'
                },
                container: {
                    maxWidth: '1200px',
                    padding: '1rem'
                }
            },
            borderRadius: {
                small: '0.25rem',
                medium: '0.375rem',
                large: '0.5rem',
                full: '9999px'
            },
            shadows: {
                small: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                large: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }
        },
        components: {
            button: {
                primary: 'bg-primary text-white hover:bg-primary/90',
                secondary: 'bg-secondary text-white hover:bg-secondary/90',
                accent: 'bg-accent text-white hover:bg-accent/90'
            },
            card: {
                padding: '1.5rem',
                borderRadius: '0.375rem',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            },
            input: {
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--border)'
            }
        }
    },
    [MEDICAL_SPECIALTY.EMERGENCY]: {
        id: MEDICAL_SPECIALTY.EMERGENCY,
        name: 'Emergency Medicine',
        description: 'High contrast theme for emergency situations',
        marketingCopy: {
            hero: '24/7 Emergency Care When You Need It Most',
            cta: 'Get Emergency Care Now',
            testimonials: 'Rapid response and expert care in critical situations'
        },
        colors: {
            primary: '#ef4444',
            secondary: '#64748b',
            accent: '#f87171',
            background: {
                main: '#ffffff',
                paper: '#fef2f2',
                gradient: 'linear-gradient(to bottom, #ffffff, #fef2f2)'
            },
            text: {
                primary: '#1e293b',
                secondary: '#64748b',
                accent: '#ef4444'
            },
            border: '#fee2e2',
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#dc2626',
            info: '#3b82f6',
            specialty: {
                primary: '#ef4444',
                secondary: '#64748b',
                accent: '#f87171'
            }
        },
        typography: {
            fontFamily: {
                primary: 'Inter',
                secondary: 'system-ui',
                accent: 'Inter'
            },
            fontSize: {
                base: '16px',
                h1: '2.5rem',
                h2: '2rem',
                h3: '1.5rem',
                body: '1rem',
                small: '0.875rem'
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700
            },
            lineHeight: {
                tight: '1.2',
                normal: '1.4',
                relaxed: '1.6'
            }
        },
        layout: {
            spacing: {
                unit: 4,
                compact: true,
                section: {
                    padding: '2rem',
                    margin: '2rem'
                },
                container: {
                    maxWidth: '1200px',
                    padding: '1rem'
                }
            },
            borderRadius: {
                small: '0.25rem',
                medium: '0.375rem',
                large: '0.5rem',
                full: '9999px'
            },
            shadows: {
                small: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                large: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }
        },
        components: {
            button: {
                primary: 'bg-primary text-white hover:bg-primary/90',
                secondary: 'bg-secondary text-white hover:bg-secondary/90',
                accent: 'bg-accent text-white hover:bg-accent/90'
            },
            card: {
                padding: '1.5rem',
                borderRadius: '0.375rem',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            },
            input: {
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--border)'
            }
        }
    },
    [MEDICAL_SPECIALTY.SURGERY]: {
        id: MEDICAL_SPECIALTY.SURGERY,
        name: 'Surgery',
        description: 'Clean and precise theme for surgical departments',
        marketingCopy: {
            hero: 'Advanced Surgical Care with Precision',
            cta: 'Schedule Your Surgical Consultation',
            testimonials: 'Expert surgical care with outstanding outcomes'
        },
        colors: {
            primary: '#0f766e',
            secondary: '#64748b',
            accent: '#14b8a6',
            background: {
                main: '#ffffff',
                paper: '#f0fdfa',
                gradient: 'linear-gradient(to bottom, #ffffff, #f0fdfa)'
            },
            text: {
                primary: '#1e293b',
                secondary: '#64748b',
                accent: '#0f766e'
            },
            border: '#ccfbf1',
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#3b82f6',
            specialty: {
                primary: '#0f766e',
                secondary: '#64748b',
                accent: '#14b8a6'
            }
        },
        typography: {
            fontFamily: {
                primary: 'Inter',
                secondary: 'system-ui',
                accent: 'Inter'
            },
            fontSize: {
                base: '16px',
                h1: '2.5rem',
                h2: '2rem',
                h3: '1.5rem',
                body: '1rem',
                small: '0.875rem'
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700
            },
            lineHeight: {
                tight: '1.2',
                normal: '1.4',
                relaxed: '1.6'
            }
        },
        layout: {
            spacing: {
                unit: 4,
                compact: true,
                section: {
                    padding: '2rem',
                    margin: '2rem'
                },
                container: {
                    maxWidth: '1200px',
                    padding: '1rem'
                }
            },
            borderRadius: {
                small: '0.25rem',
                medium: '0.375rem',
                large: '0.5rem',
                full: '9999px'
            },
            shadows: {
                small: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                large: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }
        },
        components: {
            button: {
                primary: 'bg-primary text-white hover:bg-primary/90',
                secondary: 'bg-secondary text-white hover:bg-secondary/90',
                accent: 'bg-accent text-white hover:bg-accent/90'
            },
            card: {
                padding: '1.5rem',
                borderRadius: '0.375rem',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            },
            input: {
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--border)'
            }
        }
    },
    [MEDICAL_SPECIALTY.PSYCHIATRY]: {
        id: MEDICAL_SPECIALTY.PSYCHIATRY,
        name: 'Psychiatry',
        description: 'Calming and supportive theme for mental health care',
        marketingCopy: {
            hero: 'Compassionate Mental Health Care',
            cta: 'Book Your Psychiatric Consultation',
            testimonials: 'Supporting mental wellness with expert care'
        },
        colors: {
            primary: '#8b5cf6',
            secondary: '#64748b',
            accent: '#a78bfa',
            background: {
                main: '#ffffff',
                paper: '#faf5ff',
                gradient: 'linear-gradient(to bottom, #ffffff, #faf5ff)'
            },
            text: {
                primary: '#1e293b',
                secondary: '#64748b',
                accent: '#8b5cf6'
            },
            border: '#e9d5ff',
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#3b82f6',
            specialty: {
                primary: '#8b5cf6',
                secondary: '#64748b',
                accent: '#a78bfa'
            }
        },
        typography: {
            fontFamily: {
                primary: 'Roboto',
                secondary: 'system-ui',
                accent: 'Roboto'
            },
            fontSize: {
                base: '16px',
                h1: '2.5rem',
                h2: '2rem',
                h3: '1.5rem',
                body: '1rem',
                small: '0.875rem'
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700
            },
            lineHeight: {
                tight: '1.2',
                normal: '1.4',
                relaxed: '1.6'
            }
        },
        layout: {
            spacing: {
                unit: 5,
                compact: false,
                section: {
                    padding: '2.5rem',
                    margin: '2.5rem'
                },
                container: {
                    maxWidth: '1200px',
                    padding: '1.5rem'
                }
            },
            borderRadius: {
                small: '0.75rem',
                medium: '1rem',
                large: '1.25rem',
                full: '9999px'
            },
            shadows: {
                small: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
                medium: '0 6px 8px -1px rgba(0, 0, 0, 0.1)',
                large: '0 12px 16px -3px rgba(0, 0, 0, 0.1)'
            }
        },
        components: {
            button: {
                primary: 'bg-primary text-white hover:bg-primary/90',
                secondary: 'bg-secondary text-white hover:bg-secondary/90',
                accent: 'bg-accent text-white hover:bg-accent/90'
            },
            card: {
                padding: '2rem',
                borderRadius: '1rem',
                shadow: '0 6px 8px -1px rgba(0, 0, 0, 0.1)'
            },
            input: {
                padding: '0.75rem 1.25rem',
                borderRadius: '0.75rem',
                border: '2px solid var(--border)'
            }
        }
    },
    [MEDICAL_SPECIALTY.ORGAN_TRANSPLANT]: {
        id: MEDICAL_SPECIALTY.ORGAN_TRANSPLANT,
        name: 'Organ Transplant',
        description: 'Precise and life-saving theme for transplant procedures',
        marketingCopy: {
            hero: 'Life-Saving Organ Transplant Care',
            cta: 'Learn About Transplant Options',
            testimonials: 'Leading the way in organ transplant success'
        },
        colors: {
            primary: '#10b981',
            secondary: '#64748b',
            accent: '#34d399',
            background: {
                main: '#ffffff',
                paper: '#f0fdf4',
                gradient: 'linear-gradient(to bottom, #ffffff, #f0fdf4)'
            },
            text: {
                primary: '#1e293b',
                secondary: '#64748b',
                accent: '#10b981'
            },
            border: '#dcfce7',
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#3b82f6',
            specialty: {
                primary: '#10b981',
                secondary: '#64748b',
                accent: '#34d399'
            }
        },
        typography: {
            fontFamily: {
                primary: 'Inter',
                secondary: 'system-ui',
                accent: 'Inter'
            },
            fontSize: {
                base: '16px',
                h1: '2.5rem',
                h2: '2rem',
                h3: '1.5rem',
                body: '1rem',
                small: '0.875rem'
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700
            },
            lineHeight: {
                tight: '1.2',
                normal: '1.4',
                relaxed: '1.6'
            }
        },
        layout: {
            spacing: {
                unit: 4,
                compact: true,
                section: {
                    padding: '2rem',
                    margin: '2rem'
                },
                container: {
                    maxWidth: '1200px',
                    padding: '1rem'
                }
            },
            borderRadius: {
                small: '0.25rem',
                medium: '0.375rem',
                large: '0.5rem',
                full: '9999px'
            },
            shadows: {
                small: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                large: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }
        },
        components: {
            button: {
                primary: 'bg-primary text-white hover:bg-primary/90',
                secondary: 'bg-secondary text-white hover:bg-secondary/90',
                accent: 'bg-accent text-white hover:bg-accent/90'
            },
            card: {
                padding: '1.5rem',
                borderRadius: '0.375rem',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            },
            input: {
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--border)'
            }
        }
    },
    [MEDICAL_SPECIALTY.COSMETIC_SURGERY]: {
        id: MEDICAL_SPECIALTY.COSMETIC_SURGERY,
        name: 'Cosmetic Surgery',
        description: 'Elegant and aesthetic theme for cosmetic procedures',
        marketingCopy: {
            hero: 'Enhance Your Natural Beauty',
            cta: 'Schedule Your Cosmetic Consultation',
            testimonials: 'Transformative results with expert care'
        },
        colors: {
            primary: '#ec4899',
            secondary: '#64748b',
            accent: '#f472b6',
            background: {
                main: '#ffffff',
                paper: '#fdf2f8',
                gradient: 'linear-gradient(to bottom, #ffffff, #fdf2f8)'
            },
            text: {
                primary: '#1e293b',
                secondary: '#64748b',
                accent: '#ec4899'
            },
            border: '#fce7f3',
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#3b82f6',
            specialty: {
                primary: '#ec4899',
                secondary: '#64748b',
                accent: '#f472b6'
            }
        },
        typography: {
            fontFamily: {
                primary: 'Quicksand',
                secondary: 'system-ui',
                accent: 'Quicksand'
            },
            fontSize: {
                base: '16px',
                h1: '2.5rem',
                h2: '2rem',
                h3: '1.5rem',
                body: '1rem',
                small: '0.875rem'
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700
            },
            lineHeight: {
                tight: '1.2',
                normal: '1.4',
                relaxed: '1.6'
            }
        },
        layout: {
            spacing: {
                unit: 5,
                compact: false,
                section: {
                    padding: '2.5rem',
                    margin: '2.5rem'
                },
                container: {
                    maxWidth: '1200px',
                    padding: '1.5rem'
                }
            },
            borderRadius: {
                small: '0.75rem',
                medium: '1rem',
                large: '1.25rem',
                full: '9999px'
            },
            shadows: {
                small: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
                medium: '0 6px 8px -1px rgba(0, 0, 0, 0.1)',
                large: '0 12px 16px -3px rgba(0, 0, 0, 0.1)'
            }
        },
        components: {
            button: {
                primary: 'bg-primary text-white hover:bg-primary/90',
                secondary: 'bg-secondary text-white hover:bg-secondary/90',
                accent: 'bg-accent text-white hover:bg-accent/90'
            },
            card: {
                padding: '2rem',
                borderRadius: '1rem',
                shadow: '0 6px 8px -1px rgba(0, 0, 0, 0.1)'
            },
            input: {
                padding: '0.75rem 1.25rem',
                borderRadius: '0.75rem',
                border: '2px solid var(--border)'
            }
        }
    }
} 