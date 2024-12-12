import { graphqlUrl } from "../../other";
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType";
import { InfoSectionType } from "../../types/infoSection";
import { convertPageTypeToContentQuery } from "../strings/general";
import infoSectionQueryString from "../strings/infoSectionQueryString";

const fetchInfoSectionData: (id: string, pageType: SanityPageType) => Promise<InfoSectionType> = async (id: string, pageType: SanityPageType) => {
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          infoSectionQueryString
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
  return resultBasedOnPageType(pageType, result) as InfoSectionType;
}

export default fetchInfoSectionData;