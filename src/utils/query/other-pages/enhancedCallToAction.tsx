import { graphqlUrl } from "../../other";
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType";
import { EnhancedCallToActionType } from "../../types/enhancedCallToActionTypes";
import enhancedCallToQueryString from "../strings/enhancedCallToActionQueryString";
import { convertPageTypeToContentQuery } from "../strings/general";

const fetchEnhancedCallToActionData: (id: string, pageType: SanityPageType) => Promise<EnhancedCallToActionType> = async (id: string, pageType: SanityPageType) => {
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          enhancedCallToQueryString
        )}
      }
    }
  `

  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id } }),
  })

  const result = await response.json();
  console.log("result", result);
  return resultBasedOnPageType(pageType, result) as EnhancedCallToActionType;
}

export default fetchEnhancedCallToActionData;