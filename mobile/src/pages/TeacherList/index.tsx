import React, { useState, useEffect } from 'react'
import { Text, Alert } from 'react-native'
import { Picker } from '@react-native-community/picker'
import DateTimePicker from '@react-native-community/datetimepicker'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-community/async-storage'

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
import { colors } from '../../styles/variables'

import api from '../../services/api'
import Header from '../../components/Header'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

const TeacherList: React.FC = () => {
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

  const [isFiltersVisible, setIsFiltersVisible] = useState(true)

  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false)
  const [date, setDate] = useState(new Date())

  const [time, setTime] = useState('')
  const [subject, setSubject] = useState(subjects[0].label)
  const [week_day, setWeekDay] = useState(weekDays[0].value)

  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const [hour, minutes] = String(date).split(' ')[4].split(':')
    setTime(`${hour}:${minutes}`)
  }, [date])

  function handleSubmitFilterForm() {
    if (subject && week_day && time) {
      AsyncStorage.getItem('favorites').then(response => {
        if (response)
          setFavorites(
            (JSON.parse(response) as Teacher[]).map(teacher => teacher.id)
          )
      })

      api
        .get('classes', { params: { subject, week_day, time } })
        .then(response => {
          setIsFiltersVisible(!isFiltersVisible)
          setTeachers(response.data)
        })
    } else {
      Alert.alert(
        'Formulário incompleto!',
        'Verifique os dados e tente novamente'
      )
    }
  }

  return (
    <Container>
      <Header
        title="Proffys disponíveis"
        headerRight={
          <Filter onPress={() => setIsFiltersVisible(!isFiltersVisible)}>
            <FilterText>Filtrar {'  '}</FilterText>
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
                selectedValue={subject}
                onValueChange={value => setSubject(String(value))}
              >
                {subjects.map(item => (
                  <Picker.Item
                    label={item.label}
                    value={item.value}
                    key={item.value}
                  />
                ))}
              </Picker>
            </Select>

            <InputGroup>
              <InputBlock>
                <Label>Dia da Semana</Label>
                <Select>
                  <Picker
                    selectedValue={week_day}
                    onValueChange={value => setWeekDay(String(value))}
                  >
                    {weekDays.map(item => (
                      <Picker.Item
                        label={item.label}
                        value={item.value}
                        key={item.value}
                      />
                    ))}
                  </Picker>
                </Select>
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input onPress={() => setIsTimePickerVisible(true)}>
                  <Text>{time}h</Text>
                  <Ionicons name="caret-down-sharp" size={12} color="#555" />
                </Input>
                {isTimePickerVisible && (
                  <DateTimePicker
                    value={date}
                    mode="time"
                    is24Hour={true}
                    display="spinner"
                    onChange={(e, selectedTime) => {
                      setIsTimePickerVisible(false)
                      setDate(selectedTime || date)
                    }}
                  />
                )}
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleSubmitFilterForm}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </Header>

      <List>
        {teachers.map(teacher => (
          <TeacherItem
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
            key={teacher.id}
          />
        ))}
      </List>
    </Container>
  )
}

export default TeacherList
