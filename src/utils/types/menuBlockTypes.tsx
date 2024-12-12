import { PageType } from "./pageTypes"
import { SanityImage } from "./sanityTypes";

export interface MenuBlockType {
  title?: string;
  menuItems: MenuItemType[];
  logo: SanityImage;
}

export interface MenuItemType {
  name?: string;
  link: PageType;
  homePage: boolean;
  pressPage: boolean;
  slug: string;
}