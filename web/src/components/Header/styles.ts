import styled from 'styled-components'

import Wrapper from '../Wrapper'
import { colors } from '../../styles/variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary};
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
  }
`
