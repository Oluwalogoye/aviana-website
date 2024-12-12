import { PortableTextBlock } from "@portabletext/types";
import { SanityImage } from "./sanityTypes";
import { PageType } from "./pageTypes";
import React from 'react'

export interface NewsComponentType {
  title: string;
  newsItems: NewsItemType[]; 
  dots?: SanityImage;
}

export interface NewsItemType {
  title: string;
  imageSrc: SanityImage;
  captionRaw: PortableTextBlock[];
  buttonText?: string;
  link?: PageType;
}

export interface CardComponentType extends NewsItemType {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
