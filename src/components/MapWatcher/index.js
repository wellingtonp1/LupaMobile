import React from "react";
import Geolocation from 'react-native-geolocation-service';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid
} from "react-native";
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";
import haversine from "haversine";

const LATITUDE = -23.6967893;
const LONGITUDE = -46.7627351;
const LATITUDE_DELTA = 0.0002;
const LONGITUDE_DELTA = 0.0021;

class MapWatcher extends React.Component {
  
    constructor(props) {
        super(props);
    
        this.state = {
          latitude: LATITUDE,
          longitude: LONGITUDE,
          routeCoordinates: [],
          distanceTravelled: 0,
          prevLatLng: {},
          coordinate: new AnimatedRegion({
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: 0,
            longitudeDelta: 0
          })
        };
      }
            
      componentDidMount() {
        const { coordinate} = this.state;
       
        this.watchID = Geolocation.watchPosition(
            position => {
                const { routeCoordinates, distanceTravelled } = this.state;
                const { latitude, longitude } = position.coords;
        
                const newCoordinate = {
                  latitude,
                  longitude
                };
        
                if (Platform.OS === "android") {
                  if (this.marker) {
                    this.marker._component.animateMarkerToCoordinate(
                      newCoordinate, 100        
                     );
                   
                  }
                } else {
                  coordinate.timing(newCoordinate).start();
                }
        
                this.setState({
                  latitude,
                  longitude,
                  routeCoordinates: routeCoordinates.concat([newCoordinate]),
                  distanceTravelled:
                  distanceTravelled + this.calcDistance(newCoordinate),
                  prevLatLng: newCoordinate
                });
              },
              error => console.log(error),
              {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 500,
                distanceFilter: 1,
              });
      }
    
      componentWillUnmount() {
        this.watchID != null && Geolocation.clearWatch(this.watchID);
      }

     
      getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      });
    
      calcDistance = newLatLng => {
       const { prevLatLng } = this.state;
       return haversine(prevLatLng, newLatLng) || 0;
      };

  render() {
    return (
        <View style={{width: '100%', height:340}}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}
        >
          <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
          <Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
            title={'Voc?? esta aqui!'}
            description={'suas coordenadas'}
          />
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
          
            <Text style={styles.bottomBarContent}>
             Dist??ncia percorrida: {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
            <Text style={styles.bottomBarContent}>Coordenadas atuais:</Text>
            <Text style={styles.bottomBarContent}>
             latitude: {parseFloat(this.state.latitude)} 
            </Text>
            <Text style={styles.bottomBarContent}>
             longitude: {parseFloat(this.state.longitude)} 
            </Text>
          </TouchableOpacity>
        </View>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "flex-end",
      alignItems: "center"
    },
    map: {
      ...StyleSheet.absoluteFillObject
    },
    bubble: {
      flex: 1,
      backgroundColor: "rgba(255,255,255,0.7)",
      paddingHorizontal: 18,
      paddingVertical: 12,
      borderRadius: 20
    },
    latlng: {
      width: 200,
      alignItems: "stretch"
    },
    button: {
      width: 80,
      paddingHorizontal: 12,
      alignItems: "center",
      marginHorizontal: 10
    },
    buttonContainer: {
      flexDirection: "row",
      marginVertical: 20,
      backgroundColor: "transparent"
    }
  });
  

export default MapWatcher;