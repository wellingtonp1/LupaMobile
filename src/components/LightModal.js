import React from 'react';
import styled from 'styled-components/native';
import {useNavigation } from '@react-navigation/native';
import ExpandIcon from '../assets/back.svg';
import { Container } from '../screens/Issues/styles';


const Modal = styled.View`

    flex:1; 
    
    position: absolute;
`;

const ModalArea = styled.View`
    
   
    justify-content: flex-end;
`;

const ModalBody =styled.View`
    background-color: #83D6E3;
    border-radius:10px;
    min-height: 60px;
    padding: 5px 10px 20px 10px;
`;
const CloseButton =styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`; 
const TextButton =styled.Text`
   
`; 

export default ({show, setShow}) => {
    const navigation = useNavigation();

    const handleCloseButton = () => {
        setShow(false);
    }
    
    return (

       <Modal 
            transparent={true}
            visible={show}
            animationType="slide">
            <ModalArea>
                <ModalBody>
                     <CloseButton onPress={handleCloseButton}>
                        <ExpandIcon width="40"
                                    height="40"
                                    fill="#000000" />
                    </CloseButton>
                    <TextButton>Sair</TextButton>
                </ModalBody>    
            </ModalArea>    

       </Modal>  
       
    );
}