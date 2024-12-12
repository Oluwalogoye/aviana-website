import { imageQueryString, plainTextQueryString, resolveReferencesQuery } from "./general";

const frameQueryString = `
  ... on Frame {
    featuredItems {
      title
      descriptionRaw
      image {
        ${imageQueryString}
      }
    }
  }
`

export default frameQueryString;