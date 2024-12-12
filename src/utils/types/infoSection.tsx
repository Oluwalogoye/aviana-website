import { PlainTextBlock, SanityImage } from "./sanityTypes";

export interface InfoSectionType {
  address: string;
  addressLink: string;
  phoneNumber: number;
  emailAddress: string;
  descriptionsRaw: PlainTextBlock[];
  backgroundImage: SanityImage
}