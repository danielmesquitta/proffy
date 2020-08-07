import React, { useState } from 'react'
import { Picker } from '@react-native-community/picker'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
  Container,
  Filter,
  FilterText,
  SearchForm,
  Label,
  Select,
  InputGroup,
  InputBlock,
  Input,
  SubmitButton,
  SubmitButtonText,
  List,
} from './styles'
import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'
import { colors } from '../../styles/variables'

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true)

  const [selectedSubject, setSelectedSubject] = useState('Artes')
  const [selectedWeekDay, setSelectedWeekDay] = useState('Domingo')

  const weekDays = [
    { value: '0', label: 'Domingo' },
    { value: '1', label: 'Segunda-feira' },
    { value: '2', label: 'Terça-feira' },
    { value: '3', label: 'Quarta-feira' },
    { value: '4', label: 'Quinta-feira' },
    { value: '5', label: 'Sexta-feira' },
    { value: '6', label: 'Sábado' },
  ]

  const subjects = [
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
  ]

  function handleSubmitSearchForm() {
    setIsFiltersVisible(!isFiltersVisible)
    console.log({ selectedSubject, selectedWeekDay })
  }

  return (
    <Container>
      <Header
        title="Proffys disponíveis"
        headerRight={
          <Filter onPress={() => setIsFiltersVisible(!isFiltersVisible)}>
            <FilterText>Filter {'  '}</FilterText>
            <Ionicons
              name="filter-outline"
              size={20}
              color={colors.buttonText}
            />
          </Filter>
        }
      >
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Select>
              <Picker
                selectedValue={selectedSubject}
                onValueChange={value => setSelectedSubject(String(value))}
              >
                {subjects.map(subject => (
                  <Picker.Item
                    label={subject.label}
                    value={subject.value}
                    key={subject.value}
                  />
                ))}
              </Picker>
            </Select>

            <InputGroup>
              <InputBlock>
                <Label>Dia da Semana</Label>
                <Select>
                  <Picker
                    selectedValue={selectedWeekDay}
                    onValueChange={value => setSelectedWeekDay(String(value))}
                  >
                    {weekDays.map(weekDay => (
                      <Picker.Item
                        label={weekDay.label}
                        value={weekDay.value}
                        key={weekDay.value}
                      />
                    ))}
                  </Picker>
                </Select>
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleSubmitSearchForm}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
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
