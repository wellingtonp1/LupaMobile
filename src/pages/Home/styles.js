import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    borderRadius: 3,
    width: (width - 35) / 2,
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
    height: 80,
    resizeMode: 'contain',
  },

  infoContainer: {
    padding: metrics.padding,
    borderTopWidth: 1,
    borderColor: colors.lighter,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darker,
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
    width: 320,
    height: 165,
 },
});

export default styles;