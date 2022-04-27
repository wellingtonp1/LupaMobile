import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';

import styles from './styles';

export default function News({ navigation }) {
 

  return (
    <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
      <Text style={styles.pageTitle}>Como usar este App?</Text>
      <View style={{ flex: 1, backgroundColor: '#2A7549', padding: 10 }}>
    <Image style={styles.head} source={require('../../../images/lupanh.png')} />
  
   
    <ScrollView>
      
      <Text style={styles.pageHeading}>1- Ligue o GPS e a internet</Text>
      <Text style={styles.description}>Para o Lupa NH funcionar corretamente é necessário que esteja conectado na internet e com o GPS ligado.</Text>

      <Text style={styles.pageHeading}>2- Confirme sua geolocalização</Text>
      <Text style={styles.description}>Posicione o seu celular o mais próximo possível do problema que você irá relatar e clique em verificar sua localização</Text>
      <View style={{marginTop:5, marginBottom:5}}>
              <Button color="#F5BA39" title="Verifique sua localização" /> 
      </View>

      <Text style={styles.pageHeading}>3- Envie</Text>
      <Text style={styles.description}>Confirme o preenchimento correto das informações e por fim aperte o botão enviar</Text>
      <View style={{marginTop:5}}>
              <Button color="#F5BA39" title="Enviar" /> 
      </View>

    </ScrollView>
   
  </View>
    </View>
  );
}