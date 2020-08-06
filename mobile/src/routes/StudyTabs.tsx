import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { colors } from '../styles/variables'
import TeacherList from '../pages/TeacherList'
import Favorites from '../pages/Favorites'

const { Navigator, Screen } = createBottomTabNavigator()

const Study: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: colors.tabFooter,
        activeBackgroundColor: colors.tabFooterActive,
        inactiveTintColor: colors.tabText,
        activeTintColor: colors.tabTextActive,
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-easel"
              size={size}
              color={focused ? colors.primary : color}
            />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-heart"
              size={size}
              color={focused ? colors.primary : color}
            />
          ),
        }}
      />
    </Navigator>
  )
}

export default Study
