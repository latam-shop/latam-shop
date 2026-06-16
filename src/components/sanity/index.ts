import { BANNER_PARAMS } from "./cmp-banner/params";
import { SanityModuleData } from "./types";

const ALL_COMPONENTS_PARAMS = `
  ${BANNER_PARAMS},
`;

export const GLOBAL_PAGE_QUERY = `*[_type in ["banner"]]{
  _id,
  _type,
  ${ALL_COMPONENTS_PARAMS}
}`;

export { SanityModuleResolver } from "./resolver";
export type { SanityModuleData };