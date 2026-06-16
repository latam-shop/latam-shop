import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { ICON_LIBRARY } from './icon.util';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type IconName = keyof typeof ICON_LIBRARY;

export interface IconProps {
    name: IconName;
    color?: string;
    size?: SizeProp;
    filled?: boolean;
}
