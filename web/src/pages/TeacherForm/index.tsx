import React from 'react'

import warningIcon from '../../assets/images/icons/warning.svg'
import { Container, ScheduleContainer } from './styles'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

const TeacherForm: React.FC = () => {
  return (
    <Container>
      <Header
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <form>
        <fieldset>
          <legend>Seus dados</legend>
          <Input id="name" title="Nome completo" />
          <Input id="avatar" title="Avatar" />
          <Input id="whatsapp" title="WhatsApp" />
          <Textarea id="bio" title="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input id="cost" title="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo horário</button>
          </legend>
          <ScheduleContainer>
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
            <Input title="Das" id="from" type="time" />
            <Input title="Até" id="to" type="time" />
          </ScheduleContainer>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="aviso importante" />
            Importante! Preencha todos os dados
          </p>
          <button type="submit">Salvar Cadastro</button>
        </footer>
      </form>
    </Container>
  )
}

export default TeacherForm
