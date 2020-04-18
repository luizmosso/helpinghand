import React from 'react';
import HowDoesItWorkScreen from '../../components/HowDoesItWorkScreen'
import AnimatedWhatDoYouNeed from './AnimatedWhatDoYouNeed';
import AnimatedServiceSize from './AnimatedServiceSize';
import AnimatedWhere from './AnimatedWhere';
import AnimatedWhen from './AnimatedWhen';
import AnimatedComments from './AnimatedComments';
import AnimatedConfirmButton from './AnimatedConfirmButton';

function HowDoesItWorkConfig({ showContent, callNextScreen, background }) {

  const fields = [
    <AnimatedWhatDoYouNeed key={0} />,
    <AnimatedServiceSize key={1} />,
    <AnimatedWhere key={2} />,
    <AnimatedWhen key={3} />,
    <AnimatedComments key={4} />,
    <AnimatedConfirmButton key={5} />
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

export default HowDoesItWorkConfig;
