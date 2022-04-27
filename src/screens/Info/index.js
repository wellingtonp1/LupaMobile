import React, { useState } from 'react';
import { View, Text, Button, Image, ScrollView, Linking } from 'react-native';
import { Container, HeaderArea } from './styles';
import Sharestyle from '../sharestyle';

import LupaHeader from '../../components/LupaHeader';
import LightModal from '../../components/LightModal';

export default () => {

    const [showModal, setShowModal] = useState(false);
   
    return (
        <Container>
            <HeaderArea>
                <LupaHeader />
           </HeaderArea>
           
    
    <ScrollView style={Sharestyle.descriptionView}>
    <Text style={Sharestyle.pageTitleBlue}>SOBRE</Text>
    <Text style={Sharestyle.descriptionTitle}>O que é o aplicativo Lupa NH?</Text>
      <Text style={Sharestyle.description}>Lupa NH é uma aplicação para mapeamento de falta de asfaltamento, saneamento básico e iluminação pública no bairro do Novo Horizonte em Macapá.</Text>
      <Text style={Sharestyle.description}>Esse é um projeto de código aberto que pode ser encontrado no GitHub</Text>
    
      <Text style={Sharestyle.description}>Versão 1.0</Text>

      <Text style={Sharestyle.descriptionSubTitle}>Status</Text>

      <Text style={Sharestyle.description}>Para mais informações sobre o projeto LupaNH acesse:</Text>
    
    </ScrollView>
   
        <LightModal 
            show={showModal}
            setShow={setShowModal}
        />
        </Container>
    );
}