import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import background from '../../assets/images/give-classes-background.png'
import { colors } from '../../styles/variables'

export const Background = styled.ImageBackground.attrs({
  source: background,
})`
  flex: 1;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  line-height: 37px;
  color: ${colors.titleInPrimary};
  max-width: 170px;
`

export const Description = styled.Text`
  margin-top: 24px;
  color: ${colors.textInPrimary};
  font-size: 16px;
  line-height: 26px;
  max-width: 240px;
`

export const Button = styled(RectButton)`
  margin: 40px 0;
  background-color: ${colors.secondary};
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`

export const ButtonText = styled.Text`
  color: ${colors.buttonText};
  font-size: 16px;
`
