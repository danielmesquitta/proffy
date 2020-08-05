import React, { useState, useEffect, FormEvent } from 'react'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import warningIcon from '../../assets/images/icons/warning.svg'

import Header from '../../components/Header'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import api from '../../services/api'
import { Container, ScheduleItem } from './styles'

const TeacherForm: React.FC = () => {
  const history = useHistory()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: '', to: '', from: '' },
  ])

  useEffect(() => {}, [])

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: '', to: '', from: '' }])
  }

  function setScheduleItemValue(index: number, name: string, value: string) {
    setScheduleItems(
      scheduleItems.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [name]: value } : item
      )
    )

    console.log(scheduleItems)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const schedule = scheduleItems.map(item => ({
      ...item,
      week_day: Number(item.week_day),
    }))

    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule,
      })
      .then(() => {
        history.push('/')
        toast.success('Cadastro realizado com sucesso')
      })
      .catch(() =>
        toast.error('Erro no cadastro! Verifique seu dados e tente novamente')
      )
  }

  return (
    <Container>
      <Header
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Seus dados</legend>
          <Input
            id="name"
            title="Nome completo"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            id="avatar"
            title="Avatar"
            value={avatar}
            onChange={e => setAvatar(e.target.value)}
          />
          <Input
            id="whatsapp"
            title="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <Textarea
            id="bio"
            title="Biografia"
            value={bio}
            onChange={e => setBio(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input
            id="cost"
            title="Custo da sua hora por aula"
            value={cost}
            onChange={e => setCost(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem, index) => (
            <ScheduleItem key={scheduleItem.week_day}>
              <Select
                id="week_day"
                title="Dia da Semana"
                value={scheduleItem.week_day}
                onChange={e =>
                  setScheduleItemValue(index, 'week_day', e.target.value)
                }
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
                title="Das"
                id="from"
                type="time"
                value={scheduleItem.from}
                onChange={e =>
                  setScheduleItemValue(index, 'from', e.target.value)
                }
              />
              <Input
                title="Até"
                id="to"
                type="time"
                value={scheduleItem.to}
                onChange={e =>
                  setScheduleItemValue(index, 'to', e.target.value)
                }
              />
            </ScheduleItem>
          ))}
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
