import React from "react"
import { navigate } from "gatsby"

import { MainContainer } from './componentStyles'
import CardComponent  from './news-card/CardComponent'
import { NewsComponentType, NewsItemType } from '../../utils/types/newsComponentTypes'
import { PageType } from '../../utils/types/pageTypes'
import { MenuItemType } from '../../utils/types/menuBlockTypes'

const NewsComponent = ({content}: { content: NewsComponentType }) => {
  const { title, newsItems, dots } = content;

  const handleButtonClick = (link: PageType | undefined) => {
    // Extract the slug from the link variable
    let slug = '/';

    if (link?.menuBlock?.menuItems) {
      link.menuBlock.menuItems.forEach((menuItem: MenuItemType) => {
        if (menuItem.link?._id === link._id) {
          slug = menuItem.slug;
        }
      })
    }

    navigate(slug);
  }
  
  return (
    <MainContainer style={{}}>
      {dots && <img src={dots.asset.url} className="dots" alt="Decorative dots"/>}
      {title && <h3>{title}</h3>}
      <h3></h3>

      <div className="news-contiainer">
        {newsItems.map((item: NewsItemType, index: number) => (
          <CardComponent
            key={index}
            title={item.title}
            imageSrc={item.imageSrc}
            captionRaw={item.captionRaw}
            buttonText={item.buttonText}
            onClick={() => handleButtonClick(item.link)}
          />
        ))}
      </div>
    </MainContainer>
  )


}

export default NewsComponent;

