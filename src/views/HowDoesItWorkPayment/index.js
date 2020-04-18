import React from 'react';
import HowDoesItWorkScreen from '../../components/HowDoesItWorkScreen'
import ReleasePayment from './ReleasePayment'
import HappyHelper from './HappyHelper'
import Explanation from './Explanation'
import LetsGo from './LetsGo'

function HowDoesItWorkJobDone({ showContent, callNextScreen, background }) {

  const fields = [
    <ReleasePayment key={0} />,
    <HappyHelper key={1} />,
    <Explanation key={2} />,
    <LetsGo key={3} />,
  ]

  return (
    <HowDoesItWorkScreen 
      background={background}
      fields={fields} 
      showContent={showContent} 
      callNextScreen={callNextScreen} 
    />
  );
}

export default HowDoesItWorkJobDone;
