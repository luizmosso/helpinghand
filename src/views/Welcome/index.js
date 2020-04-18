import React from 'react';
import { Container, CenterImage, Description, NextButton } from './style';
import AppName from '../../components/AppName'
import workerSVG from '../../content/images/worker.svg'

function Welcome({ callNextScreen }) {
  return (
    <Container>
      <div>
        <CenterImage>
          <img src={workerSVG} alt="Helping Hands" />
        </CenterImage>
        <AppName>Helping Hand</AppName>
      </div>
      <Description>
        SEJA BEM VINDO ao app que oferece a ajuda perfeita para as necessidades do cotidiano. 
        <br/><br/>
        Através de poucos passos você contrata serviços gerais a um preço increditável.
      </Description>
      <NextButton onClick={callNextScreen}>SAIBA COMO FUNCIONA</NextButton>
    </Container>
  );
}

export default Welcome;
