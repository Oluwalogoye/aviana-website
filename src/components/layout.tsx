/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { ReactNode } from "react"

import Header from "./header/Header"
import "./layout.css"
import { MenuBlockType } from "../utils/types/menuBlockTypes"

const Layout = ({ children, menuBlock }: {children: ReactNode, menuBlock: MenuBlockType}) => (
  <>
    <Header menuBlock={menuBlock} />
    {children}
    {/* Add Footer if you have one */}
  </>
)

export default Layout
