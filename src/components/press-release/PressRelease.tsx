import React, {useState, useEffect, ReactNode} from "react"
import styles, { PressReleaseContainer } from './componentStyles'

import { uriLooksSafe } from '@portabletext/to-html'
import { PortableText } from '@portabletext/react'
import { PortableTextImageBlock, PortableTextLinkBlock } from "../../utils/types/portableTextTypes"
import { PressReleaseType } from "../../utils/types/pressSectionTypes"

const myPortableTextComponents = {
  types: {
    image: ({value}: {value: PortableTextImageBlock}) => <img src={value.imageUrl} />,
  },

  marks: {
    link: ({children, value}: {children: ReactNode, value?:PortableTextLinkBlock}) => {
      // `value.href` IS NOT "SAFE" BY DEFAULT
      // Make sure you sanitize/validate the href!
      const href = value?.href || ''

      if (uriLooksSafe(href)) {
        const rel = href.startsWith('https://') ? undefined : 'noreferrer noopener'
        return <a href={href} rel={rel}>{children}</a>;
      }

      // If the URI appears unsafe, render the children (eg, text) without the link
      return children
    },
    strong: ({children}: {children: ReactNode}) => <b style={{fontWeight: 'bold'}}>{children}</b>
  }
}

const PressRelease = ({ content }: {content: PressReleaseType}) => {
  const { title, image, descriptionsRaw} = content;
  
  const imageUrl = image.asset.url; 
  return (
    <PressReleaseContainer>
      <h1>Sermon: {title}</h1>
      <img src={imageUrl} alt={`Image for ${title}`} />
      <PortableText value={descriptionsRaw} components={myPortableTextComponents} />
    </PressReleaseContainer>
  )
}

export default PressRelease;