import React from 'react';
import { FeaturedLogosContainer } from './componentStyles'

import { FeaturedComponentType } from '../../../utils/types/featuredComponent'
import FeaturedCompany from './featured-company/FeaturedCompany'

const FeaturedComponent = ({ content }: {content: FeaturedComponentType}) => {

  const { title, featuredCompanies } = content;

  return (
    <FeaturedLogosContainer>
      <h2>{title}</h2>
      <div className="logos">
        {featuredCompanies.map(({name, logo, url}, index) => (
          <FeaturedCompany 
            key={index}
            name={name}
            logo={logo}
            url={url} />          
        ))}
      </div>
    </FeaturedLogosContainer>
  )

}

export default FeaturedComponent;