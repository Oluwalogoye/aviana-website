import { graphqlUrl } from "../../other"
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType"
import { PegasusComponentType } from "../../types/pegasusComponentTypes"
import { convertPageTypeToContentQuery } from "../strings/general"
import pegasusComponentQueryString from "../strings/pegasusComponentQueryString"

const fetchPegasusComponentData: (id: string, pageType: SanityPageType) => Promise<PegasusComponentType> = async (id: string, pageType: SanityPageType) => {
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          pegasusComponentQueryString
        )}
      }
    }
  `

  console.log("pegasusComponent query", query);


  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id } }),
  })

  const result = await response.json();
  console.log("result", result);
  return resultBasedOnPageType(pageType, result) as PegasusComponentType;
}

export default fetchPegasusComponentData;

