import React,{ useState }  from 'react';
import { View, Text, Button, ScrollView, Alert, TouchableOpacity, Picker, PermissionsAndroid } from 'react-native';

import { Formik } from 'formik';

import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import api from '../../services';
import MapView, {Marker} from 'react-native-maps';

export default function Light({ navigation }) {
  
  const [position, setPosition] = useState({
    latitude: 0.0996574,
    longitude: -51.054168,
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

  

  return (

  <View style={{ flex: 1, backgroundColor: '#2A7549', padding: 10 }} >
     
     
      <View >
         <Text style={styles.pageTitle} >Aponte Problemas com a iluminação pública</Text>
      </View>

      <ScrollView>

        <Formik 
          initialValues={{HasLightPole: 'true', IsItWorking: 'true', Long: position.longitude,
          Lat: position.latitude,  Description: 'no comments'}} 
        
          onSubmit={values => {

              // MAKING SURE ALL GEOLOCATIONS VALUES  ARE CORRECT HERE!           
                            
              console.log(values)
            
              api.post('api/light/', {
                HasLightPole: values.HasLightPole,
                IsItWorking: values.IsItWorking,
                Long: position.longitude,
                Lat: position.latitude,  
                Description: 'no comments'
              })
              .then(res => 
                  //console.log(res)
                  Alert.alert('Obrigado','Problema reportado com sucesso!')
              ).catch(err => console.log('Ocorreu um erro: ', err)); 

            }
            
          }>
          {({ handleChange, handleSubmit, values }) => (

      
        <View style={{ padding: 10 }}>
                <Text style={styles.description} >Existe Poste ?</Text>
                <View style={styles.container}>
                  <Picker
                    selectedValue={values.HasLightPole}
                    style={{ height: 50 }}
                    onValueChange={handleChange('HasLightPole')}
                  >
                    <Picker.Item label="Sim" value="true" />
                    <Picker.Item label="Não" value="false" />
                  </Picker>
                </View>
                <Text style={styles.description} >Esta funcionando ?</Text>
                <View style={styles.container}>
                  <Picker
                    selectedValue={values.IsItWorking}
                    style={{ height: 50 }}
                    onValueChange={handleChange('IsItWorking')}
                  >
                    <Picker.Item label="Sim" value="true" />
                    <Picker.Item label="Não" value="false" />
                  </Picker>
                </View>



                <TouchableOpacity
                    style={styles.locationButton}
                    onPress={() => {
                      request_location_runtime_permission();
                    }}
                    onLayout={() => {
                      request_location_runtime_permission();
                    }}>
                  
                  <Text style={{marginTop: 40, color: "#fff"}} >Verifique sua localização</Text>
                    <Icon  color={'#fff'} size={30} />
                </TouchableOpacity>

              <MapView
                  style={{height: 150}}
                  region={position}
                  onPress={e =>
                    setPosition({
                      ...position,
                      latitude: e.nativeEvent.coordinate.latitude,
                      longitude: e.nativeEvent.coordinate.longitude,
                      longitudeDelta: 0.0134,
                      latitudeDelta: 0.0143
                    })
                  }>
                  <Marker
                    coordinate={position}
                    title={'Você esta aqui!'}
                    description={'Usaremos suas coordenadas'}
                  />
                </MapView>


                <View style={{marginTop:30}}>
                    <Button color="#F5BA39" title="Enviar"  onPress={handleSubmit} /> 
                </View>

                
            </View>  


            )}
          </Formik>
         </ScrollView>
  </View>
  
  );
}