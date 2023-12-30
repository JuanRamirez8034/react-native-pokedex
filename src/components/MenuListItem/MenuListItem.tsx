import {  Text, View } from 'react-native'
import React from 'react'
import Styles from './MenuListItem.styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface Props {
  label: string;
  value: string;
  onPressAction ?: () => void;
}

const MenuListItem : React.FC<Props> = ({label, value, onPressAction}) => {
  return (
    <TouchableWithoutFeedback onPress={()=>{if(onPressAction) onPressAction();}} style={Styles.container}>
      <Text style={Styles.label}>{label ?? 'Label'}:</Text>
      <Text style={Styles.value}>{value ?? 'Value'}</Text>
    </TouchableWithoutFeedback>
  )
}

export default MenuListItem;