import { PropsWithChildren } from "react";
import { CardProps, CardSize } from "./card.types";
import classes from './card.module.css';

const SIZE_MAP: Record<CardSize, string> = {
    xs: 'w-32 h-40',
    sm: 'w-48 h-64',
    md: 'w-64 h-80',
    lg: 'w-80 h-96',
    xl: 'w-96 h-[28rem]',
    xxl: 'w-[28rem] h-[32rem]',
};

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