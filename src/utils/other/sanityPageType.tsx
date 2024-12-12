import { SanityPageBlockData } from "../types/graphqlTypes";
import { AboutUsBlockContent, ContactUsBlockContent, HomePageBlockContent, OurLeaderPageBlockContent, OurTeamPageBlockContent, ParticipatePageBlockContent, PressPageBlockContent } from "../types/pageBlockTypes";

export const pageTypeContentMap = {
  homePage: 'homePageContent',  
  participatePage: 'participatePageContent',
  aboutUsPage: 'aboutUsContent',
  ourTeamPage: 'ourTeamPageContent',
  pressPage: 'pressPageContent',
  ourLeaderPage: 'ourLeaderPageContent',
  contactUsPage: 'contactUsContent',
};

export type SanityPageType = keyof typeof pageTypeContentMap;

export type BlockContentType = HomePageBlockContent | ParticipatePageBlockContent | AboutUsBlockContent | 
                              OurTeamPageBlockContent | PressPageBlockContent | OurLeaderPageBlockContent | 
                              ContactUsBlockContent

export const resultBasedOnPageType: (pageType: SanityPageType, result: SanityPageBlockData) => BlockContentType = (pageType: SanityPageType, result: SanityPageBlockData) => {
  switch (pageType) {
    case 'homePage':
      return result.data.PageBlock.homePageContent as HomePageBlockContent
    case 'participatePage':
      return result.data.PageBlock.participatePageContent as ParticipatePageBlockContent
    case 'aboutUsPage':
      return result.data.PageBlock.aboutUsContent as AboutUsBlockContent
    case 'ourTeamPage':
      return result.data.PageBlock.ourTeamPageContent as OurTeamPageBlockContent
    case 'pressPage':
      return result.data.PageBlock.pressPageContent as PressPageBlockContent
    case 'ourLeaderPage':
      return result.data.PageBlock.ourLeaderPageContent as OurLeaderPageBlockContent
    case 'contactUsPage':
      return result.data.PageBlock.contactUsContent as ContactUsBlockContent
  }
}