import { MenuBlockType } from "./menuBlockTypes";
import { PageBlockType } from "./pageBlockTypes";

export interface PageType {
  _id: number;
  title?: string;
  pageBlocks?: PageBlockType[];
  menuBlock?: MenuBlockType;
}