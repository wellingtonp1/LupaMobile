import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Button } from 'react-native';
import { Container, HeaderArea, CustomButton, CustomButtonText } from './styles';
import Sharestyle from '../sharestyle';
import LupaHeader from '../../components/LupaHeader';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


export default () => {
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const _logout = async () => {

    auth()
      .signOut()
      .then(() => console.log('User signed out!')

      );
      navigation.reset({
        routes:[{name:'Preload'}]
    });
  }
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  return (
        <Container>
              <HeaderArea>
                <LupaHeader />
           </HeaderArea>
           
             <ScrollView style={Sharestyle.descriptionView}>
  
         <Text style={Sharestyle.pageTitleYellow} >PERFIL</Text>
      

     <Text style={Sharestyle.descriptionTitle}>Veja  suas informações de perfil e envios</Text>
     
      
     <Text style={Sharestyle.descriptionSubTitle}>Nome</Text>  
     <Text style={Sharestyle.description}>Joao Silva</Text>
     <Text style={Sharestyle.descriptionSubTitle}>E-mail:</Text>  
     <Text style={Sharestyle.description}>email@provedor.com.br</Text>

      
     <Text style={Sharestyle.descriptionSubTitle}>Você esta autenticado!</Text>  
     <CustomButton onPress={_logout}>
                    <CustomButtonText >CLIQUE PARA SAIR</CustomButtonText>
     </CustomButton>

     <Text style={Sharestyle.descriptionSubTitle}>Últimos envios:</Text> 
        <ScrollView>
        <Text style={Sharestyle.description}>- Falta de asfalto - 20/8 12:23</Text>  
        <Text style={Sharestyle.description}>- Falta de coleta de lixo - 08/3 21:23</Text>
        <Text style={Sharestyle.description}>- Falta de agua potavel - 10/8 16:23</Text>
        <Text style={Sharestyle.description}>- Falta de asfalto - 33/2 13:23</Text>
        <Text style={Sharestyle.description}>- Falta de asfalto - 20/8 12:23</Text>  
        <Text style={Sharestyle.description}>- Falta de coleta de lixo - 08/3 21:23</Text>
        <Text style={Sharestyle.description}>- Falta de agua potavel - 10/8 16:23</Text>
        <Text style={Sharestyle.description}>- Falta de asfalto - 33/2 13:23</Text>
        <Text style={Sharestyle.description}>- Falta de coleta de lixo - 08/3 21:23</Text>
        <Text style={Sharestyle.description}>- Falta de agua potavel - 10/8 16:23</Text>
        <Text style={Sharestyle.description}>- Falta de asfalto - 33/2 13:23</Text>
        <Text style={Sharestyle.description}>- Falta de asfalto - 20/8 12:23</Text>  
        <Text style={Sharestyle.description}>- Falta de coleta de lixo - 08/3 21:23</Text>
        <Text style={Sharestyle.description}>- Falta de agua potavel - 10/8 16:23</Text>
        <Text style={Sharestyle.description}>- Falta de asfalto - 33/2 13:23</Text>
        <Text style={Sharestyle.description}>- Falta de asfalto - 20/8 12:23</Text>  
        <Text style={Sharestyle.description}>- Falta de coleta de lixo - 08/3 21:23</Text>
        <Text style={Sharestyle.description}>- Falta de agua potavel - 10/8 16:23</Text>
        <Text style={Sharestyle.description}>- Falta de asfalto - 33/2 13:23</Text>
        <Text style={Sharestyle.description}>- Falta de asfalto - 20/8 12:23</Text>  
        <Text style={Sharestyle.description}>- Falta de coleta de lixo - 08/3 21:23</Text>
        <Text style={Sharestyle.description}>- Falta de agua potavel - 10/8 16:23</Text>
        <Text style={Sharestyle.description}>- Falta de asfalto - 33/2 13:23</Text>
        </ScrollView> 

    </ScrollView>
  
    </Container>
      
    );
}