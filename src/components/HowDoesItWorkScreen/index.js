import React, { useState, useEffect } from 'react';
import { Container, HowDoesItWorkTitle, FlexContainer } from './style';
import { delay } from '../../utilities/usefulFunctions'
import { colors } from '../../content/theme'

function HowDoesItWorkScreen(
  { showContent, callNextScreen, fields, shouldCallNextScreenAtTheEnd, background }
  ) {

  const [order, setOrder] = useState(0)

  useEffect(() => {
    setOrder(0)
  }, [showContent])

  useEffect(() => {
    if(order === fields.length - 1 && shouldCallNextScreenAtTheEnd)
      shouldCallNextScreen()
  }, [order])

  const shouldCallNextScreen = async () => {
    await delay(3000)
    callNextScreen()
  }

  return (
    <Container background={background}>
      {
        showContent &&
        <>
          <HowDoesItWorkTitle isLightBackground={background === colors.white}>Como Funciona?</HowDoesItWorkTitle>
          <FlexContainer>
          {
            fields
              .filter((field, index) => order >= index)
              .map(field => {
                return React.cloneElement(field, { 
                    finished : () => setOrder(order + 1)
                  })
              })
          }
          </FlexContainer>
        </>
      }
    </Container>
  );
}

export default HowDoesItWorkScreen;
