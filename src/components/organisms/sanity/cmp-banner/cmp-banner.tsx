import Image from "next/image";
import { CmpBannerProps } from "./types";

export const CmpBanner = ({ title, description, imageUrl }: CmpBannerProps) => {
  return (
    <div className="banner-container border rounded-xl p-6 bg-white shadow-sm">
      {imageUrl && <Image src={imageUrl} alt={title} width={200} height={200} />}
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && <p className="text-gray-500">{description}</p>}
    </div>
  );
};