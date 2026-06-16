type ButtonVariant = 'primary' | 'secondary' | 'default'

export interface ButtonProps {
    title: string
    onClick?: () => void
    className?: string
    disabled?: boolean
    variant?: ButtonVariant
}

