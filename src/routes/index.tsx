import React from 'react'

import { View } from 'react-native'
import { useTheme } from 'styled-components/native'

import { AppRoutes } from './app.routes'

import { NavigationContainer } from '@react-navigation/native'

export function Routes() {
  const theme = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
