import { createClient } from "next-sanity";

export const SANITY_CONFIG = {
  projectId: "hhmmvq9g",
  dataset: "production",
  apiVersion: "2026-03-31",
  useCdn: true,
};

export const client = createClient(SANITY_CONFIG);