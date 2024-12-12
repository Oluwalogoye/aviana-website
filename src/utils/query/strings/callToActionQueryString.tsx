import { imageQueryString, linkQueryString, plainTextQueryString } from "./general"

const callToActionQueryString = `
... on CallToAction {
  title
  descriptionsRaw
  hideLogo
  buttonName
  backgroundImage {
    ${imageQueryString}   
  }
  logo {
    ${imageQueryString}
  }
  link {
    ${linkQueryString}
  }
}
`

export default callToActionQueryString