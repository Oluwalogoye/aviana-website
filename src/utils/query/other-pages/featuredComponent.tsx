import { graphqlUrl } from '../../other'
import { 
  resultBasedOnPageType,
  SanityPageType
} from '../../other/sanityPageType'

import { 
  FeaturedComponentType
} from '../../types/featuredComponent'
import featuredComponentQueryString from '../strings/featuredComponentQueryString'

import { 
  convertPageTypeToContentQuery
} from '../strings/general'

const fetchFeaturedComponentData : (id: string, pageType: SanityPageType) => Promise<FeaturedComponentType> = async (id, pageType) => {
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          featuredComponentQueryString
        )}
      }
    }
  `

  console.log("featuredComponent query", query);

  const response = await fetch ( graphqlUrl , {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id } })
  })

  const result = await response.json();
  console.log("result", result);
  return resultBasedOnPageType(pageType, result) as FeaturedComponentType;
}

export default fetchFeaturedComponentData;