import styled from 'styled-components'

import Wrapper from '../../components/Wrapper'
import { colors } from '../../styles/variables'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const SearchForm = styled.form`
  margin-top: 3.2rem;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
    position: absolute;
    bottom: -2.8rem;
  }
`

export const InputBlock = styled.div`
  position: relative;
  margin-bottom: 1.4rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  label {
    font-size: 1.4rem;
    color: ${colors.textInPrimary};
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
    border: 2px solid ${colors.primaryLight};

    :focus {
      border: 3px solid ${colors.primaryLight};
    }
  }

  @media (min-width: 700px) {
    margin-bottom: 0;
  }
`
