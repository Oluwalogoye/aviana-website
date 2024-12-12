import { graphqlUrl } from "../other";

import { 
  PageType
} from '../types/pageTypes'
import { 
  PageBlockType
} from '../types/pageBlockTypes'

import fetchCallToActionData from './other-pages/callToAction'
import fetchNewsComponentData from './other-pages/newsComponent'

import fetchInfoComponentData from './other-pages/infoComponent'
import fetchPegasusComponentData from './other-pages/pegasusComponent'

import fetchFeaturedComponentData from './other-pages/featuredComponent'

import { 
  SanityBlockType,
  HomePageBlockType
} from '../other/sanityBlockType'
import { 
  SanityPageType
} from '../other/sanityPageType'

import { 
  HomePageBlockContent
} from '../types/pageBlockTypes'

const fetchHomePageData = async (homePage: PageType) => {
  
  const filledHomePage: PageType = {_id: homePage._id};

  if (homePage.pageBlocks) {
    const homePagePageBlocks = await Promise.all(
      homePage.pageBlocks.map(({_id, blockType, pageType}) => {
        return fetchHomePageBlock(_id, blockType, pageType)
          .catch(error => {
            console.error("Error fetching menu item", error);
            return null;
          })
      })
    );
    
    filledHomePage.pageBlocks = homePagePageBlocks.filter(item => item != null);
  }

  return filledHomePage;
}

const fetchHomePageBlock: (_id: string, blockType: SanityBlockType, pageType: SanityPageType) => Promise<PageBlockType> = async (_id, blockType, pageType) => {
  
  blockType = blockType as HomePageBlockType;
  
  const result: PageBlockType = {
    _id: _id,
    blockType: blockType, 
    pageType: pageType 
  }
  
  const homePageBlockContent = await fetchHomePageBlockContent(
    _id, 
    blockType,
    pageType
  )
  
  result.homePageContent = homePageBlockContent;

  return result;

}

const fetchHomePageBlockContent: (_id: string, blockType: HomePageBlockType, pageType: SanityPageType) => Promise<any> = async (_id, blockType, pageType) => {
  switch (blockType) {
    case 'callToAction':
      return fetchCallToActionData(_id, pageType);
    case 'newsComponent':
      return fetchNewsComponentData(_id, pageType);
    case 'infoComponent':
      return fetchInfoComponentData(_id, pageType);
    case 'pegasusComponent':
      return fetchPegasusComponentData(_id, pageType);
    case 'featuredComponent':
      return fetchFeaturedComponentData(_id, pageType);
  }
}

export default fetchHomePageData;