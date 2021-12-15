import * as React from 'react';
import {
  Dimensions,
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import card from '../../assets/igreja_card.jpg'
 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.menu}>
        <Image source={card} style={{ width: windowWidth, height: windowWidth, resizeMode: 'contain',marginBottom:10 }} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Cultos')}
          >
            <View style={style.botao_menu}>
              <Icon name="youtube" size={30} style={style.icone_menu} />
              <Text style={style.texto_menu}>Cultos on-line</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Eventos')}
          >
            <View style={style.botao_menu}>
              <Icon name="calendar" size={30} style={style.icone_menu} />
              <Text style={style.texto_menu}>Eventos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Localização')}
          >
            <View style={style.botao_menu}>
              <Icon name="map-pin" size={30} style={style.icone_menu} />
              <Text style={style.texto_menu}>Venha nos visitar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Contribua')}
          >
            <View style={style.botao_menu}>
              <Icon name="dollar-sign" size={30} style={style.icone_menu} />
              <Text style={style.texto_menu}>Contribua na visão</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Redes')}
          >
            <View style={style.botao_menu}>
              <Icon name="at-sign" size={30} style={style.icone_menu} />
              <Text style={style.texto_menu}>Verbo nas Redes</Text>
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
    justifyContent: 'center'
  },
  botao_menu: {
    width: windowWidth,
    height: windowWidth / 7,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#aaa',
  },
  icone_menu: {
    marginHorizontal: 20
  },
  texto_menu: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Home