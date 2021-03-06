import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './pages/Splash';
import Home from './pages/Home';
import Contribua from './pages/Contribua'
import Eventos from './pages/Eventos'
import Localizacao from './pages/Localizacao'
import Cultos from './pages/Cultos';
import Redes from './pages/Redes';

// import Videos from './components/Videos'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Videos/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Contribua" component={Contribua} />
        <Stack.Screen name="Eventos" component={Eventos} />
        <Stack.Screen name="Localização" component={Localizacao} />
        <Stack.Screen name="Cultos" component={Cultos} />
        <Stack.Screen name="Redes" component={Redes} />
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App