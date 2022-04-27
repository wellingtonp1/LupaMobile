import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Container, HeaderArea } from './styles';
import Sharestyle from '../sharestyle';
import LupaHeader from '../../components/LupaHeader';

export default () => {
    return (
        <Container>
           <HeaderArea>
                <LupaHeader />
           </HeaderArea>
           
    
   
   <ScrollView style={Sharestyle.descriptionView}>
   <Text style={Sharestyle.pageTitleGreen} >INSTRUÇÕES</Text>
     <Text style={Sharestyle.descriptionTitle}>Como usar esse aplicativo ?</Text>
     
      
     <Text style={Sharestyle.descriptionSubTitle}>Ligue o GPS e a internet</Text>  
     <Text style={Sharestyle.description}>Para o Lupa NH funcionar corretamente é necessário que esteja conectado com a internet e com o GPS ligado.</Text>
     <Text style={Sharestyle.descriptionSubTitle}>Confirme sua geolocalização</Text>  
     <Text style={Sharestyle.description}>Posicione o seu celular o mais proximo possível do problema que você irá relatar e clique em verificar a sua localização</Text>
     <Text style={Sharestyle.descriptionSubTitle}>Envia as informações</Text>  
     <Text style={Sharestyle.description}>Confirme o preenchimento correto de todas as informações e aperte enviar.</Text>

   </ScrollView>
  
        </Container>
    );
}