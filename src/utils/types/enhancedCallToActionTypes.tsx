import { PlainTextBlock, SanityImage } from "./sanityTypes";

export interface EnhancedCallToActionType {
  backgroundImage: SanityImage;
  enhancedItems: EnhancedItemType[]
}

export interface EnhancedItemType {
  title: string;
  descriptionsRaw: PlainTextBlock[];
  image: SanityImage;
}