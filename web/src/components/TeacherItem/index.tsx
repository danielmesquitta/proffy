import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import { Container } from './styles'
import api from '../../services/api'

export interface Teacher {
  id: number
  subject: string
  cost: number
  user_id: number
  name: string
  avatar: string
  whatsapp: string
  bio: string
}

interface Props {
  teacher: Teacher
}

const TeacherItem: React.FC<Props> = ({ teacher }) => {
  function createConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <Container>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R${teacher.cost}</strong>
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          onClick={createConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </Container>
  )
}

export default TeacherItem
