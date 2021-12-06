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

import itau from '../../assets/logos/itau_logo.png'
import pix from '../../assets/logos/pix_logo.png'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Contribua = () => {

  const handleShare = () => {
    const shareOptions = {
        title: 'PIX',
        url: '32266112000185',
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
          <Text style={{ fontWeight: 'bold', fontSize: 30, marginVertical: 20}}>Contribua na visão</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <Image source={itau} style={{ width: windowWidth / 3, height: windowWidth / 3, resizeMode: 'contain' }} />
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>AG: 8125</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>CC: 40126-8</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={pix} style={{ width: windowWidth / 3, height: windowWidth / 3, resizeMode: 'contain' }} />
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>CNPJ</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>32.266.112/0001-85</Text>
          <TouchableOpacity 
            onPress={handleShare}
            style={{marginVertical: 20, backgroundColor:'#0099ff', width:windowWidth/2, height:windowWidth/8, alignItems:'center', justifyContent:'center', borderRadius:50}}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color:'#FFF' }}>COPIAR PIX</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Contribua