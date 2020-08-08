import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import studyIcon from '../../assets/images/icons/study.png'
import teachIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import Container from '../../styles/Container'
import {
  Banner,
  Title,
  Bold,
  ButtonsContainer,
  Study,
  Teach,
  Button,
  ButtonText,
  TotalConnections,
} from './styles'

import api from '../../services/api'

const Landing: React.FC = () => {
  const { navigate } = useNavigation()

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api
      .get('connections')
      .then(response => setTotalConnections(response.data.total))
  }, [])

  return (
    <Container>
      <Banner />

      <Title>
        Seja bem vindo, {'\n'}
        <Bold>O que deseja fazer?</Bold>
      </Title>

      <ButtonsContainer>
        <Study>
          <Button onPress={() => navigate('Study')}>
            <Image source={studyIcon} />
            <ButtonText>Estudar</ButtonText>
          </Button>
        </Study>
        <Teach>
          <Button onPress={() => navigate('Teach')}>
            <Image source={teachIcon} />
            <ButtonText>Dar aulas</ButtonText>
          </Button>
        </Teach>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões já realizadas{' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  )
}

export default Landing
