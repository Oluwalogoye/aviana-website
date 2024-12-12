import { graphqlUrl } from "../../other";
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType";
import { InfoComponentType } from "../../types/infoComponentTypes";
import { convertPageTypeToContentQuery } from "../strings/general";
import infoComponentQueryString from "../strings/infoComponentQueryString";

const fetchInfoComponentData: (id: string, pageType: SanityPageType) => Promise<InfoComponentType> = async (id: string, pageType: SanityPageType) => {
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          infoComponentQueryString
        )}
      }
    }
  `

  console.log("infoComponent query", query);


  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id } })
  })

  const result = await response.json();
  console.log("result", result);
  return resultBasedOnPageType(pageType, result) as InfoComponentType;
}

export default fetchInfoComponentData;