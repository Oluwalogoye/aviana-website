import { SanityImage } from "./sanityTypes";
import { PlainTextBlock } from './sanityTypes'

export interface PeopleType {
  title: string;
  everyone: PersonType[]; 
}

export interface PersonType {
  name: string;
  image: SanityImage;
  title: string;
  descriptionRaw: PlainTextBlock[]; 
}