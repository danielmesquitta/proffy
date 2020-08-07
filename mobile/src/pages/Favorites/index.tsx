import React from 'react'

import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'
import { Container, List } from './styles'

const Favorites: React.FC = () => {
  return (
    <Container>
      <Header title="Meus Proffys favoritos" />

      <List>
        <TeacherItem favorited />
        <TeacherItem favorited />
        <TeacherItem favorited />
        <TeacherItem favorited />
      </List>
    </Container>
  )
}

export default Favorites
