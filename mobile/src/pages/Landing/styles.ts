import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import { colors } from '../../styles/variables'
import landingImg from '../../assets/images/landing.png'

export const Banner = styled.Image.attrs({
  source: landingImg,
  resizeMode: 'contain',
})`
  width: 100%;
`

export const Title = styled.Text`
  color: ${colors.titleInPrimary};
  font-size: 20px;
  line-height: 30px;
  margin: 80px 0;
`

export const Bold = styled.Text`
  font-weight: bold;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Study = styled.View`
  border-radius: 8px;
  background: ${colors.primaryLighter};
`

export const Teach = styled.View`
  border-radius: 8px;
  background: ${colors.secondary};
`

export const Button = styled(RectButton)`
  width: 150px;
  height: 80px;
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  color: ${colors.buttonText};
  font-size: 16px;
`

export const TotalConnections = styled.Text`
  font-size: 14px;
  color: ${colors.textInPrimary};
  margin-top: 40px;
  max-width: 160px;
`
