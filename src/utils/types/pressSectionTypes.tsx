import { PortableTextBlock } from "@portabletext/types";
import { SanityImage } from "./sanityTypes";

export interface PressSectionType {
  title: string;
  pressReleases: PressReleaseType[];
  decorativeImage?: SanityImage;
}

export interface PressReleaseType {
  title: string;
  image: SanityImage;
  descriptionsRaw: PortableTextBlock[];
  shortDescriptionRaw: PortableTextBlock[];
}