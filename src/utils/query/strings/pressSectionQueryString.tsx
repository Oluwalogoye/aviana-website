import { imageQueryString, resolveReferencesQuery } from "./general";

const pressSectionQueryString = `
  ... on PressSection {
    title
    pressReleases {
      title
      image {
        ${imageQueryString}
      }
      descriptionsRaw
      shortDescriptionRaw
    }
    decorativeImage {
      ${imageQueryString}
    }
  }
`

export default pressSectionQueryString;