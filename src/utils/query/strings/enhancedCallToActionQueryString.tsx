import { imageQueryString, plainTextQueryString } from "./general"

const enhancedCallToQueryString = `
  ... on EnhancedCallToAction {
    backgroundImage {
      ${imageQueryString}
    }
    enhancedItems {
      title
      descriptionsRaw
      image {
        ${imageQueryString}
      }
    }
  }
`

export default enhancedCallToQueryString