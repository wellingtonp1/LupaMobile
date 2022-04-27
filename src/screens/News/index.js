import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Container, HeaderArea, CustomButton, CustomButtonText } from './styles';
import Sharestyle from '../sharestyle';
import LupaHeader from '../../components/LupaHeader';


export default () => {
 
 
  return (
        <Container>
              <HeaderArea>
                <LupaHeader />
           </HeaderArea>
           
  <ScrollView style={Sharestyle.descriptionView}>
  

     <Image style={Sharestyle.newsImage} 
          source={require('../../assets/lupa-NH.jpg')} 
          />
     <Text style={Sharestyle.descriptionTitle}>Jornalismo hiperlocal: projeto experimental Lupa NH</Text>
          
     <Text style={Sharestyle.descriptionSubTitle}>O projeto experimental visa a elaboração de arcabouço teórico interdisciplinar e a criação de aplicativo para telefones celulares, estabelecendo a configuração de um ambiente comunicacional (conversação) e de deliberação para a formação de inteligência social hiperlocal. O espaço geográfico delimitado é o da comunidade de Novo Horizonte (Macapá/AP). O ambiente digital pensado tem como objetivo que moradores, jornalistas, frequentadores e conhecedores da região possam abastecer bases de dados digitais locais a partir de aplicativo para dispositivos móveis customizado e/ ou na Web, possibilitando a formação de datasets com informação estruturada sobre a região. O objetivo principal é a criação de uma esfera pública interconectada, composta pela “coesão coletiva” e pelo processo comunitário de deliberação. A instituição de um ambiente participativo por meio das tecnologias de comunicação conectadas fornece “poder” à comunidade, influenciando a tomada de decisões locais de forma colaborativa, o envolvimento cívico, a coprodução e o compartilhamento de informação com o fim de resolver os graves problemas sociais da região.</Text>  
    

  </ScrollView>
  
    </Container>
      
    );
}