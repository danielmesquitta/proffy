import React, { useState, useEffect } from 'react'

import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import { Teacher } from '../../components/TeacherItem'

import api from '../../services/api'
import { Container, SearchForm, List } from './styles'

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    if (subject && week_day && time) {
      api
        .get('classes', { params: { subject, week_day, time } })
        .then(response => setTeachers(response.data))
    }
  }, [subject, week_day, time])

  return (
    <Container>
      <Header title="Esses são os proffys disponíveis">
        <SearchForm>
          <Select
            id="subject"
            title="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
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
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
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
          <Input
            id="time"
            title="Hora"
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </SearchForm>
      </Header>

      <List>
        {teachers.map(teacher => (
          <TeacherItem teacher={teacher} key={teacher.id} />
        ))}
      </List>
    </Container>
  )
}

export default TeacherList
