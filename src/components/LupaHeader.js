import React from 'react';
import {Text, Image} from 'react-native';
import Sharestyle from '../screens/sharestyle'

export default () => {
    return (
       
        <Image style={Sharestyle.imgHead} source={require('../assets/header.jpg')} />  
   
  
    );
}