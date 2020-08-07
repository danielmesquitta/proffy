import React from 'react'
import { Image, View } from 'react-native'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import {
  Container,
  Profile,
  Avatar,
  Info,
  InfoText,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  Value,
  ButtonsContainer,
  Favorite,
  Contact,
  ContactText,
} from './styles'

interface Props {
  favorited?: boolean
}

const TeacherItem: React.FC<Props> = ({ favorited }) => {
  return (
    <Container>
      <Profile>
        <Info>
          <Avatar
            source={{
              uri: 'https://github.com/danielmesquitta.png',
            }}
          />
          <InfoText>
            <Name>Daniel Mesquita</Name>
            <Subject>Matemática</Subject>
          </InfoText>
        </Info>

        <Bio>
          I'm Daniel, a web and mobile developer prepared to be a lifelong
          learner. Passionate about technology, programming and mainly, becoming
          a better version of myself every day.
        </Bio>

        <Footer>
          <Price>
            Preço/hora {'  '}
            <Value>R$ 20,00</Value>
          </Price>

          <ButtonsContainer>
            <Favorite favorited={favorited}>
              {favorited ? (
                <Image source={unfavoriteIcon} />
              ) : (
                <Image source={heartOutlineIcon} />
              )}
            </Favorite>

            <Contact>
              <Image source={whatsappIcon} />
              <ContactText>Entrar em contato</ContactText>
            </Contact>
          </ButtonsContainer>
        </Footer>
      </Profile>
    </Container>
  )
}

export default TeacherItem
