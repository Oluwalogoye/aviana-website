import { graphqlUrl } from "../../other/index"
import { SanityBlockType } from "../../other/sanityBlockType"
import { BlockContentType, resultBasedOnPageType, SanityPageType } from '../../other/sanityPageType'
import { PageType } from "../../types/pageTypes"
import callToActionQueryString from "../strings/callToActionQueryString"
import { convertPageTypeToContentQuery } from "../strings/general"
import infoComponentQueryString from "../strings/infoComponentQueryString"
import fetchCallToActionData from "./callToAction"
import fetchContactFormData from "./contactForm"
import fetchContentSectionData from "./contentSection"
import fetchEnhancedCallToActionData from "./enhancedCallToAction"
import fetchFeaturedComponentData from './featuredComponent'
import fetchFrameData from "./frame"
import fetchFramedCallToActionData from "./framedCallToAction"
import fetchInfoComponentData from "./infoComponent"
import fetchInfoSectionData from "./infoSection"
import fetchNewsComponentData from "./newsComponent"
import fetchPegasusComponentData from "./pegasusComponent"
import fetchPeopleData from "./people"
import fetchPressSectionData from "./pressSection"
import fetchProfileData from "./profile"

export const fetchBlockData: (id: string, blockType: SanityBlockType, pageType: SanityPageType) => Promise<BlockContentType> = async (id: string, blockType: SanityBlockType, pageType: SanityPageType) => {
  switch (blockType) {
    case 'callToAction':
      return fetchCallToActionData(id, pageType);
    case 'infoComponent':
      return fetchInfoComponentData(id, pageType);
    case 'pegasusComponent':
      return fetchPegasusComponentData(id, pageType);
    case 'newsComponent':
      return fetchNewsComponentData(id, pageType);
    case 'featuredComponent':
      return fetchFeaturedComponentData(id, pageType);
    case 'frame':
      return fetchFrameData(id, pageType);
    case 'framedCallToAction':
      return fetchFramedCallToActionData(id, pageType);
    case 'contentSection':
      return fetchContentSectionData(id, pageType);
    case 'enhancedCallToAction':
      return fetchEnhancedCallToActionData(id, pageType);
    case 'people':
      return fetchPeopleData(id, pageType);
    case 'pressSection':
      return fetchPressSectionData(id, pageType);
    case 'profile':
      return fetchProfileData(id, pageType);
    case 'infoSection':
      return fetchInfoSectionData(id, pageType);
    case 'contactForm':
      return fetchContactFormData(id, pageType);
  }
}

export const fetchPageData: (id: string) => Promise<PageType> = async (id: string) => {
  const query = `
    query($id: ID!) {
      Page(id: $id) {
        _id
    		title
    		pageBlocks {
          _id
          blockType
          pageType
        }
      }
    }
  `

  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ query, variables: { id } }),
  })

  console.log("fetchPageData query", query);

  const result = await response.json();
  console.log("result", result);
  return result?.data?.Page
}