

import { ButtonProps } from "./button.types";

export const Button = ({
    title,
    onClick,
    className,
    variant = "default",
    disabled = false,
}: ButtonProps) => {
    return (<button
        className={`${className} ${variant}`}
        disabled={disabled}
        onClick={onClick}
    >  {title}

    </button>)
}

