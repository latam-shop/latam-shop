import { SanityDocument } from "next-sanity";

export type SanityModule = SanityDocument & {
    _type: string;
};
export interface SanityPageContextProps {
    modules: SanityModule[];
}

export type SanityModuleData = SanityDocument & {
    _type: string;
};

export type ResolvedModule = SanityDocument & {
    _type: string;
    resolvedProps: Record<string, unknown>;
};