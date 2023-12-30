import { StyleSheet } from 'react-native';
import { grayBlue } from '../../utils/Colors';

const Styles = StyleSheet.create({
 container: {
  flex:1,
  alignItems:'center',
  justifyContent: 'center',
  paddingHorizontal: 16,
  gap: 8
 },
 textAlert: {
    fontWeight: '300',
    fontSize: 18
 },
 buttonText: {
    color: grayBlue,
    fontWeight: '700',
    textDecorationLine: 'underline'
 }
});

export default Styles;
