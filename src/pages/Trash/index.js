import React,{ useState }  from 'react';
import { View, Text, Button, TouchableOpacity, Picker, PermissionsAndroid, ScrollView, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Formik } from 'formik';

import api from '../../services';
import MapView, {Marker} from 'react-native-maps';

import styles from './styles';

export default function Trash({ navigation }) {
  
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

  
 
  //
  return (
    <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
    <View style={{padding:30}}>
        <ScrollView>
          <View >
           <Text style={styles.pageTitle} >Aponte problemas com coleta de lixo</Text>
          </View>

          <Formik 
            initialValues={{HasWasteCollection: 'true', HowOften: '0', Long: position.longitude,
            Lat: position.latitude,  Description: 'no comments'}} 
           
            onSubmit={values => {

                // MAKING SURE ALL GEOLOCATIONS VALUES  ARE CORRECT HERE!           
                               
                console.log(values)
               
                api.post('api/trash/', {
                  HasWasteCollection: values.HasWasteCollection,
                  HowOften: values.HowOften,
                  Long: position.longitude,
                  Lat: position.latitude,  
                  Description: 'no comments'
                })
                .then(res => 
                   // console.log(res)
                  Alert.alert('Obrigado','Problema reportado com sucesso!')
                ).catch(err => console.log('Ocorreu um erro: ', err)); 

              }
              
            }>
            {({ handleChange, handleSubmit, values }) => (

          <View style={{marginTop:30}}>
          <Text style={styles.description} >Possui coleta de lixo na sua casa?</Text>
          <View style={styles.container}>
                  <Picker 
                    selectedValue={values.HasWasteCollection}
                    style={{ height: 50 }}
                    onValueChange={handleChange('HasWasteCollection')}
                  >
                    <Picker.Item label="Sim" value="true" />
                    <Picker.Item label="Não" value="false" />
                  </Picker>
                </View>

          <Text style={styles.description} >Com que frequencia?</Text>
          <View style={styles.container}>
                  <Picker
                    selectedValue={values.HowOften}
                    style={{ height: 50 }}
                    onValueChange={handleChange('HowOften')}
                  >
                    <Picker.Item label="Nenhuma" value="0" />
                    <Picker.Item label="1x Semana" value="1" />
                    <Picker.Item label="3x Semana" value="2" />
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
            longitudeDelta: 0.0032,
            latitudeDelta: 0.0033
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
    </View>
  );
}