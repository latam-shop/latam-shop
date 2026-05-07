import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

if (!projectId) {
  throw new Error("ERROR: La variable NEXT_PUBLIC_SANITY_PROJECT_ID no está definida en el .env");
}

export const SANITY_CONFIG = {
  projectId: projectId.trim(),
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN === "true",
};

export const client = createClient(SANITY_CONFIG);