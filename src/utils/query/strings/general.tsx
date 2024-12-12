import { pageTypeContentMap, SanityPageType } from "../../other/sanityPageType"

export const imageQueryString = `
  asset {
    url
    metadata {
      lqip
    }
  }
`

export const plainTextQueryString = `
  _type
  children {
    _type
    text
  }
`

export const linkQueryString = `
  ... on Page {
    _id
    title
    menuBlock {
      menuItems {
        ... on Menu {
          link {
            ... on Page {
              _id
            }
          }
          slug
        }
      }
    }
  }
`

export const convertPageTypeToContentQuery = (pageType: SanityPageType, body: string) => {  
  const contentName = pageTypeContentMap[pageType]
  return `
    ${contentName} {
      ${body}
    }
  `
}

export const resolveReferencesQuery = `
  resolveReferences: {maxDepth: 5}
`
