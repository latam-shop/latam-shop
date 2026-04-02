"use client";

import React, { createContext, useContext } from 'react';
import { SanityPageContextProps } from './sanity-types';


const SanityPageContext = createContext<SanityPageContextProps | undefined>(undefined);

export const SanityPageProvider = ({
    modules,
    children
}: SanityPageContextProps & { children: React.ReactNode }) => {
    return (
        <SanityPageContext.Provider value={{ modules }}>
            {children}
        </SanityPageContext.Provider>
    );
};

export const useSanityPageData = (): SanityPageContextProps => {
    const context = useContext(SanityPageContext);

    if (!context) {
        throw new Error("useSanityPageData debe usarse dentro de SanityPageProvider");
    }

    return context;
};