import { imageQueryString, linkQueryString, resolveReferencesQuery } from "./general"

const newsComponentQueryString = `
  ... on NewsComponent {
    title
    newsItems {
      title
      imageSrc {
        ${imageQueryString}
      }
      captionRaw
      buttonText
      link {
        ${linkQueryString}
      }
    }
  }
`

export default newsComponentQueryString