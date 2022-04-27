import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
    flex-direction: row;
    border-radius: 15px;
    border: #cccccc;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
    
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #aaaaaa;
    margin-left: 10px;
`;

export default ({placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
           
            <Input
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}