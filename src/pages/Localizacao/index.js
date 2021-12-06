import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Share from 'react-native-share';

import mapa from '../../assets/mapa.png'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Localizacao = () => {

  const handleShare = () => {
    const shareOptions = {
      title: 'Verbo São Miguel Paulista',
      url: 'https://goo.gl/maps/pwQ1ktc61xeoaPpZA',
    };
    Share.open(shareOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      });
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, marginVertical: 20 }}>Venha nos visitar</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
          <Image source={mapa} style={{ width: windowWidth, height: windowWidth, resizeMode: 'contain' }} />
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginHorizontal: 15, paddingBottom:5 }}>R. Jasmim de Porcelana, 833 - Jardim Santana</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginHorizontal: 15 }}>São Paulo - SP</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={handleShare}
            style={{ marginVertical: 20, backgroundColor: '#0099ff', width: windowWidth / 2, height: windowWidth / 8, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#FFF' }}>COMPARTILHAR</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Localizacao