import styled from 'styled-components/native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import { colors } from '../../styles/variables'

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`

export const Filter = styled(BorderlessButton)`
  flex-direction: row;
`

export const FilterText = styled.Text`
  color: ${colors.buttonText};
  font-size: 16px;
`

export const SearchForm = styled.View`
  margin-bottom: 36px;
`

export const Label = styled.Text`
  color: ${colors.textInPrimary};
`

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Select = styled.View`
  height: 54px;
  background: ${colors.inputBackground};
  justify-content: center;
  padding: 0 16px;
  margin: 4px 0 16px;
  border-radius: 8px;
`

export const InputBlock = styled.View`
  width: 48%;
`

export const Input = styled(RectButton)`
  height: 54px;
  background: ${colors.inputBackground};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px 0 16px;
  margin: 4px 0 16px;
  border-radius: 8px;
`

export const SubmitButton = styled(RectButton)`
  background: ${colors.secondary};
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SubmitButtonText = styled.Text`
  color: ${colors.buttonText};
  font-size: 16px;
  font-weight: bold;
`

export const List = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})`
  margin-top: -60px;
`
