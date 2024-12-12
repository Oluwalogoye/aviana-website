import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from './layout';
import ScrollToTop from './other/utils/ScrollToTop';
import PageBlockRenderer from './block-renderer/PageBlockRenderer';

import { DEFAULT_PAGE_ID, DEFAULT_PRESS_SLUG } from '../utils/other';
import fetchHomePageData from '../utils/query/home-page';
import { PageType } from '../utils/types/pageTypes';
import { MenuBlockData } from '../utils/types/graphqlTypes';
import { MenuBlockType } from '../utils/types/menuBlockTypes';

import {
  graphqlUrl
} from '../utils/other/index'

const HomePage = () => {
  const query = `
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
              pageBlocks {
                _id
                pageType
                blockType
              }
            }
          }
          homePage
          pressPage
          slug
        }
      }
    }
  `
  const [data, setData] = useState<MenuBlockData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(graphqlUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query }),
        });
  
        const result = await response.json();
        console.log("HomePage result", result)
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const [localPageData, setLocalPageData] = useState<PageType | null>(null);

  const [pageData, setPageData] = useState<PageType | null>(null);

  const [pressPageSlug, setPressPageSlug] = useState(DEFAULT_PRESS_SLUG);

  // Initialize local home page data from query results
  useEffect(() => {
    if (data == null)
      return

    const localHomePage: PageType = { _id: DEFAULT_PAGE_ID, title: '', pageBlocks: [] };
    let localPressPageSlug = DEFAULT_PRESS_SLUG;

    data.allMenuBlock.forEach((menuBlock) => {
      if (!localHomePage.menuBlock) {
        localHomePage.menuBlock = menuBlock;
      }
      menuBlock.menuItems.forEach((menuItem) => {
        if (menuItem.homePage && menuItem.link?._id) {
          localHomePage._id = menuItem.link._id;
          localHomePage.title = `${menuItem.name}: ${menuItem.link?.title}: ${menuItem.link._id}`;
          localHomePage.pageBlocks = menuItem.link.pageBlocks;
        }
        if (menuItem.pressPage) {
          localPressPageSlug = menuItem.slug;
        }
      });
    });

    setLocalPageData(localHomePage);
    setPressPageSlug(localPressPageSlug);
  }, [data]);

  useEffect(() => {

    if (localPageData) {

      console.log("about to call fetchHomePageData with localPageData", localPageData)
      
      fetchHomePageData(localPageData).then((fetchedData) => {
        fetchedData.menuBlock = localPageData.menuBlock

        console.log("fetchedData", fetchedData);

        setPageData(fetchedData)
      })

    }

  }, [localPageData])
  // // Fetch additional home page data when ID changes
  // useEffect(() => {
  //   if (pageData?.id && pageData.id !== DEFAULT_PAGE_ID) {
  //     fetchHomePageData(pageData).then((fetchedData) => {
  //       // Update pageData only if fetched data differs
  //       if (JSON.stringify(fetchedData) !== JSON.stringify(pageData)) {
  //         setPageData(fetchedData);
  //       }
  //     });
  //   }
  // }, [pageData?.id]);

  // Fallback if data is incomplete
  if (!pageData || !pageData.pageBlocks || !pageData.menuBlock) {
    return <div>Loading...</div>;
  }

  return (
    <Layout menuBlock={pageData.menuBlock as MenuBlockType}>
      {/* {pageData.pageBlocks.map(pageData => (
        <p>{JSON.stringify(pageData)}</p>
      ))} */}
      <ScrollToTop>
        <PageBlockRenderer pageBlocks={pageData.pageBlocks} pressPageSlug={pressPageSlug} />
      </ScrollToTop>
    </Layout>
  );
};

export default HomePage;
