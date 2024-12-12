import { graphql } from "gatsby";
import { resultBasedOnPageType, SanityPageType } from "../../other/sanityPageType";
import { ContactFormType } from "../../types/contactFormTypes";
import contactFormQueryString from "../strings/contactFormQueryString";
import { convertPageTypeToContentQuery } from "../strings/general";
import { graphqlUrl } from "../../other";

const fetchContactFormData : (id: string, pageType: SanityPageType) => Promise<ContactFormType> = async (id: string, pageType: SanityPageType) => {
  const query = `
    query($id: ID!) {
      PageBlock(id: $id) {
        ${convertPageTypeToContentQuery(
          pageType,
          contactFormQueryString
        )}
      }
    }
  `

  console.log("contactForm query", query)

  console.log("contactForm id", id)

  const reponse = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id } }),
  })

  const result = await reponse.json();
  console.log("result", result);
  return resultBasedOnPageType(pageType, result) as ContactFormType
}

export default fetchContactFormData;