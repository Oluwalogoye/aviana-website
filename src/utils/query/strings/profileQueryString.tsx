import { imageQueryString, plainTextQueryString } from "./general";

const profileQueryString = `
    ... on Profile {
      name
      image {
        ${imageQueryString}
      }
      descriptionsRaw
      organizationInfo {
        name
        city
        state
      }
    }
`

export default profileQueryString;