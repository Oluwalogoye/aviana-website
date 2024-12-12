import React, {useState, useEffect} from "react";
import { PageType } from "../utils/types/pageTypes";
import { fetchBlockData, fetchPageData } from "../utils/query/other-pages";
import { AboutUsBlockContent, ContactUsBlockContent, HomePageBlockContent, OurLeaderPageBlockContent, OurTeamPageBlockContent, PageBlockType, ParticipatePageBlockContent, PressPageBlockContent } from "../utils/types/pageBlockTypes";
import PageBlockRenderer from "../components/block-renderer/PageBlockRenderer";
import { SanityBlockType } from "../utils/other/sanityBlockType";
import { BlockContentType, SanityPageType } from "../utils/other/sanityPageType";
import Header from "../components/header/Header";
import { MenuBlockType } from "../utils/types/menuBlockTypes";
import Layout from "../components/layout";
import ScrollToTop from "../components/other/utils/ScrollToTop";

const convertBlockContentTypeToPageBlockType: (id: string, blockType: SanityBlockType, pageType: SanityPageType, blockContent: BlockContentType) => PageBlockType = 
                                              (id: string, blockType: SanityBlockType, pageType: SanityPageType, blockContent: BlockContentType) => {
  const result: PageBlockType = {
    _id: id,
    blockType: blockType,
    pageType: pageType
  }

  switch (pageType) {
    case "homePage":
      result.homePageContent = blockContent as HomePageBlockContent;
      break;
    case "participatePage":
      result.participatePageContent = blockContent as ParticipatePageBlockContent;
      break;
    case "aboutUsPage":
      result.aboutUsPageContent = blockContent as AboutUsBlockContent;
      break;
    case "ourTeamPage":
      result.ourTeamPageContent = blockContent as OurTeamPageBlockContent;
      break;
    case "pressPage":
      result.pressPageContent = blockContent as PressPageBlockContent;
      break;
    case "ourLeaderPage":
      result.ourLeaderPageContent = blockContent as OurLeaderPageBlockContent;
      break;
    case "contactUsPage":
      result.contactUsContent = blockContent as ContactUsBlockContent;
      break;
  }

  return result;
}

const BlockRenderer = ({id, blockType, pageType, pressPageSlug}: 
                        { id: string, 
                          blockType: SanityBlockType, 
                          pageType: SanityPageType,
                          pressPageSlug: string
                        }) => {
  const [block, setBlock] = useState<PageBlockType | null>(null);
  console.log("BlockRenderer props", {id, blockType, pageType, pressPageSlug})
  useEffect(() => {
    fetchBlockData(id, blockType, pageType).then((fetchedBlockData: BlockContentType) => {
      console.log("fetchedBlockData", fetchedBlockData)
      setBlock(
        convertBlockContentTypeToPageBlockType(
          id,
          blockType,
          pageType,
          fetchedBlockData
        )
      )
    })
  }, [id, blockType]);

  if (!block) return (<div>Loading block...</div>)
    
  // return <p>{JSON.stringify(block)}</p>
  return <PageBlockRenderer pageBlocks={[block]} pressPageSlug={pressPageSlug}/>  
}

const Page = ({ id, pressPageSlug }: { id: string; pressPageSlug: string }) => {
  const [pageBlocks, setPageBlocks] = useState<PageBlockType[] | null>(null);

  useEffect(() => {
    fetchPageData(id).then(async (pageData: PageType) => {
      if (!pageData.pageBlocks) return;

      const blockPromises = pageData.pageBlocks.map(async (pageBlock) => {
        const fetchedBlockData = await fetchBlockData(
          pageBlock._id,
          pageBlock.blockType as SanityBlockType,
          pageBlock.pageType as SanityPageType
        );

        return convertBlockContentTypeToPageBlockType(
          pageBlock._id,
          pageBlock.blockType as SanityBlockType,
          pageBlock.pageType as SanityPageType,
          fetchedBlockData
        );
      });

      const blocks = await Promise.all(blockPromises);
      
      console.log("Page blocks", blocks);

      setPageBlocks(blocks);
    });
  }, [id]);

  if (!pageBlocks) return <div>Loading page...</div>;

  // return <p>{JSON.stringify(pageBlocks)}</p>
  return <PageBlockRenderer pageBlocks={pageBlocks} pressPageSlug={pressPageSlug} />;
};

const PageTemplate = ({ pageContext }: { pageContext: {id: string, menuBlock: MenuBlockType, pressPageSlug: string}}) => {
  console.log("pageContext", pageContext)
  return (
    <Layout menuBlock={pageContext.menuBlock}>
      <ScrollToTop>
        <Page id={pageContext.id} 
        pressPageSlug={pageContext.pressPageSlug} />
      </ScrollToTop>
    </Layout>
  )
};

export default PageTemplate;