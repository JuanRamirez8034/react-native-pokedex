import { StyleSheet, Platform } from 'react-native';
import { yellow, white, grayLight } from '../../utils/Colors';

const styles = StyleSheet.create({
 cardContainer: {
  flex:1,
  padding: 4,
  backgroundColor: grayLight,
},
dataContainer: {
  flex:1,
  gap: 4,
  borderRadius: 16
 },
 image : {
  width : '60%',
  aspectRatio: 1,
  marginLeft: '20%',
  resizeMode: 'contain'
 },
 plant: {
  position: 'absolute',
  bottom: 24,
  width: '50%',
  height: 38,
  backgroundColor: white,
  borderRadius: 100, 
  zIndex: -1,
  left: '25%',
 },
 name : {
  textAlign: 'center',
  fontSize: 16,
  fontWeight: 'bold',
  color: white
 },
 order: {
  fontSize:12,
  position: 'absolute',
  right: 24,
  top: 12,
  color: yellow,
  textShadowColor : white
 },
  
 indicator: {
  marginBottom: Platform.OS === "android" ? 34 : 24,
 }
});

export default styles;
