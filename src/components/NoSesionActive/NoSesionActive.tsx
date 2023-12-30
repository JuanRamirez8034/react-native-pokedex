import React from 'react'
import { View, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Styles from './NoSesionActive.styles';

const NoSesionActive : React.FC = () => {

  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={Styles.container}>
      <Text style={Styles.textAlert}>Session not available, please log in</Text>
      <TouchableWithoutFeedback onPress={()=> navigation.navigate('Account')}>
        <Text style={Styles.buttonText}>Go to Login</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default NoSesionActive;