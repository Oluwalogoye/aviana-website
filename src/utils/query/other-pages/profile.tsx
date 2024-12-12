import { graphqlUrl } from "../../other";
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType";
import { ProfileType } from "../../types/profileTypes";
import { convertPageTypeToContentQuery } from "../strings/general";
import profileQueryString from "../strings/profileQueryString";

const fetchProfileData: (id: string, pageType: SanityPageType) => Promise<ProfileType> = async (id: string, pageType: SanityPageType) => {
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          profileQueryString
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
  return resultBasedOnPageType(pageType, result) as ProfileType;
}

export default fetchProfileData;