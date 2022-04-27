import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 40px;
    background-color: #00A5FE;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;