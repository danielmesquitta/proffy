import React, { ReactNode } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import { Container, TopBar, Title, HeaderText } from './styles'

interface Props {
  title?: string
  headerRight?: ReactNode
}

const Header: React.FC<Props> = ({
  title,
  headerRight,
  children,
  ...otherProps
}) => {
  const { navigate } = useNavigation()

  return (
    <Container {...otherProps}>
      <TopBar>
        <BorderlessButton onPress={() => navigate('Landing')}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      {(title || headerRight) && (
        <HeaderText>
          <Title>{title}</Title>
          {headerRight}
        </HeaderText>
      )}

      {children}
    </Container>
  )
}

export default Header
