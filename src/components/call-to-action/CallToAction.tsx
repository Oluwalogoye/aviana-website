import React from "react"
import { CallToActionType } from "../../utils/types/callToActionTypes"
import { navigate } from "gatsby"
import { MenuItemType } from "../../utils/types/menuBlockTypes";
import { PlainTextBlock, PlainTextChild } from "../../utils/types/sanityTypes";
import styles, { Button } from "./componentStyles";

const CallToAction = ({ content } : { content: CallToActionType } ) => {
  const { logo, title, descriptionsRaw, hideLogo, backgroundImage, link, buttonName } = content;

  // Safely extract the background image URL
  const backgroundImageUrl = backgroundImage?.asset.url || '';
  
  // Create the background style
  const backgroundStyle = backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : {};

  // Extract the slug from the link variable
  let slug = '/';

  if (link?.menuBlock?.menuItems) {
    // Iterate through menuitems to find a matching slug
    link.menuBlock.menuItems.forEach((menuItem: MenuItemType) => {
      if (menuItem.link?._id == link._id) {
        slug = menuItem.slug
      }
    })
  }

  const handleButtonClick = (navigateLink: string = `${slug}`) => {
    navigate(navigateLink);
  }

  console.log("content", content);
  console.log("backgroundStyle", backgroundStyle);

  const logoImageUrl = logo?.asset.url;

  // Convert Sanity Block to plain paragraph
  function toPlainText(blocks: PlainTextBlock[]) {
    return blocks
    // loop through each block
      .map((block: PlainTextBlock) => {
        // If it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        // loop through the children spans, and join the 
        // text strings
        return block.children.map((child: PlainTextChild) => child.text).join('')
      })
      // join the paragraphs leaving split by two linebreaks
      .join('\n\n')
  }

  const logoClass =  hideLogo ? styles.logoHidden : styles.logo;

  return (
    <div style={{ ...styles.rollinsContainer, ...backgroundStyle }}>
      {logo && !hideLogo && <img src={logoImageUrl} style={{...logoClass}} alt="Logo" />}
      <h3 style={styles.title}>{title}</h3>
      {
        descriptionsRaw && toPlainText(descriptionsRaw).split('\n\n').map((description: string, index: number) => (
          <p key={index} style={styles.description}>{description}</p>
        ))
      }
      {buttonName && (
        <Button onClick={() => handleButtonClick(slug)}>
          <span>{buttonName}</span>
        </Button>
        
      )}
    </div>
  )
}

export default CallToAction;