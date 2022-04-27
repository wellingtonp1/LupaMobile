import React, { useState } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { 
     Container, 
     HeaderArea,
     FakeSwiper,
     PageBody,
     ServiceArea,
 } from './styles';
import Sharestyle from '../sharestyle';
import LupaHeader from '../../components/LupaHeader';

import styled from 'styled-components';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

const ModalItem = styled.View`
     background-color: #b8e4fc;
     border-top-left-radius: 10px;
     border-top-right-radius: 10px;
     min-height: 50px;
     padding: 10px 20px 20px 20px;

`;

const ModalTitle = styled.Text`
     font-size: 15px;
     font-weight: bold;
     color: #000000;
`;
const ModalInfo = styled.View`
     flex-direction: row;
     margin-bottom: 15px;
`;

const ModalPrevArea = styled.TouchableOpacity`
     flex: 1;
     justify-content: flex-end;
     align-items: flex-end;
`;

const ModalNextArea = styled.TouchableOpacity`
     flex: 1;
     justify-content: flex-start;
     align-items: flex-start;
`;

const ModalTitleArea = styled.Text`
     min-width: 50px;
     justify-content: center;
     align-items: center;
`;

const FinishButton = styled.TouchableOpacity`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px; 
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #0a2655; 
    font-size: 17px;
    font-weight: bold;
    padding: 10px 10px 10px 10px;
    align-items: center;
    margin-top: 10px;
`;

const FinishButtonText = styled.Text`
    color: #ffffff; 
    font-size: 17px;
    font-weight: bold;
    
`; 

const options = [ 'Sim','Não'];


export default () => {
             

  return (
     <Container>
     <HeaderArea>
          <LupaHeader />
     </HeaderArea>
     
<ScrollView style={Sharestyle.descriptionView}>
    <Text style={Sharestyle.pageTitleBlue}>Iluminação</Text>
    <Text style={Sharestyle.descriptionTitle}>Aponte problemas com a iluminação pública</Text>

      <ModalItem>
      <Text style={Sharestyle.descriptionSubTitle}> Existe poste no local ?</Text>
            <ModalInfo>
               <ModalPrevArea>
                    <NavPrevIcon width="35" height="35" fill="#000000" />
               </ModalPrevArea>
               <ModalTitleArea>
                    <ModalTitle>Sim, mas não funciona</ModalTitle>
               </ModalTitleArea>
               <ModalNextArea>
                     <NavNextIcon width="35" height="35" fill="#000000" />
               </ModalNextArea>
          </ModalInfo> 

          <Text style={Sharestyle.descriptionSubTitle}> Esta funcionando ?</Text>
            <ModalInfo>
               <ModalPrevArea>
                    <NavPrevIcon width="35" height="35" fill="#000000" />
               </ModalPrevArea>
               <ModalTitleArea>
                    <ModalTitle>Parcialmente</ModalTitle>
               </ModalTitleArea>
               <ModalNextArea>
                     <NavNextIcon width="35" height="35" fill="#000000" />
               </ModalNextArea>
          </ModalInfo> 
     </ModalItem> 

    
     <FinishButton>
          <FinishButtonText>Enviar informações</FinishButtonText>
     </FinishButton>
   
</ScrollView>
   
</Container>
    );
}