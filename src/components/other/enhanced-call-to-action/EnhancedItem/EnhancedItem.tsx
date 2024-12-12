import React from 'react';
import styles from '../componentStyles';
import { EnhancedItemType } from '../../../../utils/types/enhancedCallToActionTypes';
import { PlainTextBlock } from '../../../../utils/types/sanityTypes';

const EnhancedItem = ({content}: {content: EnhancedItemType}) => {
  const {title, image, descriptionsRaw} = content;

  function toPlainText(blocks: PlainTextBlock[]) {
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

  const imageUrl = image?.asset?.url;
  const plainTextDescriptions = toPlainText(descriptionsRaw);



  return (
    <div style={styles.headerWrapper}>
      <img src={imageUrl} style={styles.img} alt={title} />
      <h2>{title}</h2>
      {plainTextDescriptions.split('\n\n').map((description, index) => (
        <p key={index}>{description}</p>
      ))}
    </div>
  )
};

export default EnhancedItem;