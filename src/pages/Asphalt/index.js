import React,{ useState }  from 'react';
import { View, Text, Button, TouchableOpacity, Alert, PermissionsAndroid, ScrollView } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Formik } from 'formik';

import api from '../../services';

import styles from './styles';

import MapWatcher from '../../components/MapWatcher';

export default function Asphalt({ navigation }) {
  
  const [position, setPosition] = useState({
    latitude: 0.0996574,
    longitude: -51.054168,
    Endlatitude: 0.0996574,
    Endlongitude: -51.054168,
    latitudeDelta: 0.0033,
    longitudeDelta: 0.0031,
  });

  const request_location_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de Localização',
          message: 'A aplicação precisa da permissão de localização.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          pos => {
            setPosition({
              ...position,
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
            console.log('latitude atual: ',position.latitude);
            console.log('longitude atual: ',position.longitude);
          },
          error => {
            console.log(error);
            Alert.alert('Houve um erro ao pegar a latitude e longitude.');
          },
        );
      } else {
        Alert.alert('Permissão de localização não concedida');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const end_request_location_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de Localização',
          message: 'A aplicação precisa da permissão de localização.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          pos => {
            setPosition({
              ...position,
              Endlatitude: pos.coords.latitude,
              Endlongitude: pos.coords.longitude,
            });
            console.log('endlatitude atual: ',position.Endlatitude);
            console.log('endlongitude atual: ',position.Endlongitude);
          },
          error => {
            console.log(error);
            Alert.alert('Houve um erro ao pegar a latitude e longitude.');
          },
        );
      } else {
        Alert.alert('Permissão de localização não concedida');
      }
    } catch (err) {
      console.log(err);
    }
  };

  //
  return (
  
    <View style={{backgroundColor: '#2A7549', height: '100%', padding:18}}>
      
          <View >
           <Text style={styles.pageTitle} >Registre a falta de asfalto</Text>
          </View>
    
          <Formik 
            initialValues={{ Long: position.longitude,
            Lat: position.latitude, EndLong: position.Endlongitude,
            EndLat: position.Endlatitude, Description: 'no comments'}} 
           
            onSubmit={values => {

                // MAKING SURE ALL GEOLOCATIONS VALUES  ARE CORRECT HERE!           
                               
                console.log(values)
               
                api.post('api/asphalt/', {
                  Long: position.longitude,
                  Lat: position.latitude,
                  EndLong: position.Endlongitude,
                  EndLat: position.Endlatitude,   
                  Description: 'no comments'
                })
                .then(res => 
                  Alert.alert('Obrigado','Problema reportado com sucesso!')
                ).catch(err => console.log('Ocorreu um erro: ', err)); 

              }
              
            }>
          {({ handleChange, handleSubmit, values }) => (
      <ScrollView>

    

          <Text style={styles.description} >Ao abrir esta tela já coletamos suas coordenadas iniciais, agora basta se dirigir até a coordenada final e confirma-las.</Text>
          <View style={styles.mapView}>
              <MapWatcher  />
          </View>  
          <View >
          <TouchableOpacity
                    style={styles.locationButton}
                    onPress={() => {
                      end_request_location_runtime_permission();
                    }}
                    onLayout={() => {
                      request_location_runtime_permission();
                    }}>
                  
                  <Text style={{marginTop: 40, color: "#fff"}} >Confirme suas coordenadas finais</Text>
                    <Icon  color={'#fff'} size={30} />
                </TouchableOpacity>

          </View>
          <View style={{marginTop:30}}>
               <Button color="#F5BA39" title="Enviar" onPress={handleSubmit} /> 
          </View>

          
        </ScrollView>
        )}
      </Formik>

          </View>


  );
}
