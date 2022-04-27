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

  link:{
    color: colors.white,
    fontSize: fonts.small,
    textDecorationLine: 'underline',
  },
  head: {
    width: 345,
    height: 200,
 },
});

export default styles;