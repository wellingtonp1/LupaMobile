import React, { useState, useEffect } from 'react';
import { Platform, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';


import Api from '../../Api';

import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,

    LoadingIcon,
    ListArea
} from './styles';

import IssueItem from '../../components/IssueItem';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';


export default () => {
    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);


    const handleLocationFinder = async () => {
        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if(result == 'granted') {
            setLoading(true);
            setLocationText('');
            setList([]);

            Geolocation.getCurrentPosition((info)=>{
                setCoords(info.coords);
               // getIssues();
            });

        }
    }

    const getIssues = async () => {
       // setLoading(true);
        setList([]);

        let res = await Api.getIssues();
        if(res.error == '') {
            setList(res.data);
        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    useEffect(()=>{
        //getIssues();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
       // getIssues();
    } 
    
    const handleLocationSearch = () => {
        setCoords({});
       // getIssues();
    }

    return (
        <Container>
              <Scroller>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre notícias da sua região</HeaderTitle>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#ccc"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                        onEndEditing={handleLocationSearch}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#222222" />
                    </LocationFinder>
                </LocationArea>

                             
                <ListArea>
                    
                        <IssueItem key="1" data="a" />
                        <IssueItem key="2" data="a" />
                        <IssueItem key="3" data="a" />
                  
                </ListArea>
                </Scroller>
         
        </Container>
    ); 
}


   /*  const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const handleLocationFinder = async () => {
        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if(result == 'granted') {
            setLoading(true);
            setLocationText('');
            setList([]);

            Geolocation.getCurrentPosition((info)=>{
                setCoords(info.coords);
                getIssues();
            });

        }
    }

    const getIssues = async () => {
        setLoading(true);
        setList([]);

        let lat = null;
        let lng = null;
        if(coords) {
            lat = coords.latitude;
            lng = coords.longitude;
        }

        let res = await Api.getIssues(lat, lng, locationText);
        if(res.error == '') {
            if(res.loc) {
                setLocationText(res.loc);
            }
            setList(res.data);
        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    useEffect(()=>{
        getIssues();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getIssues();
    } 

    const handleLocationSearch = () => {
        setCoords({});
        getIssues();
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }> 
                
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre notícias da sua região</HeaderTitle>
                     <SearchButton onPress={()=>navigation.navigate('Home')}>
                        <SearchIcon width="26" height="26" fill="#FFFFFF" />
                    </SearchButton> 
                </HeaderArea>

                 <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                        onEndEditing={handleLocationSearch}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
                    </LocationFinder>
                </LocationArea>

                {loading &&
                    <LoadingIcon size="large" color="#FFFFFF" />
                }
                
                <ListArea>
                    {list.map((item, k)=>(
                        <IssueItem key={k} data={item} />
                    ))}
                </ListArea>

            </Scroller> 
        </Container>
    );
} */