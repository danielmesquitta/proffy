import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Wrapper from '../../components/Wrapper'
import { colors } from '../../styles/variables'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.textInPrimary};
  background: ${colors.primary};
`

export const Content = styled(Wrapper)`
  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;

    @media (min-width: 1100px) {
      height: 100%;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;

    @media (min-width: 1100px) {
      text-align: initial;
      font-size: 3.6rem;
    }
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;
  }
`

export const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 700px) {
    height: 30rem;
  }
  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
    height: unset;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 20rem;
    height: 8rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${colors.buttonText};
    transition: all 0.2s;

    @media (min-width: 700px) {
      width: 30rem;
      height: 10.4rem;
    }

    :first-child {
      margin-right: 1.6rem;
    }

    img {
      width: 4rem;

      @media (min-width: 1100px) {
        margin-right: 2.4rem;
      }
    }

    @media (min-width: 1100px) {
      font-size: 2.4rem;
    }
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-self: start;
  }
`

export const StudyLink = styled(Link)`
  background: ${colors.primaryLighter};

  :hover {
    background: ${colors.primaryLight};
  }
`

export const TeachLink = styled(Link)`
  background: ${colors.secondary};

  :hover {
    background: ${colors.secondaryDark};
  }
`

export const TotalConnections = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`
