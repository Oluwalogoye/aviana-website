import React, { ReactNode } from 'react'
import styles, { Card, LymeLink } from './componentStyles'

import { uriLooksSafe } from '@portabletext/to-html'

import { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'

import { PortableTextImageBlock, PortableTextLinkBlock } from '../../../utils/types/portableTextTypes';
import { PortableTextLink } from '@portabletext/types'

import { CardComponentType } from '../../../utils/types/newsComponentTypes'

const myPortableTextComponents = {
  // types: {
  //   image: ({value} : {value : PortableTextImageBlock }) => <img src={value.imageUrl} /> 
  // },
  // marks: {
  //   link: ({children, value}: { children : React.ReactNode, value?: {href: string} }) => {
  //     // `value.href` IS NOT "SAFE" BY DEFAULT
  //     // Make sure you sanitize/validate the href!
  //     const href = value?.href || '';

  //     if (uriLooksSafe(href)) {
  //       const rel = href.startsWith('https://') ? undefined: 'noreferrer noopener';
  //       return <a className='lyme-link' href={href} rel={rel}>{children}</a>
  //     }

  //     // If he URI appears unsafe, render the chilren (eg, text without the link)
  //     return <>children</>;
  //   },
  // },
  types: {
    image: ({value}: { value: PortableTextImageBlock }) => <img src={value.imageUrl} />
  },
  marks: {
    link: ({children, value}: {children: ReactNode, value?: PortableTextLinkBlock}) => {
      // `value.href` IS NOT "SAFE" BY DEFAULT
      // Make sure you sanitize/validate the href!
      const href = value?.href || ''
      if (uriLooksSafe(href)) {
        const rel = href.startsWith('https://') ? undefined : 'noreferrer noopener'
        return (
          <LymeLink
            href={href}
            rel={rel}
          > 
            {children}
          </LymeLink>)
      }

      // If the URI appears unsafe, render the children (eg, text) without the link
      return <>{children}</>
    }
  },
  block: {
    strong: ({ children }: {children?: ReactNode}) => <b style={{fontWeight:"bold"}}>{children}</b> 
  }
};


const CardComponent = ({ title, imageSrc, captionRaw, buttonText, onClick }: CardComponentType) => {
  const cardImageUrl = imageSrc.asset.url;

  return (
  <Card>
    <img alt="Event" style={styles.cardImage} src={cardImageUrl}/>
    <div style={styles.cardContent}>
      <h2 style={styles.cardTitle}>{title}</h2>
      <PortableText value={captionRaw} components={myPortableTextComponents} />
      <div onClick={(e) => {e.stopPropagation(); onClick(e); }} style={styles.clickButton}>
        {buttonText}
      </div>
    </div>
  </Card>
  )
}

export default CardComponent;
