import React, { useState, useEffect }  from 'react';
import { Container } from './styles';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { constants } from 'fs';
import { useNavigation } from '@react-navigation/core';

import SplashScreen from '../../assets/Tela_Inicial.svg';
import auth from '@react-native-firebase/auth';

export default () => {
    
    const navigation = useNavigation();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();


      // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, 
      []);
      
      if (!user) {
           navigation.navigate("SignIn")
       
      }else{
          navigation.navigate("MainTab")
      }

      if (initializing){
        
        return (
          <Container >
              <SplashScreen  flex="1" width="100%" height="100%" />
          </Container>
        );
      
      } else{
      return (
        <Container >
            <SplashScreen  flex="1" width="100%" height="100%" />
         </Container>
      );
      
      }
 

  
}
