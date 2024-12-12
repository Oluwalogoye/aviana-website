import { PlainTextBlock, SanityImage } from "./sanityTypes";

export interface FrameType {
  featuredItems: {
    title: string;
    descriptionRaw: PlainTextBlock[];
    image: SanityImage 
  } []
}