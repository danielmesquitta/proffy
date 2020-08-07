import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import { colors } from '../../styles/variables'

export const Container = styled.View`
  background-color: ${colors.tabFooter};
  border-width: 1px;
  border-color: ${colors.lineInWhite};
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`

export const Profile = styled.View`
  align-items: center;
  padding: 24px;
`

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${colors.lineInWhite};
`

export const Info = styled.View`
  flex-direction: row;
`

export const InfoText = styled.View`
  margin-left: 20px;
`

export const Name = styled.Text`
  font-weight: bold;
  color: ${colors.textTitle};
  font-size: 20px;
`

export const Subject = styled.Text`
  color: ${colors.textBase};
  font-size: 12px;
  margin-top: 4px;
`
export const Bio = styled.Text`
  margin: 24px;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.textBase};
`

export const Footer = styled.View`
  background: ${colors.tabFooter};
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`

export const Price = styled.Text`
  color: ${colors.textBase};
  font-size: 14px;
`

export const Value = styled.Text`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: bold;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`

export const Favorite = styled(RectButton)<{ favorited?: boolean }>`
  background: ${colors.primary};
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  ${props =>
    props.favorited &&
    css`
      background: ${colors.heartButton};
    `}
`

export const Contact = styled(RectButton)`
  background: ${colors.secondary};
  flex: 1;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`

export const ContactText = styled.Text`
  color: ${colors.buttonText};
  font-size: 16px;
  font-weight: bold;
  margin-left: 16px;
`
