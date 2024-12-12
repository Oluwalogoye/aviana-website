import React, {useState, useEffect} from 'react'
import { PersonType } from '../../../../utils/types/peopleTypes';
import { PlainTextBlock } from '../../../../utils/types/sanityTypes';

const Person = ({ person, isSecondInPair=false }: { person: PersonType, isSecondInPair?: boolean}) => {  
  const {name, image, title, descriptionRaw} = person;

  // Convert Sanity Block to plain paragraph
  function toPlainText(blocks: PlainTextBlock[]) {
    
    return blocks
      // 
      .map(block => {
        //
        //
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        //
        //
        return block.children.map(child => child.text).join('')
      })
      //
      .join('\n\n')
  }
  
  const plainTextDescription = toPlainText(descriptionRaw);

  console.log('plainTextDescription', plainTextDescription);
  
  const backgroundImageUrl = image.asset.url;
  const backgroundStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`
  }; 

  const names = name.split(' ');
  const firstName = names.length >= 1 ? names[0] : '' ;
  const lastName = Array.isArray(names) && names.length >= 2 ? names.splice(1).join(' ') : '';

  return (
    // <div>Hello there from person. isSecondInPair? {isSecondInPair ? <p>true</p> : <p>false</p>}</div>
    <div className="tmm_member">
      <div style={backgroundStyle} className="tmm_photo"></div>
      <div className="tmm_textblock">

        <div className="tmm_names">
          <span className="tmm_fname">{firstName}</span>
          <span>{` `}</span>
          <span className="tmm_lname">{lastName}</span>
        </div>

        <div className="tmm_job">{title}</div>
        <div className="tmm_desc" style={{textAlign: "left"}}>
          {
            plainTextDescription.split('\n\n').map((paragraph, index) => (

              <p key={index}>{paragraph}</p>

            ))
          }
        </div>
        <div className="tmm_scblock"></div>

        {!isSecondInPair && <span className="tmm_two_containers_tablet"></span>}
      </div>      
    </div>
  )

}

export default Person;