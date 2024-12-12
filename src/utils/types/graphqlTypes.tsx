import { MenuBlockType } from "./menuBlockTypes";
import { AboutUsBlockContent, ContactUsBlockContent, HomePageBlockContent, OurLeaderPageBlockContent, OurTeamPageBlockContent, ParticipatePageBlockContent, PressPageBlockContent } from "./pageBlockTypes";
import { PressReleaseType, PressSectionType } from "./pressSectionTypes";

export interface SanityPageBlockData {
  data: {
    PageBlock: {
      homePageContent?: HomePageBlockContent;
      participatePageContent?: ParticipatePageBlockContent;
      aboutUsContent?: AboutUsBlockContent;
      ourTeamPageContent?: OurTeamPageBlockContent;
      pressPageContent?: PressPageBlockContent;
      ourLeaderPageContent?: OurLeaderPageBlockContent;
      contactUsContent?: ContactUsBlockContent;
    }
  }
}

export interface MenuBlockData {
  allMenuBlock: MenuBlockType[];
} 

export interface PressReleaseData {
  allPressRelease: PressReleaseType[];
}