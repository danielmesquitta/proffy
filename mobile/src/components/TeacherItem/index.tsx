import React, { useState } from 'react'
import { Image, Linking } from 'react-native'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import AsyncStorage from '@react-native-community/async-storage'

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

import api from '../../services/api'

export interface Teacher {
  id: number
  subject: string
  cost: number
  user_id: number
  name: string
  avatar: string
  whatsapp: string
  bio: string
}

interface Props {
  favorited: boolean
  teacher: Teacher
}

const TeacherItem: React.FC<Props> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited)

  async function handleToggleFavorites() {
    const response = await AsyncStorage.getItem('favorites')
    const favorites: Teacher[] = response ? JSON.parse(response) : []
    if (isFavorited) {
      const favoriteIndex = favorites.findIndex(item => item.id === teacher.id)
      favorites.splice(favoriteIndex, 1)
      setIsFavorited(false)
    } else {
      favorites.push(teacher)
      setIsFavorited(true)
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites))
  }

  function handleLink() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <Container>
      <Profile>
        <Info>
          <Avatar
            source={{
              uri: teacher.avatar,
            }}
          />
          <InfoText>
            <Name>{teacher.name}</Name>
            <Subject>{teacher.subject}</Subject>
          </InfoText>
        </Info>

        <Bio>{teacher.bio}</Bio>

        <Footer>
          <Price>
            Preço/hora {'  '}
            <Value>R$ {teacher.cost},00</Value>
          </Price>

          <ButtonsContainer>
            <Favorite favorited={isFavorited} onPress={handleToggleFavorites}>
              {isFavorited ? (
                <Image source={unfavoriteIcon} />
              ) : (
                <Image source={heartOutlineIcon} />
              )}
            </Favorite>

            <Contact onPress={handleLink}>
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
