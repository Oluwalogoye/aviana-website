export type HomePageBlockType = 
  "callToAction" |
  "newsComponent" |
  "infoComponent" |
  "pegasusComponent" |
  "featuredComponent";

type OtherPagesBlockType = 
  "frame" | 
  "framedCallToAction" | 
  "contentSection" |
  "enhancedCallToAction" | 
  "people" | 
  "pressSection" | 
  "profile" | 
  "infoSection" | 
  "contactForm" ;

export type SanityBlockType = 
  HomePageBlockType |
  OtherPagesBlockType 