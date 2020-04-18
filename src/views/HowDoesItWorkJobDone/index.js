import React from 'react';
import HowDoesItWorkScreen from '../../components/HowDoesItWorkScreen'
import Worker from './Worker'
import ServiceLoading from './ServiceLoading'
import Rating from './Rating'
import FinallyButton from './FinallyButton'

function HowDoesItWorkJobDone({ showContent, callNextScreen, background }) {

  const fields = [
    <Worker key={0} />,
    <ServiceLoading key={1} />,
    <Rating key={3} />,
    <FinallyButton key={3} />,
  ]

  return (
    <HowDoesItWorkScreen 
      background={background}
      fields={fields} 
      showContent={showContent} 
      callNextScreen={callNextScreen} 
      shouldCallNextScreenAtTheEnd={true}
    />
  );
}

export default HowDoesItWorkJobDone;
