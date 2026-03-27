import { PropsWithChildren } from "react";
import { CardProps } from "./card.types";
import classes from './card.module.css';
import { SIZE_MAP } from "./card.util";

export const Card = ({
    children,
    size = 'md',
    classContainer = "bg-white"
}: PropsWithChildren<CardProps>) => {
    const dimensions = SIZE_MAP[size];

    return (
        <div className={`
            ${classes.mainContainer}
            ${dimensions}
            ${classContainer}
        `}>
            {children}
        </div>
    );
};

export default Card;