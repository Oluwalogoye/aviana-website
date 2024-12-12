import { graphqlUrl } from "../../other"
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType"
import { ContentSectionType } from "../../types/contentSectionTypes"
import contentSectionQueryString from "../strings/contentSectionQueryString"
import { convertPageTypeToContentQuery } from "../strings/general"

const fetchContentSectionData: (id: string, pageType: SanityPageType) => Promise<ContentSectionType> = async (id: string, pageType: SanityPageType) => {
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          contentSectionQueryString
        )}
      }
    }
  `

  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id }})
  })

  const result = await response.json();
  console.log("result", result);
  return resultBasedOnPageType(pageType, result) as ContentSectionType;
}

export default fetchContentSectionData;