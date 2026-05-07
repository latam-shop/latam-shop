import { ReactNode } from "react";

export interface NavBarTemplateProps {
    logo?: ReactNode;
    searchInput?: ReactNode;
    searchButton?: ReactNode;
    cartButton?: ReactNode;
    menuButton?: ReactNode;
}