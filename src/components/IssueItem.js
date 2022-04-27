import React from 'react';
import styled from 'styled-components/native';
import {useNavigation } from '@react-navigation/native';

import Stars from './Stars';

const Area = styled.TouchableOpacity`
    background-color: #b8e4fc;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

const Title = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #000000;
`;

const SeeProfileButton = styled.View`
    width: 85px;
    height: 26px;
    border: 1px solid #4EADBE;
    border-radius: 10px;
    background-color: #94bdd3;
    justify-content: center;
    align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #268596;
`;


export default ({data}) => {
    
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('News',{
            id: data.id,
            title: data.Title
        });
    }
    
    return (
        <Area onPress={handleClick}>
            <Avatar source={{uri: 'https://i2.wp.com/chicoterra.com/wp-content/uploads/2018/05/lupa-NH.jpg?resize=620%2C445&ssl=1'}} />
            <InfoArea>
                <Title>Lupa NH é lançado em Novo Horizonte</Title>

                {/* <Stars stars={data.stars} showNumber={true} /> */}

                <SeeProfileButton>
                    <SeeProfileButtonText>ver mais</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}