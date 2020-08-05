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

  > div {
    display: flex;
    align-items: center;
    justify-content: start;
    background: ${colors.inputBackground};
    border: 1px solid ${colors.lineInWhite};
    border-radius: 0.8rem;
    margin-top: 0.8rem;

    select {
      width: 98%;
      height: 5.6rem;
      background: transparent;
      border: 0;
      outline: 0;
      padding: 0 1rem;
      font: 1.6rem Archivo;
    }
  }

  @media (min-width: 700px) {
    margin-bottom: 0;
  }
`
