import React from 'react'

import { Container } from './styles'

const Wrapper: React.FC = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>
}

export default Wrapper
