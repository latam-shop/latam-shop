import { CmpBannerArgs, CmpBannerProps } from "./types";
import { urlFor } from "@/sanity/lib/image";

export async function resolverCmpBanner({
    title,
    description,
    image,
}: CmpBannerArgs): Promise<CmpBannerProps> {

    if (!title) {
        throw new Error("CmpBanner: El campo 'title' es requerido.");
    }

    return {
        title,
        description: description ?? "",
        imageUrl: image ? urlFor(image).url() : "",
    };
}