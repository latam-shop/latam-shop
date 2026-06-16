import { IconSize } from "./icon.types";
import {
    faShoppingCart,
    faSearch,
    faUser,
    faHeart,
    faStar
} from '@fortawesome/free-solid-svg-icons';
import {
    faHeart as faHeartRegular,
    faUser as faUserRegular,
    faStar as faStarRegular
} from '@fortawesome/free-regular-svg-icons';

export const SIZE_MAP: Record<IconSize, string> = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
    xxl: 'w-12 h-12',
};

export const ICON_LIBRARY = {
    cart: { solid: faShoppingCart, regular: faShoppingCart },
    search: { solid: faSearch, regular: faSearch },
    user: { solid: faUser, regular: faUserRegular },
    wishlist: { solid: faHeart, regular: faHeartRegular },
    rating: { solid: faStar, regular: faStarRegular },
} as const;