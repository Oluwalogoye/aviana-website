import { SanityImage } from './sanityTypes'

export interface FeaturedComponentType {
  title: string;
  featuredCompanies: FeaturedCompanyType[];
}

export interface FeaturedCompanyType {
  name: string;
  logo: SanityImage;
  url: string;
}