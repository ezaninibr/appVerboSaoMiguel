import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Videos from './pages/Videos';

// import Videos from './components/Videos'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Videos/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Videos" component={Videos} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App