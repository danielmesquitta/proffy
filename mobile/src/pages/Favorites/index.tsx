import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import Header from '../../components/Header'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { Container, List } from './styles'
import AsyncStorage from '@react-native-community/async-storage'

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Teacher[]>([])

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('favorites').then(response => {
        if (response) setFavorites(JSON.parse(response))
      })
    }, [])
  )

  return (
    <Container>
      <Header title="Meus Proffys favoritos" />

      <List>
        {favorites.map(teacher => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </List>
    </Container>
  )
}

export default Favorites
