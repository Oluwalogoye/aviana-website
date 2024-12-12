import { graphqlUrl } from "../../other"
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType"
import { NewsComponentType } from "../../types/newsComponentTypes"
import { convertPageTypeToContentQuery } from "../strings/general"
import newsComponentQueryString from "../strings/newsComponentQueryString"

const fetchNewsComponentData: (id: string, pageType: SanityPageType) => Promise<NewsComponentType> = async (id: string, pageType: SanityPageType) => {
  const query =  `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
            pageType,
            newsComponentQueryString
        )}
      }
    }
  `

  console.log("newsComponent query", query);


  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id } })
  })

  const result = await response.json();
  console.log("result", result);
  return resultBasedOnPageType(pageType, result) as NewsComponentType;
}

export default fetchNewsComponentData