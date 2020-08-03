import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const Container = styled.article`
  background: ${colors.boxBase};
  border: 1px solid ${colors.lineInWhite};
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    div {
      margin-left: 2.4rem;

      strong {
        font: 700 2.4rem Archivo;
        display: block;
        color: ${colors.textTitle};
      }

      span {
        font-size: 1.6rem;
        display: block;
        margin-top: 0.4rem;
      }
    }

    @media (min-width: 700px) {
      padding: 3.2rem;
    }
  }

  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;

    @media (min-width: 700px) {
      padding: 0 3.2rem;
    }
  }

  footer {
    padding: 3.2rem 2rem;
    background: ${colors.boxFooter};
    border-top: 1px solid ${colors.lineInWhite};
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p strong {
      color: ${colors.primary};
      font-size: 1.6rem;
      display: block;

      @media (min-width: 700px) {
        display: initial;
        margin-left: 1.6rem;
      }
    }

    button {
      width: 20rem;
      height: 5.6rem;
      background: ${colors.secondary};
      color: ${colors.buttonText};
      border: 0;
      border-radius: 0.8rem;
      font: 700 1.4rem Archivo;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transition: all 0.2s;

      :hover {
        background: ${colors.secondaryDark};
      }

      img {
        @media (min-width: 700px) {
          margin-right: 1.6rem;
        }
      }

      @media (min-width: 700px) {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;
      }
    }

    @media (min-width: 700px) {
      padding: 3.2rem;
    }
  }
`
