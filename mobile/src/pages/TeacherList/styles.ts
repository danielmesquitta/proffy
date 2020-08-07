import styled from 'styled-components/native'
import { colors } from '../../styles/variables'

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`

export const SearchForm = styled.View`
  margin-bottom: 8px;
`

export const Label = styled.Text`
  color: ${colors.textInPrimary};
`

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const InputBlock = styled.View`
  width: 48%;
`

export const Input = styled.TextInput`
  height: 54px;
  background: ${colors.inputBackground};
  justify-content: center;
  padding: 0 16px;
  margin: 4px 0 16px;
  border-radius: 8px;
`

export const List = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})`
  margin-top: -60px;
`
