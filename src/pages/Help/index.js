import React from 'react';
import { View, Text, Button, Image, ScrollView, Linking } from 'react-native';

import styles from './styles';

export default function Help({ navigation }) {
  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#2A7549', padding: 10 }}>
    <Image style={styles.head} source={require('../../../images/lupanh.png')} />
    <Text style={styles.pageTitle}>Sobre</Text>
   
    <ScrollView>
      <Text style={styles.description}>Lupa NH é uma aplicação para mapeamento de falta de asfaltamento, saneamento básico e iluminação pública no bairro do Novo Horizonte em Macapá.</Text>
      <Text style={styles.description}>Esse é um projeto de código aberto que pode ser encontrado no GitHub</Text>
      <Text style={styles.link} onPress={ ()=> Linking.openURL('https://github.com/wellingtonp1/LupaNH') } >GitHub/LupaNH</Text>
      <Text style={styles.description}>Versão 1.0</Text>

    </ScrollView>
   
  </View>
  );
}