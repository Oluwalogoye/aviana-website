import { PlainTextBlock, SanityImage } from "./sanityTypes";

export interface FramedCallToActionType {
  backgroundImg: SanityImage;
  framedItems: {
    title: string;
    descriptionRaw: PlainTextBlock[];
  }[]
}