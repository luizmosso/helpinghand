import React from 'react';
import HowDoesItWorkScreen from '../../components/HowDoesItWorkScreen'
import HelperCard from './HelperCard';
import ValueCard from './ValueCard';
import HireButton from './HireButton';

function HowDoesItWorkHire({ showContent, callNextScreen, background }) {

  const fields = [
    <HelperCard key={0} />,
    <ValueCard key={1} />,
    <HireButton key={2} />,
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

export default HowDoesItWorkHire;
