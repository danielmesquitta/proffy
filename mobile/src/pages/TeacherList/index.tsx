import React from 'react'

import {
  Container,
  SearchForm,
  Label,
  InputGroup,
  InputBlock,
  Input,
  List,
} from './styles'
import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'

const TeacherList: React.FC = () => {
  return (
    <Container>
      <Header title="Proffys disponíveis">
        <SearchForm>
          <Label>Matéria</Label>
          <Input />

          <InputGroup>
            <InputBlock>
              <Label>Dia da Semana</Label>
              <Input />
            </InputBlock>

            <InputBlock>
              <Label>Horário</Label>
              <Input />
            </InputBlock>
          </InputGroup>
        </SearchForm>
      </Header>

      <List>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </List>
    </Container>
  )
}

export default TeacherList
