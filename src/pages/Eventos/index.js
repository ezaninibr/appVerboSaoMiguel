import * as React from 'react';
import { Button, View, Text, ScrollView, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const Eventos = () => {
  return (
    <WebView source={{ uri: 'https://verbosaomiguel.com.br/eventos/' }} />
  )
}

export default Eventos