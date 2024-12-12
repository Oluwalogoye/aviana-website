import { graphqlUrl } from "../../other"
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType"
import { PeopleType } from "../../types/peopleTypes"
import { convertPageTypeToContentQuery } from "../strings/general"
import peopleQueryString from "../strings/peopleQueryString"

const fetchPeopleData: (id: string, pageType: SanityPageType) => Promise<PeopleType> = async (id: string, pageType: SanityPageType) => {
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          peopleQueryString
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
  return resultBasedOnPageType(pageType, result) as PeopleType;
}

export default fetchPeopleData;