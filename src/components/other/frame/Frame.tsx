import React from "react"
import { ImagesContainer } from './componentStyles';
import { ImageWrapper } from './componentStyles';
import styles from './componentStyles';
import { FrameType } from "../../../utils/types/frameTypes";
import { PlainTextBlock } from "../../../utils/types/sanityTypes";

const Frame = ({ content }: { content: FrameType }) => {
  const { featuredItems } = content;

  console.log("frame content", content)

  // Convert Sanity Block to plain paragraph
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

  return (
    <div style={styles.frameContainer}>
      <ImagesContainer style={styles.imagesContainer}>
        {featuredItems.map(({ title, descriptionRaw, image }, i) => (
          <ImageWrapper key={i} style={styles.imageWrapper}>
            <img src={image?.asset?.url} alt={title} />
            <h2 >{title}</h2>
            {
              toPlainText(descriptionRaw).split('\n\n').map((description, j) => (
                <p key={j} >{description}</p>
              ))
            }
          </ImageWrapper>
        ))}
      </ImagesContainer>
    </div>
  );
}

export default Frame;
