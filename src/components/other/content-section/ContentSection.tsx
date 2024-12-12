import React, { ReactNode } from 'react';
import { LymeContainer } from './componentStyles'

import { toHTML, uriLooksSafe } from '@portabletext/to-html'
import { PortableTextImageBlock, PortableTextLinkBlock } from '../../../utils/types/portableTextTypes';
import { ContentSectionType } from '../../../utils/types/contentSectionTypes';

const myPortableTextComponents = {
  types: {
    image: ({value}: {value: PortableTextImageBlock}) => `<img src="${value.imageUrl}" />`
  },
  marks: {
    link: ({children, value}: {children: ReactNode, value?: PortableTextLinkBlock}) => {
      // `value.href` IS NOT "SAFE" BY DEFAULT
      // Make sure you sanitize/validate the href!
      const href = value?.href || '';
      
      if (uriLooksSafe(href)) {
        const rel = href.startsWith('https://') ? undefined : 'noreferrer noopener'
        return `<a 
              class="lyme-link"      
              href="${href}" 
              rel="${rel}">
                ${children}
              </a>`
      }

      // If the URI appears unsafe, render the children (eg, text) without the link
      return Array.isArray(children) ? children.join('') : String(children)
    },
    strong: ({children}: {children: ReactNode}) => {
      return `<b style="font-weight: bold;">${children}</b>`
    }
  },
}

const ContentSection = ({ content }: { content: ContentSectionType}) => {
  const { title, images, descriptionsRaw } = content; // Destructure content
  const formattedDescriptions = toHTML(descriptionsRaw, {components: myPortableTextComponents}) 

  return (
    <LymeContainer> 
      <h2 className="lyme-header">{title}</h2> 
      <div className={images && images.length == 1 ? "covid-images-container" : "lyme-images-container"}>
        {images && images.map((image, index) => (
            <img key={index} src={image.asset.url} className="img" alt="Content visual" />
          ))} 
      </div>

      <div className="lyme-content" dangerouslySetInnerHTML={{ __html: formattedDescriptions }} />
      
    </LymeContainer>

  )
}

export default ContentSection;