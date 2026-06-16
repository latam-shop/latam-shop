import { SanityModuleData } from "./types";
import { CmpBannerArgs, CmpBannerProps } from "./cmp-banner/types";

export interface ComponentRegistry {
    banner: {
        args: CmpBannerArgs;
        props: CmpBannerProps;
    };
}

export type ResolvedModule = {
    [K in keyof ComponentRegistry]: SanityModuleData & {
        _type: K;
        resolvedProps: ComponentRegistry[K]["props"];
    };
}[keyof ComponentRegistry];