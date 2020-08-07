import styled from 'styled-components/native'
import { colors } from '../../styles/variables'

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`

export const List = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})`
  margin-top: -60px;
`
