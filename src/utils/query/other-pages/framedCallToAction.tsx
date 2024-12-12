import { graphqlUrl } from "../../other";
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType";
import { FramedCallToActionType } from "../../types/framedCallToActionTypes";
import framedCallToActionQueryString from "../strings/framedCallToActionQueryString";
import { convertPageTypeToContentQuery } from "../strings/general";

const fetchFramedCallToActionData: (id: string, pageType: SanityPageType) => Promise<FramedCallToActionType> = async (id: string, pageType: SanityPageType) => {
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          framedCallToActionQueryString
        )}
      }
    }
  `

  console.log("framedCallToAction query", query);

  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id } })
  })

  const result = await response.json();
  console.log("result", result);
  return resultBasedOnPageType(pageType, result) as FramedCallToActionType;
}

export default fetchFramedCallToActionData;