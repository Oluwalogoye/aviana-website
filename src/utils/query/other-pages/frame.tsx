import { graphqlUrl } from "../../other";
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType";
import { FrameType } from "../../types/frameTypes";
import frameQueryString from "../strings/frameQueryString";
import { convertPageTypeToContentQuery } from "../strings/general";

const fetchFrameData : (id: string, pageType: SanityPageType) => Promise<FrameType> = async (id: string, pageType: SanityPageType) => {
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          frameQueryString
        )}
      }
    }
  `

  console.log("frame query", query)

  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id } }),
  })

  const result = await response.json();
  console.log("result", result);
  return resultBasedOnPageType(pageType, result) as FrameType;
}

export default fetchFrameData;