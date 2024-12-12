/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path")
import type { GatsbyNode } from "gatsby";

import type { 
  MenuBlockData, PressReleaseData
} from './src/utils/types/graphqlTypes'

import {
  graphqlUrl
} from './src/utils/other/index'

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {

  const { createPage } = actions
  
  const pageQuery = `
    query {
      allMenuBlock {
          title
          logo {
            asset {
              url
            }
          }
          menuItems {
            name
            link {
              ... on Page {
                _id
                title
              }
            }
            homePage
            pressPage
            slug
          }
        }      
    }  
  `

  let response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ query: pageQuery }),
  })

  const pageResult = await response.json();

  // Handle errors in the query
  if (pageResult.errors) {
    console.error(pageResult.errors)
    throw new Error('Error fetching menuBlocks from Sanity')
  }

  // extract pressPageSlug
  let sermonsPath: string = '/releases';
  pageResult.data?.allMenuBlock.forEach((menuBlock) => {
    menuBlock.menuItems.forEach((menuItem) => {
      if (menuItem.pressPage) {
        sermonsPath = menuItem.slug;
      }
    })
  })

  // create regular pages
  pageResult.data?.allMenuBlock.forEach((menuBlock) => {
    menuBlock.menuItems.forEach((menuItem) => {
      if (menuItem.homePage) return;
      if (menuItem.pressPage) {

        console.log(`About to create page with following params, id: ${menuItem.link?._id}, menuBlock: ${JSON.stringify(menuBlock)}, pressPageSlug: ${sermonsPath}`)

      }
      createPage({
        path: `${menuItem.slug}`,
        component: path.resolve("./src/templates/page.tsx"),
        context: {
          id: menuItem.link?._id,
          menuBlock: menuBlock,
          pressPageSlug: sermonsPath,
        }
      })
    })
  })

  const menuBlock = pageResult.data?.allMenuBlock[0]
  const sermonsQuery = `
    query {
      allPressRelease {
        title
        image {
          asset {
            url
          }          
        }
        descriptionsRaw
        shortDescriptionRaw
      }
    }
  `

  response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ query: sermonsQuery }),
  })

  const sermonsResult = await response.json();

  // handle errors in the query
  if (sermonsResult.errors) {
    console.log(sermonsResult.errors)
    throw new Error ('Error fetching pressSections from Sanity')
  }
  
  // create press releases 
  sermonsResult.data?.allPressRelease.forEach((pressRelease) => {
    const { title } = pressRelease;
    const pathTitle = encodeURIComponent(title.replace(/[\s.,]+/g, '-'));
    createPage({
      path: `${sermonsPath}/${pathTitle}`,
      component: path.resolve("./src/templates/sermonTemplate.tsx"),
      context: {
        content: pressRelease,
        menuBlock: menuBlock,
      }
    })
  })



}

