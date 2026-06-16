import { SanityImageSource } from "@sanity/image-url";

export interface CmpBannerArgs {
  _id: string;
  _type: 'banner';
  title: string;
  description?: string;
  image?: SanityImageSource;
}

export interface CmpBannerProps {
  title: string;
  description: string;
  imageUrl: string;
}