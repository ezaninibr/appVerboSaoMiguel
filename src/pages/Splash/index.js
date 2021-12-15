import React, { useEffect } from 'react';
import {
  Dimensions,
  Image,
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logo_verbo from '../../assets/logos/verbo_logo.png'
import logo_midia from '../../assets/logos/midia_logo.png'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Splash = ({ navigation }) => {

  setTimeout(() => {
    navigation.navigate('Home')
  }, 4000)

  return (
    <View style={style.fundo}>
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <Image source={logo_verbo} style={{ width: windowWidth / 2, height: windowWidth / 2, resizeMode: 'contain' }} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image source={logo_midia} style={{ width: windowWidth / 3.5, resizeMode: 'contain' }} />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  fundo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000'
  }
})

export default Splash