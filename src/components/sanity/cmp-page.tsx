"use client";

import { useSanityPageData } from "@/context/sanity-page-context";
import { SanityModuleResolver } from "@/components/sanity/resolver";

export const CmpPage = () => {
    const { modules } = useSanityPageData();

    return (
        <div className="flex flex-col gap-16 w-full">
            {modules.map((module) => {
                if (!module._id || !module._type) {
                    return null;
                }

                return (
                    <div key={module._id} className="sanity-module-wrapper">
                        <SanityModuleResolver data={module} />
                    </div>
                );
            })}
        </div>
    );
};