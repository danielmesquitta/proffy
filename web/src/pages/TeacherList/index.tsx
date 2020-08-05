import React from 'react'

import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import { Container, SearchForm, List } from './styles'

const TeacherList: React.FC = () => {
  const inputContent = [
    { id: 'subject', title: 'Matéria' },
    { id: 'week_day', title: 'Dia da semana' },
    { id: 'time', title: 'Hora', type: 'time' },
  ]

  return (
    <Container>
      <Header title="Esses são os proffys disponíveis">
        <SearchForm>
          <Select
            id="subject"
            title="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Select
            id="week_day"
            title="Dia da Semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input id="time" title="Hora" type="time" />
        </SearchForm>
      </Header>

      <List>
        <TeacherItem />
      </List>
    </Container>
  )
}

export default TeacherList
