import { imageQueryString, plainTextQueryString } from "./general"

const pegasusComponentQueryString = `
  ... on PegasusComponent {
    logo {
      ${imageQueryString}
    }
    title
    descriptionsRaw
    backgroundImage {
      ${imageQueryString}
    }
  }
`

export default pegasusComponentQueryString