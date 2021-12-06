import * as React from 'react';
import { Button, View, Text } from 'react-native';

const Home = ({navigation}) =>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Videos"
          onPress={() => navigation.navigate('Videos')}
        />
        <Button
          title="Eventos"
          onPress={() => navigation.navigate('Eventos')}
        />
        <Button
          title="Localização"
          onPress={() => navigation.navigate('Localização')}
        />
        <Button
          title="Contribua"
          onPress={() => navigation.navigate('Contribua')}
        />
      </View>
    )
}

export default Home