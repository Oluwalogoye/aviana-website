import { CallToActionType } from './callToActionTypes' 
import { SanityImage } from './sanityTypes'

export interface PegasusComponentType extends CallToActionType  {
  logo: SanityImage;
}