import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import { Container } from './styles'

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/60039311?s=460&u=f8ba29994516053125b48e2ba258523a79f651e6&v=4"
          alt="Professor"
        />
        <div>
          <strong>Daniel Mesquita</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de matemática avançada.
        <br /> <br />
        Web and mobile developer prepared to be a lifelong learner. Passionate
        about technology, programming and mainly, becoming a better version of
        myself every day.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$20</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  )
}

export default TeacherItem
