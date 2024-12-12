import React from 'react';
import CallToAction from '../call-to-action/CallToAction'
import { PegasusComponentType } from '../../utils/types/pegasusComponentTypes';

const PegasusComponent = ({ content }: {content: PegasusComponentType}) => {
  return <CallToAction content={content} />
}

export default PegasusComponent;