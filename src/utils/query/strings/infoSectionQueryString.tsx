import { imageQueryString, plainTextQueryString } from "./general";

const infoSectionQueryString = `
    ... on InfoSection {
      address
      addressLink
      phoneNumber
      emailAddress
      descriptionsRaw
      backgroundImage {
        ${imageQueryString}
      }
    }
`

export default infoSectionQueryString;