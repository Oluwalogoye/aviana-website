import { imageQueryString, resolveReferencesQuery } from "./general";

const contentSectionQueryString = `
  ... on ContentSection {
    title
    images {
      ${imageQueryString}
    }
    descriptionsRaw
  }
`

export default contentSectionQueryString;