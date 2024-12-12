import React from 'react'

import { InfoComponentType } from '../../utils/types/infoComponentTypes'

import { PlainTextBlock } from '../../utils/types/sanityTypes'
import styles from './componentStyles'

const InfoComponent = ({ content }: { content: InfoComponentType }) => {
  
  const { header, paragraphsRaw } = content;

  console.log("InfoComponent content", content)

  // Convert Sanity Block to plain text
  function toPlainText(blocks: PlainTextBlock[]) {
    return blocks
      // loop through each block
      .map((block) => {
        //if it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        // loop through the children spans, and join the 
        // text strings
        return block.children.map(child => child.text).join('')
      })
      // join the paragraphs leaving split by two linebreaks
      .join('\n\n')
  }

  const plainTextDescriptions =  paragraphsRaw ? toPlainText(paragraphsRaw): '';

  
  return (
    <div style={styles.advisorContainer}>
      <div style={styles.advisorHeader}>
        <h1 style={styles.advisorHeaderH1}>{header}</h1>
      </div>

      <div style={styles.advisorContent}>
        { 
          plainTextDescriptions.split('\n\n').map((paragraph, index) => (
            <p key = {index} style={styles.paragraph}>{paragraph}</p>
        ))}
      </div>

    </div>
  )
}


export default InfoComponent;