import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
  Container,
  Filter,
  FilterText,
  SearchForm,
  Label,
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

  function handleSubmitSearchForm() {
    setIsFiltersVisible(!isFiltersVisible)
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
