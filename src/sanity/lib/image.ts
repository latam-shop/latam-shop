import { createImageUrlBuilder, SanityImageSource } from '@sanity/image-url';
import { SANITY_CONFIG } from '../client';


const builder = createImageUrlBuilder({
    projectId: SANITY_CONFIG.projectId,
    dataset: SANITY_CONFIG.dataset
});

export const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
};