import { imageQueryString } from './general';

const featuredComponentQueryString = `
  ... on FeaturedComponent {
    title
    featuredCompanies {
      logo {
        ${imageQueryString}
      }
      url
    }
  }
`

export default featuredComponentQueryString;