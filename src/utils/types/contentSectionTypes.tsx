import { PortableTextBlock } from "@portabletext/types";
import { SanityImage } from "./sanityTypes";

export interface ContentSectionType {
  title?: string;
  images?: SanityImage[] | null; // Images can be an array or null
  descriptionsRaw: PortableTextBlock[]; // Descriptions are always required
}