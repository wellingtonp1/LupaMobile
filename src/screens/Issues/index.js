import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Container, HeaderArea } from './styles';
import Sharestyle from '../sharestyle';
import LupaHeader from '../../components/LupaHeader';
import { useNavigation } from '@react-navigation/native';



export default () => {
    
  const navigation = useNavigation();


  const handleClick = (key) => {
    switch (key) {
      case 1:
        navigation.navigate('Light');
        break;
      case 2:
        navigation.navigate('Water');
        console.log(`Sorry, id= ${key}.`);
        break;
      case 3:
        navigation.navigate('Trash');
        console.log(`Sorry, id= ${key}.`);
        break;
      case 4:
        navigation.navigate('Sewer');
        break;
      case 5:
        navigation.navigate('Asphalt');
        break;
      case 6:
        navigation.navigate('TrashCollector');
        break;
      default:
        console.log(`Sorry, id= ${key}.`);
    }
  }


  return (
        <Container>
        <HeaderArea>
                <LupaHeader />
           </HeaderArea>
           
        
<ScrollView style={Sharestyle.descriptionView}>

  
  <Text style={Sharestyle.pageTitleRed} >APONTE PROBLEMAS</Text>
  <Text style={Sharestyle.description}>Você pode ajudar apontando os problemas nas áreas indicadas abaixo:</Text>

  <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',marginTop: 25}} >
      <View style={Sharestyle.menuContainer} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={() => handleClick(1)}>
        <View style={Sharestyle.imageMenuContainer} >
          <Image source={require('../../assets/light.png')} />
        </View>
        <View style={Sharestyle.infoMenuContainer}>
          <Text style={Sharestyle.title}>Iluminação pública</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={Sharestyle.menuContainer} > 
        <TouchableOpacity activeOpacity = { .3 }  onPress={()=> handleClick(2)} >
        <View style={Sharestyle.imageMenuContainer} >
          <Image source={require('../../assets/water.png')} />
        </View>
        <View style={Sharestyle.infoMenuContainer}>
          <Text style={Sharestyle.title}>Água Potável</Text>
    
        </View>
        </TouchableOpacity>
      </View>
      <View style={Sharestyle.menuContainer} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={()=> handleClick(3)} >
        <View style={Sharestyle.imageMenuContainer} >
          <Image source={require('../../assets/trash.png')} />
        </View>
        <View style={Sharestyle.infoMenuContainer}>
          <Text style={Sharestyle.title}>Limpeza Urbana</Text>
    
        </View>
        </TouchableOpacity>
      </View>
      <View style={Sharestyle.menuContainer} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={()=> handleClick(4)} >
        <View style={Sharestyle.imageMenuContainer} >
          <Image source={require('../../assets/sewer.png')} />
        </View>
        <View style={Sharestyle.infoMenuContainer}>
          <Text style={Sharestyle.title}>Esgoto</Text>
    
        </View>
        </TouchableOpacity>
      </View>
      <View style={Sharestyle.menuContainer} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={()=> handleClick(5)} >
        <View style={Sharestyle.imageMenuContainer} >
          <Image source={require('../../assets/street.png')} />
          </View>
        <View style={Sharestyle.infoMenuContainer}>
          <Text style={Sharestyle.title}>Calçadas e esfalto</Text>
    
        </View>
        </TouchableOpacity>
      </View>
      <View style={Sharestyle.menuContainer} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={()=> handleClick(6)} >
        <View style={Sharestyle.imageMenuContainer} >
        <Image source={require('../../assets/coleta.png')} />
          </View>
        <View style={Sharestyle.infoMenuContainer}>
          <Text style={Sharestyle.title}>Coleta de lixo</Text>
    
        </View>
        </TouchableOpacity>
      </View>
    </View>


</ScrollView>

 
 </Container>
    );
}