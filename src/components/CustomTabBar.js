import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { UserContext } from '../contexts/UserContext';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/issue_icon.svg';
import PaperIcon from '../assets/info_icon.svg';
import FavoriteIcon from '../assets/question.svg';
import AccountIcon from '../assets/profile.svg';


const TabArea = styled.View`
    height: 60px;
    background-color: #0a2655;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #0a2655;
    margin-top: -20px;
`;
const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

export default ({ state, navigation }) => {
    const { state:user } = useContext(UserContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
        <TabItem onPress={()=>goTo('Home')}>
            <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
        </TabItem>
        <TabItem onPress={()=>goTo('HowTo')}>
            <PaperIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
        </TabItem>
        <TabItemCenter onPress={()=>goTo('Issues')}>
            <SearchIcon  style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#000000" />
        </TabItemCenter>
        <TabItem onPress={()=>goTo('Info')}>
            <FavoriteIcon style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
        </TabItem>
        <TabItem onPress={()=>goTo('Profile')}>
            {user.avatar != '' ?
                <AvatarIcon source={{uri: user.avatar}} />
                :
                <AccountIcon style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            }
        </TabItem>
    </TabArea>
    );
}