import React, { useEffect } from 'react'
import { 
    HelperContainer, 
    Agriculture, 
    FlexRow, 
    FlexColumn, 
    Name, 
    Role, 
    GrowBox,
    Baloon,
    BaloonCorner,
    BaloonContent 
} from './style'
import agricultureSVG from '../../content/images/agriculture.svg'
import speakBaloonCorner from '../../content/images/speakBaloon.svg'
import FilledStar from '../../content/icons/FilledStar'
import BlankStar from '../../content/icons/BlankStar'
import { delay } from '../../utilities/usefulFunctions'

const HelperCard = ({ finished }) =>{

  useEffect(() => { 
    const Animation = async () => {
      await delay(1500); 
      finished() 
    }
    Animation()
  }, [])

  return (
    <HelperContainer>
      <Baloon>
        <BaloonCorner src={speakBaloonCorner} />
        <BaloonContent>
          Oi! Posso ajudar?
        </BaloonContent>
      </Baloon>
      <FlexRow>
        <Agriculture src={agricultureSVG} />
        <FlexColumn>
          <Name>AILTON DE CARVALHO</Name>
          <Role>JARDINEIRO</Role>
          <FlexRow>
            <GrowBox id={0} delay={0.3}><FilledStar size={30} /></GrowBox>
            <GrowBox id={1} delay={0.4}><FilledStar size={30} /></GrowBox>
            <GrowBox id={2} delay={0.5}><FilledStar size={30} /></GrowBox>
            <GrowBox id={3} delay={0.6}><FilledStar size={30} /></GrowBox>
            <GrowBox id={4} delay={0.7}><BlankStar size={30} /></GrowBox>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </HelperContainer>
  )
}

export default HelperCard;