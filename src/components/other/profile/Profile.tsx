import React from 'react'
import {ProfileImage, LeaderProfile} from './componentStyles'
import { Organization, ProfileType } from '../../../utils/types/profileTypes';
import { PlainTextBlock } from '../../../utils/types/sanityTypes';

const Profile = ({content}: {content: ProfileType}) => {
  const { name, image, descriptions, organizationInfo } = content;

  const imageUrl = image.asset.url;
  const destructureOrganization: (organization: Organization) => string = (organization) => {
    const { name, state, city } = organization;
    const resultTokens = [ name, state, city ];
    
    const result = resultTokens.join(', ');
    return result;
  }
  // assumes there is content
  const organizationFullName = destructureOrganization(organizationInfo);

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
    <LeaderProfile>
      <ProfileImage>
        <img src={imageUrl} alt={name} />
      </ProfileImage>
      <div className="profile-content">
        <h1 >{name}</h1>
        <h2 >{organizationFullName}</h2>
        {
          descriptions && toPlainText(descriptions).split('\n\n').map((description, index) => (
            <p key={index} >{description}</p>
          ))
        }
      </div>
    </LeaderProfile>
  );
}

export default Profile;