import { SanityBlockType } from "../other/sanityBlockType";
import { SanityPageType } from "../other/sanityPageType";
import { CallToActionType } from "./callToActionTypes";
import { ContactFormType } from "./contactFormTypes";
import { ContentSectionType } from "./contentSectionTypes";
import { EnhancedCallToActionType } from "./enhancedCallToActionTypes";
import { FramedCallToActionType } from "./framedCallToActionTypes";
import { FrameType } from "./frameTypes";
import { InfoComponentType } from "./infoComponentTypes";
import { InfoSectionType } from "./infoSection";
import { NewsComponentType } from './newsComponentTypes'
import { PegasusComponentType } from "./pegasusComponentTypes";
import { PeopleType } from "./peopleTypes";
import { PressSectionType } from "./pressSectionTypes";
import { ProfileType } from "./profileTypes";
import { FeaturedComponentType } from './featuredComponent'

export interface PageBlockType {
  contactUsContent?: ContactUsBlockContent;
  ourLeaderPageContent?: OurLeaderPageBlockContent;
  pressPageContent?: PressPageBlockContent;
  ourTeamPageContent?: OurTeamPageBlockContent;
  aboutUsPageContent?: AboutUsBlockContent;
  participatePageContent?: ParticipatePageBlockContent;
  homePageContent?: HomePageBlockContent;
  blockType: SanityBlockType;
  _id: string;
  pageType: SanityPageType;
}

export type HomePageBlockContent = CallToActionType | NewsComponentType | InfoComponentType | PegasusComponentType | FeaturedComponentType;
export type ParticipatePageBlockContent = CallToActionType | FrameType
export type AboutUsBlockContent = FramedCallToActionType | ContentSectionType | EnhancedCallToActionType
export type OurTeamPageBlockContent = PeopleType
export type PressPageBlockContent = PressSectionType
export type OurLeaderPageBlockContent = ProfileType
export type ContactUsBlockContent = InfoSectionType | ContactFormType