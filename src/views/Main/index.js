import React, { useState } from 'react'
import { 
  Container, AbsoluteContainer, InnerContainer, 
  ProfileFace, Absolute, OuterContainer, Row, ProfileName,
  OptionBox, Option 
} from './style'
import { colors } from '../../content/theme'
import Page from '../../components/Page'
import AppName from '../../components/AppName'
import Menu from '../../content/icons/Menu'
import Notification from '../../content/icons/Notification'
import CreditCard from '../../content/icons/CreditCard'
import HeartOutline from '../../content/icons/HeartOutline'
import LogOut from '../../content/icons/LogOut'
import profilePic from '../../content/images/profilePicture.png'

export default function Main(){

  const [slideContent, setSlideContent] = useState(false)

  return (
    <Page>
      <Container>
        <Absolute top="15px"><AppName fontSize="2rem" >Helping Hand</AppName></Absolute>
        <OuterContainer>
          <Row>
            <ProfileFace src={profilePic} />
            <ProfileName>Sandy BlueSky</ProfileName>
          </Row>
          <OptionBox>
            <Row marginLeft="30px" >
              <Notification size={20} color={colors.white} />
              <Option>Notificações</Option>
            </Row>
            <Row marginLeft="30px" >
              <HeartOutline size={20} color={colors.white} />
              <Option>Meus Serviços</Option>
            </Row>
            <Row marginLeft="30px" >
              <CreditCard size={20} color={colors.white} />
              <Option>Pagamento</Option>
            </Row>
            <Row marginLeft="30px" >
              <LogOut size={20} color={colors.white} />
              <Option>Sair</Option>
            </Row>
          </OptionBox>
        </OuterContainer>
        <AbsoluteContainer slide={slideContent}>
          <InnerContainer>
            <Absolute top="28px" left="15px" >
              <Menu size={22} onClick={() => setSlideContent(!slideContent)} />
            </Absolute>
          </InnerContainer>
        </AbsoluteContainer>
      </Container>
    </Page>
  )
}