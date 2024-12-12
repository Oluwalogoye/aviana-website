import { imageQueryString } from "./general";
import { plainTextQueryString } from './general';

const peopleQueryString = `
  ... on People {
    title
    everyone {
      name
      image {
        ${imageQueryString}
      }
      title
      descriptionRaw
    }
  }
`

export default peopleQueryString;