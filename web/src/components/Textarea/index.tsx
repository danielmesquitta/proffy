import React, { TextareaHTMLAttributes } from 'react'

import { Container } from './styles'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  title: string
}

const Textarea: React.FC<Props> = ({ id, title, ...rest }) => {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <textarea id={id} {...rest} />
    </Container>
  )
}

export default Textarea
