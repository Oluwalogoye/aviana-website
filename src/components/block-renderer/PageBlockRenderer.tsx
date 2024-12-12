// src/components/PageBlockRenderer.tsx
import React from 'react'
import { PageBlockType } from '../../utils/types/pageBlockTypes'

import CallToAction from '../call-to-action/CallToAction';
import { CallToActionType } from '../../utils/types/callToActionTypes';

import NewsComponent from '../news-component/NewsComponent'
import { NewsComponentType } from '../../utils/types/newsComponentTypes';

import InfoComponent from '../info-component/InfoComponent'
import { InfoComponentType } from '../../utils/types/infoComponentTypes'

import PegasusComponent from '../pegasus-component/PegasusComponent';
import { PegasusComponentType } from '../../utils/types/pegasusComponentTypes';

import Frame from '../other/frame/Frame';
import { FrameType } from '../../utils/types/frameTypes';

import FramedCallToAction from '../other/framed-call-to-action/FramedCallToAction';
import { FramedCallToActionType } from '../../utils/types/framedCallToActionTypes';

import ContentSection from '../other/content-section/ContentSection';
import { ContentSectionType } from '../../utils/types/contentSectionTypes';

import EnhancedCallToAction from '../other/enhanced-call-to-action/EnhancedCallToAction';
import { EnhancedCallToActionType } from '../../utils/types/enhancedCallToActionTypes';

import { PeopleType } from '../../utils/types/peopleTypes';
import People from '../other/people/People';

import PressSection from '../press-section/PressSection';
import { PressSectionType } from '../../utils/types/pressSectionTypes';

import Profile from '../other/profile/Profile';
import { ProfileType } from '../../utils/types/profileTypes';

import InfoSection from '../contact-us/InfoSection/InfoSection';
import { InfoSectionType } from '../../utils/types/infoSection';

import ContactForm from '../contact-us/ContactForm/ContactForm';
import { ContactFormType } from '../../utils/types/contactFormTypes';
import FeaturedComponent from '../other/featured-component/FeaturedComponent';
import { FeaturedComponentType } from '../../utils/types/featuredComponent';

const Block = ({ block, pressPageSlug }: {block: PageBlockType, pressPageSlug: string }) => {
  const { 
    contactUsContent, 
    ourLeaderPageContent, 
    pressPageContent, 
    ourTeamPageContent, 
    aboutUsPageContent, 
    participatePageContent, 
    homePageContent,
    pageType, 
    blockType } = block;

  const hasBlockContent = contactUsContent || ourLeaderPageContent || pressPageContent || ourTeamPageContent || aboutUsPageContent || participatePageContent;

  if (!blockType && !hasBlockContent && !pageType) {
    return (<div>Block: blockContent null</div>)
  }
  
  switch(pageType) {
    case 'homePage':
      switch (blockType) {
        case 'callToAction':
          return <CallToAction content={homePageContent as CallToActionType} />
        case 'newsComponent':
          return <NewsComponent content={homePageContent as NewsComponentType} /> 
        case 'infoComponent':
          return <InfoComponent content={homePageContent as InfoComponentType} />
        case 'pegasusComponent':
          return <PegasusComponent content={homePageContent as PegasusComponentType} />
        case 'featuredComponent':
          return <FeaturedComponent content={homePageContent as FeaturedComponentType} />
      }
    case 'participatePage':
      switch (blockType) {
        case 'callToAction':
          return <CallToAction content={participatePageContent as CallToActionType} />
        case 'frame':
          return <Frame content={participatePageContent as FrameType} />
      }
    case 'aboutUsPage':
      switch (blockType) {
        case 'framedCallToAction':
          return <FramedCallToAction content={aboutUsPageContent as FramedCallToActionType} />;
        case 'contentSection':
          return <ContentSection content={aboutUsPageContent as ContentSectionType} />;
        case 'enhancedCallToAction':
          return <EnhancedCallToAction content={aboutUsPageContent as EnhancedCallToActionType} />;
      }
      break;
    case 'ourTeamPage':
      switch (blockType) {
        case 'people':
          return <People content={ourTeamPageContent as PeopleType} />;
      }
    case 'pressPage':
      switch (blockType) {
        case 'pressSection':
          console.log("About to return Press Section with block", block)
          return <PressSection pressPageSlug={pressPageSlug} content={pressPageContent as PressSectionType} />;
      }
    case 'ourLeaderPage': 
      switch (blockType) {
        case 'profile':
          return <Profile content={ourLeaderPageContent as ProfileType} />
      }
    case 'contactUsPage':
      switch (blockType) {
        case 'infoSection':
          return <InfoSection content={contactUsContent as InfoSectionType} />;
        case 'contactForm':
          return <ContactForm content={contactUsContent as ContactFormType} />;
      }
  }
}

const PageBlockRenderer = ({ pageBlocks, pressPageSlug } : { pageBlocks: PageBlockType[], pressPageSlug: string }) => {
  return (
    <div>
      {pageBlocks.map((block: PageBlockType, index: number) => (
        <Block key={index} block={block} pressPageSlug={pressPageSlug}/>
        // <p key={index}>{JSON.stringify(block)}</p>
      ))}
    </div>
  )
}

export default PageBlockRenderer;