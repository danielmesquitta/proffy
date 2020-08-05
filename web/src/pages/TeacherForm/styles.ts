import styled from 'styled-components'

import Wrapper from '../../components/Wrapper'
import { colors } from '../../styles/variables'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  > div {
    box-sizing: initial;
    padding-bottom: 6.4rem;
  }

  form {
    background: ${colors.boxBase};
    max-width: 110rem;
    margin: 0 auto;
    padding-top: 6.4rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    overflow: hidden;

    @media (min-width: 700px) {
      padding: 6.4rem 3.2rem 0;
    }

    fieldset {
      border: 0;
      padding: 0 2.4rem;

      + fieldset {
        margin-top: 6.4rem;
      }

      legend {
        font: 700 2.4rem Archivo;
        color: ${colors.textTitle};
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid ${colors.lineInWhite};

        button {
          background: none;
          border: 0;
          color: ${colors.primary};
          font: 700 1.6rem Archive;
          transition: all 0.2s;

          :hover {
            color: ${colors.primaryDark};
          }
        }
      }

      > div {
        margin-bottom: 2.4rem;
      }

      :last-of-type {
      }
    }

    footer {
      padding: 4rem 2.4rem;
      background: ${colors.boxFooter};
      border-top: 1px solid ${colors.lineInWhite};
      margin-top: 6.4rem;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: ${colors.textComplement};

        img {
          margin-right: 2rem;
        }
      }

      button {
        width: 100%;
        max-width: 70rem;
        height: 5.6rem;
        background: ${colors.secondary};
        color: ${colors.buttonText};
        border: 0;
        border-radius: 0.8rem;
        font: 700 1.6rem Archivo;
        text-decoration: none;
        transition: all 0.2s;
        display: block;
        margin: 3.2rem auto;

        :hover {
          background: ${colors.secondaryDark};
        }
      }
    }
  }
`

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
  }
`
