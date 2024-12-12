// src/templates/sermonTemplate.js

import React from "react";
import Layout from "../components/layout";
import { MenuBlockType } from "../utils/types/menuBlockTypes";
import ScrollToTop from "../components/other/utils/ScrollToTop";
import PressRelease from "../components/press-release/PressRelease";
import { PressReleaseType } from "../utils/types/pressSectionTypes";

const SermonTemplate = ({ pageContext }: { pageContext: {content: PressReleaseType, menuBlock: MenuBlockType}}) => {
  return (
    <Layout menuBlock={pageContext.menuBlock}>
      <ScrollToTop>
        <PressRelease content={pageContext.content}/>
      </ScrollToTop>
    </Layout>
  )
};

export default SermonTemplate;
