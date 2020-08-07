import styled from 'styled-components/native'
import { colors } from '../../styles/variables'

export const Container = styled.View`
  padding: 40px;
  background: ${colors.primary};
`

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  color: ${colors.titleInPrimary};
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin: 40px 0;
`

export const HeaderText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
