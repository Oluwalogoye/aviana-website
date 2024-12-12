import React from 'react';
import { FeaturedCompanyType } from '../../../../utils/types/featuredComponent'

const FeaturedCompany = ({name, logo, url}: FeaturedCompanyType ) => {

  return (
    <a href={url}>
      <img src={logo.asset.url} alt={name} />
    </a>
  )

}

export default FeaturedCompany;