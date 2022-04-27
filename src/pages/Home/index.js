import React from 'react';
import { ScrollView, View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';


import styles from './styles';
import { fonts } from '../../styles';

export default function Home({ navigation }) {
  function navigateToLight() {
    navigation.navigate('Light');
  }
  function navigateToWater() {
    navigation.navigate('Water');
  }
  function navigateToTrash() {
    navigation.navigate('Trash');
  }
  function navigateToSewer() {
    navigation.navigate('Sewer');
  }
  function navigateToAsphalt() {
    navigation.navigate('Asphalt');
  }
 
  return (

    <View style={{ flex: 1, backgroundColor: '#2A7549', padding: 10 }}>
    <Image style={styles.head}  source={require('../../../images/lupanh.png')} />
    <Text style={styles.description}>Ajude a melhorar a infraestrutura do bairro Novo Horizonte (Macapá):</Text>
    <ScrollView style={{marginTop:5}}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',}} >
      <View style={styles.container} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={navigateToLight}>
        <View style={styles.imageContainer} >
                <Image source={require('../../../images/light.png')} style={styles.image} />
          </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Iluminação</Text>
    
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={navigateToWater}>
        <View style={styles.imageContainer} >
                <Image source={require('../../../images/water.png')} style={styles.image} />
          </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Água</Text>
    
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={navigateToTrash}>
        <View style={styles.imageContainer} >
                <Image source={require('../../../images/trash.png')} style={styles.image} />
          </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Coleta de lixo</Text>
    
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={navigateToSewer}>
        <View style={styles.imageContainer} >
                <Image source={require('../../../images/sewer.png')} style={styles.image} />
          </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Esgoto</Text>
    
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={navigateToAsphalt}>
        <View style={styles.imageContainer} >
                <Image source={require('../../../images/asphalt.png')} style={styles.image} />
          </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Asfalto</Text>
    
        </View>
        </TouchableOpacity>
      </View>


      </View>
    </ScrollView>
   
  </View>


  );
}