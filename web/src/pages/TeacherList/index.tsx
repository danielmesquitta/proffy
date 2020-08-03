import React from 'react'

import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'
import { Container, SearchForm, InputBlock, List } from './styles'

const TeacherList: React.FC = () => {
  const inputContent = [
    { id: 'subject', title: 'Matéria' },
    { id: 'week_day', title: 'Dia da semana' },
    { id: 'time', title: 'Hora' },
  ]

  return (
    <Container>
      <Header title="Esses são os proffys disponíveis">
        <SearchForm>
          {inputContent.map(input => (
            <InputBlock>
              <label htmlFor={input.id}>{input.title}</label>
              <input id={input.id} />
            </InputBlock>
          ))}
        </SearchForm>
      </Header>

      <List>
        <TeacherItem />
      </List>
    </Container>
  )
}

export default TeacherList
