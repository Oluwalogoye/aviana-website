import { graphqlUrl } from "../../other";
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType";
import { PressSectionType } from "../../types/pressSectionTypes";
import { convertPageTypeToContentQuery } from "../strings/general";
import pressSectionQueryString from "../strings/pressSectionQueryString";

const fetchPressSectionData: (id: string, pageType: SanityPageType) => Promise<PressSectionType>  = async (id: string, pageType: SanityPageType) => {
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          pressSectionQueryString
        )}
      }
    }
  `

  console.log("press section query", query)

  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id } }),
  })

  const result = await response.json();
  console.log("result", result);
  return resultBasedOnPageType(pageType, result) as PressSectionType;
}

export default fetchPressSectionData;