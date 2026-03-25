export interface ButtonProps {
    title: string
    onClick?: () => void
    className?: string
    disabled?: boolean
    variant?: 'primary' | 'secondary' | 'default'
}

