import { ButtonProps } from "./button.types"

export const Buttom = ({
    title,
    onClick,
    className,
    variant,
    disabled
}: ButtonProps) => {
    return (<button
        className={`${className} ${variant}`}
        disabled={disabled}
        onClick={onClick}
    >  {title}
    </button>)
}
