// EnhancedCallToAction.js
import React from 'react';
import styles, { Button } from './componentStyles';
import EnhancedItem from './EnhancedItem/EnhancedItem'
import { EnhancedCallToActionType } from '../../../utils/types/enhancedCallToActionTypes';

const EnhancedCallToAction = ({content}: {content: EnhancedCallToActionType}) => {
  const {enhancedItems, backgroundImage} = content;

  const backgroundImageUrl = backgroundImage?.asset?.url; 

  const additionalStyles = {
    backgroundImage: `url('${backgroundImageUrl}')`
  }
   
    return (
      <div style={{ ...styles.enhancedContainer, ...additionalStyles }}>
         {/* <h2 style={styles.enhancedCtaHeader}>{title}</h2> */}
         <div style={styles.headersContainer}>
             {enhancedItems && enhancedItems.map((item, index) => (
                <EnhancedItem key={index} content={item} />
          ))}
        </div>
      </div>
    )
}

export default EnhancedCallToAction;