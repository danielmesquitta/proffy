import React, { useState, useEffect } from 'react'

import logoImg from '../../assets/images/logo.svg'
import heroImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import teachIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import api from '../../services/api'
import {
  Container,
  Content,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  StudyLink,
  TeachLink,
  TotalConnections,
} from './styles'

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api
      .get('connections')
      .then(response => setTotalConnections(response.data.total))
  }, [])

  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </LogoContainer>

        <HeroImage src={heroImg} alt="Plataforma de estudos" />

        <ButtonsContainer>
          <StudyLink to="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </StudyLink>
          <TeachLink to="teach">
            <img src={teachIcon} alt="Dar aulas" />
            Dar aulas
          </TeachLink>
        </ButtonsContainer>

        <TotalConnections>
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </Content>
    </Container>
  )
}

export default Landing
