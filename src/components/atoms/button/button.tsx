import { cn } from "@/lib/utils";
import { ButtonProps } from "./button.types";
import styles from './button.module.css';

export const Button = ({
    title,
    onClick,
    className,
    variant = "default",
    disabled = false,
}: ButtonProps) => {
    return (<button
        className={cn(styles.primary, styles[variant], className)}
        disabled={disabled}
        onClick={onClick}
    >  {title}
    </button>)
}
