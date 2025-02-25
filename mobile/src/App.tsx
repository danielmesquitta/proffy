import 'react-native-gesture-handler'

import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  )
}

export default App
