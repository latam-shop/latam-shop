import { PropsWithChildren } from "react";
import { CardProps } from "./card.types";
import { SIZE_MAP } from "./card.util";
import { cn } from "@/lib/utils";
import styles from './card.module.css'

export const Card = ({
    children,
    size = 'md',
    classContainer = "bg-white"
}: PropsWithChildren<CardProps>) => {
    const dimensions = SIZE_MAP[size];

    return (
        <div className={cn(styles.mainContainer, classContainer, dimensions)}>
            {children}
        </div>
    );
};

export default Card;