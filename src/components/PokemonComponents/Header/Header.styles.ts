import { StyleSheet } from 'react-native';
import { white } from '../../../utils/Colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  background: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
    borderBottomLeftRadius: 300,
    borderBottomEndRadius: 200,
    transform: [{ scaleX: 2 }],
    position: 'absolute',
  },
  headerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
  },
  name: {
    fontSize: 24,
    color: white,
    fontWeight: '900'
  },
  order: {
    color: white,
    fontWeight: '900'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 250, 
    aspectRatio: 1,
    resizeMode: 'contain'
  }
});

export default styles;
