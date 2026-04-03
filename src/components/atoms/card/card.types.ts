
export type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface CardProps {
    size?: CardSize;
    classContainer?: string;
}