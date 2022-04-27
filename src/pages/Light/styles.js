import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    borderRadius: 3,
    width: (width - 45) / 2,
    marginBottom: metrics.padding,
    shadowColor: colors.light,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    alignSelf: 'flex-start',
  },

  checkIcon: {
    position: 'absolute',
    right: metrics.padding,
    top: metrics.padding,
    color: colors.primary,
    zIndex: 1,
  },

  imageContainer: {
    padding: metrics.padding,
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },

  infoContainer: {
    padding: metrics.padding,
    borderTopWidth: 1,
    borderColor: colors.lighter,
  },
  formField: {
    backgroundColor: '#fff',
    marginBottom: metrics.marginTop,
    marginTop: 15,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darker,
  },
  pageTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: fonts.bigger,
  },
  description: {
    textAlign: 'justify',
    color: colors.white,
    fontSize: fonts.big,
    marginBottom: 8,
    marginTop: 8,
  },

  price: {
    textAlign: 'center',
    color: colors.light,
    fontSize: fonts.regular,
    marginTop: 5,
  },
  head: {
    width: 345,
    height: 200,
 },
//
 map: {
  height: '100%',
  width: '100%',
},
logo: {
  backgroundColor: '#fff',
  borderRadius: 15,
  paddingHorizontal: 15,
  elevation: 5,
  marginTop: -730,
  alignSelf: 'center',
  marginRight: 10,
  flexDirection: 'row',
},
logoText: {
  fontWeight: 'bold',
  fontSize: 22,
},
positonBox: {
  backgroundColor: '#fff',
  borderRadius: 20,
  opacity: 0.75,
  marginTop: -170,
  marginHorizontal: 40,
  padding: 25,
  shadowColor: '#000',
  elevation: 5,
},
positonBoxTitle: {
  textAlign: 'center',
  fontSize: 22,
  fontWeight: 'bold',
  color: '#e74c3c',
},
positonBoxLatLon: {flexDirection: 'row', justifyContent: 'space-between'},
locationButton: {
  backgroundColor: '#F5BA39',
  borderRadius: 3,
  marginTop: 5,
  marginBottom: 10,
  width: '100%',
  height: 37,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  elevation: 8},


 //
});

export default styles;