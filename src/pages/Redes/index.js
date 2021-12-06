import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import mapa from '../../assets/mapa.png'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Redes = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, marginVertical: 20 }}>Verbo nas Redes</Text>
        </View>

        <View style={style.menu}>
        <TouchableOpacity
            onPress={() => Linking.openURL(`https://facebook.com/verbodavidasaomiguel`)}
          >
            <View style={style.botao_menu}>
              <Icon name="facebook" size={45} style={style.icone_menu} />
              <Text style={style.texto_menu}>Facebook</Text>
            </View>
          </TouchableOpacity>
        <TouchableOpacity
            onPress={() => Linking.openURL(`https://www.instagram.com/verbodavidasaomiguel/`)}
          >
            <View style={style.botao_menu}>
              <Icon name="instagram" size={45} style={style.icone_menu} />
              <Text style={style.texto_menu}>Instagram</Text>
            </View>
          </TouchableOpacity>
        <TouchableOpacity
            onPress={() => Linking.openURL(`https://www.youtube.com/c/VerbodaVidaS%C3%A3oMiguelPaulista`)}
          >
            <View style={style.botao_menu}>
              <Icon name="youtube" size={45} style={style.icone_menu} />
              <Text style={style.texto_menu}>Youtube</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:20
  },
  botao_menu: {
    width: windowWidth,
    height: windowWidth / 5,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
  },
  icone_menu: {
    marginHorizontal: 20
  },
  texto_menu: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})

export default Redes