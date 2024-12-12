import { PageType } from "./pageTypes";
import { PlainTextBlock, SanityImage } from "./sanityTypes";

export interface CallToActionType {
  logo?: SanityImage;
  title?: string;
  descriptionsRaw?: PlainTextBlock[];
  hideLogo?: boolean;
  backgroundImage?: SanityImage;
  link?: PageType;
  buttonName?: string;
}