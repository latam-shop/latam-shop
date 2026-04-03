import { CardSize } from "./card.types";

export const SIZE_MAP: Record<CardSize, string> = {
    xs: 'w-32 h-40',
    sm: 'w-48 h-64',
    md: 'w-64 h-80',
    lg: 'w-80 h-96',
    xl: 'w-96 h-[28rem]',
    xxl: 'w-[28rem] h-[32rem]',
};
