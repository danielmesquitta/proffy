import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const Container = styled.div`
  position: relative;
  margin-bottom: 1.4rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${colors.inputBackground};
    border: 1px solid ${colors.lineInWhite};
    outline: 0;
    padding: 0 1rem;
    font: 1.6rem Archivo;

    :focus {
      border: 1px solid ${colors.primaryLight};
    }
  }

  @media (min-width: 700px) {
    margin-bottom: 0;
  }
`
