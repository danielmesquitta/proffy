import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

import Landing from '../pages/Landing'
import Teach from '../pages/Teach'
import Study from './StudyTabs'

const { Navigator, Screen } = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="Landing" component={Landing} />
        <Screen name="Teach" component={Teach} />
        <Screen name="Study" component={Study} />
      </Navigator>
    </NavigationContainer>
  )
}

export default App
