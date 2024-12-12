import { imageQueryString, plainTextQueryString } from "./general";

const framedCallToActionQueryString = `
  ... on FramedCallToAction {
    framedItems {
      title
      descriptionRaw
    }
    backgroundImg {
      ${imageQueryString}
    }
  }
`

export default framedCallToActionQueryString;