import React, { ElementType } from "react";
import CmpBanner, { resolver as resolverCmpBanner } from "./cmp-banner";
import { ComponentRegistry, ResolvedModule } from "./registry";
import { SanityModuleData } from "./types";

export const RESOLVERS_MAP: {
    [K in keyof ComponentRegistry]: (data: ComponentRegistry[K]["args"]) => Promise<ComponentRegistry[K]["props"]>;
} = {
    banner: resolverCmpBanner,
};

const VIEW_MAP: {
    [K in keyof ComponentRegistry]: React.ComponentType<ComponentRegistry[K]["props"]>
} = {
    banner: CmpBanner,
};

export async function resolveAllModules(rawModules: SanityModuleData[]): Promise<ResolvedModule[]> {
    const resolved = await Promise.all(
        rawModules.map(async (module) => {
            const type = module._type as keyof ComponentRegistry;
            const resolveFn = RESOLVERS_MAP[type];

            if (resolveFn) {
                type CurrentArgs = ComponentRegistry[typeof type]["args"];
                type CurrentProps = ComponentRegistry[typeof type]["props"];
                type ResolverFunction = (data: CurrentArgs) => Promise<CurrentProps>;

                const typedResolver = resolveFn as unknown as ResolverFunction;
                const typedArgs = module as unknown as CurrentArgs;

                const props = await typedResolver(typedArgs);

                return {
                    ...module,
                    _type: type,
                    resolvedProps: props
                } as ResolvedModule;
            }

            return null;
        })
    );

    return resolved.filter((m): m is ResolvedModule => {
        return m !== null;
    });
}

export function SanityModuleResolver({ data }: { data: ResolvedModule }) {
    const View = VIEW_MAP[data._type] as ElementType;

    if (!View) {
        console.warn(`[SanityResolver]: No hay vista para el tipo -> ${data._type}`);
        return null;
    }

    return <View {...data.resolvedProps} />;
}