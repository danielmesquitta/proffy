import React, { SelectHTMLAttributes } from 'react'

import { Container } from './styles'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string
  title: string
  options: { value: string; label: string }[]
}

const Select: React.FC<Props> = ({ id, title, options, ...rest }) => {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <div>
        <select id={id} {...rest}>
          <option value="" disabled selected></option>
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </Container>
  )
}

export default Select
