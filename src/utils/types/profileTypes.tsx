import { PlainTextBlock, SanityImage } from "./sanityTypes";

export interface ProfileType {
  name: string;
  image: SanityImage;
  descriptions: PlainTextBlock[];
  organizationInfo: Organization;
}

export interface Organization {
  name: string;
  city: string;
  state: string;
}