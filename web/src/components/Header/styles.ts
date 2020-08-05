import styled from 'styled-components'

import Wrapper from '../Wrapper'
import { colors } from '../../styles/variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary};

  @media (min-width: 700px) {
    height: 34rem;
  }
`

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.textInPrimary};
  padding: 1.6rem 0;

  a {
    height: 3.2rem;
    transition: all 0.2s;

    :hover {
      opacity: 0.6;
    }
  }

  > img {
    height: 1.6rem;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`

export const HeaderContent = styled(Wrapper)`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: ${colors.textInPrimary};

    @media (min-width: 700px) {
      max-width: 40rem;
      align-self: start;
      margin-left: 3.2rem;
    }
  }

  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${colors.textInPrimary};
    margin-top: 2.4rem;
    align-self: start;

    @media (min-width: 700px) {
      margin-left: 3.6rem;
    }
  }

  @media (min-width: 700px) {
    flex: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding-bottom: 4.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
