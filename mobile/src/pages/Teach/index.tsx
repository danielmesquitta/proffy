import React from 'react'
import { Linking } from 'react-native'

import Container from '../../styles/Container'
import { Background, Title, Description, Button, ButtonText } from './styles'

const Teach: React.FC = () => {
  return (
    <Container>
      <Background resizeMode="contain">
        <Title>Quer ser um Proffy?</Title>

        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>

        <Button onPress={() => Linking.openURL('https://192.168.100.26:3000')}>
          <ButtonText>Ir para o site</ButtonText>
        </Button>
      </Background>
    </Container>
  )
}

export default Teach
