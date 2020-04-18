import React, { useState, useEffect } from 'react';
import Page from '../components/Page'
import Swiper from '../components/Swiper'
import Welcome from '../views/Welcome'
import HowDoesItWorkConfig from '../views/HowDoesItWorkConfig'
import HowDoesItWorkHire from '../views/HowDoesItWorkHire'
import HowDoesItWorkJobDone from '../views/HowDoesItWorkJobDone'
import HowDoesItWorkPayment from '../views/HowDoesItWorkPayment'
import { colors } from '../content/theme'

function WelcomeFlow() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isWhiteBackground, setIsWhiteBackground] = useState(false)

  const callNextScreen = () => setCurrentSlideIndex(currentSlideIndex + 1)

  useEffect(() => {
    const isWhiteBG = screens.find((screen, index) => 
      index === currentSlideIndex && screen.props.background === colors.white
    )
    setIsWhiteBackground(isWhiteBG ? true : false)
  }, [currentSlideIndex])

  const screens = [
    <Welcome callNextScreen={callNextScreen} key={0} background={colors.blue} />,
     <HowDoesItWorkConfig 
      key={1}
      showContent={currentSlideIndex === 1} 
      callNextScreen={callNextScreen} 
      background={colors.green}
    />,
    <HowDoesItWorkHire 
      key={2}
      showContent={currentSlideIndex === 2} 
      callNextScreen={callNextScreen} 
      background={colors.orange} 
    />,
    <HowDoesItWorkJobDone 
      key={3}
      showContent={currentSlideIndex === 3} 
      callNextScreen={callNextScreen} 
      background={colors.white} 
    />,
    <HowDoesItWorkPayment
      key={4}
      showContent={currentSlideIndex === 4} 
      callNextScreen={callNextScreen} 
      background={colors.blue} 
    />
  ]

  return (
    <Page>
      <Swiper 
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
        isWhiteBackground={isWhiteBackground}
      >
        {screens}
      </Swiper>
    </Page>
  );
}

export default WelcomeFlow;
