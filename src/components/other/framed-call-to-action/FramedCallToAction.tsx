import React from 'react';
import styles from './componentStyles'
import { FramedCallToActionType } from '../../../utils/types/framedCallToActionTypes';
import { PlainTextBlock } from '../../../utils/types/sanityTypes';

const FramedCallToAction = ({ content }: { content : FramedCallToActionType }) => {
  console.log("FramedCallToAction content", content)

  const {backgroundImg, framedItems} = content;

  const imageUrl = backgroundImg.asset.url
  const additionalStyles = {
    backgroundImage: `url('${imageUrl}')`
  }

   // Convert Sanity Block to plain paragraph
   function toPlainText(blocks:PlainTextBlock[]) {
    return blocks
      // loop through each block
      .map(block => {
        // if it's not a text block with children, 
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


  return (
    <div style={{ ...styles.framedCallToAction, ...additionalStyles }}>
      {framedItems && framedItems.map(({ title, descriptionRaw }, index) => (
        
        <div key={index} style={styles.ctaItem}>
          <h3 style={styles.ctaTitle}>{title}</h3>
          {
            descriptionRaw && toPlainText(descriptionRaw).split('\n\n').map((description, index) => (
              <p key={index} style={styles.ctaDescription}>{description}</p>
            ))
          }
        </div>
      ))}
    </div>
  )

};

export default FramedCallToAction;