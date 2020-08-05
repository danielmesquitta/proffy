import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  title: string
}

const Input: React.FC<Props> = ({ id, title, ...rest }) => {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <input id={id} {...rest} />
    </Container>
  )
}

export default Input
