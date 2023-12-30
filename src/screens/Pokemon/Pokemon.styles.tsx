import { StyleSheet } from 'react-native';
import { grayBlue } from '../../utils/Colors';

const styles = StyleSheet.create({
 container: {
  flex:1,
  justifyContent:'center',
  alignContent: 'center'
 },
 loadingText: {
    textAlign:'center',
    color: grayBlue,
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default styles;
