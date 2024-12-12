import { graphqlUrl } from "../../other";
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType";
import { CallToActionType } from "../../types/callToActionTypes";
import callToActionQueryString from "../strings/callToActionQueryString";
import { convertPageTypeToContentQuery } from "../strings/general";

const fetchCallToActionData: (id: string, pageType: SanityPageType) => Promise<CallToActionType> = async (id: string, pageType: SanityPageType) => { 
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          callToActionQueryString
        )}
      }
    }

  `

  console.log("callToAction query", query);

  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id } })
  })

  const result = await response.json();
  console.log("result", result);
  return resultBasedOnPageType(pageType, result) as CallToActionType
}

export default fetchCallToActionData;