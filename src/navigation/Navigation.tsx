import { Image } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import { orange, purple, gray, grayLight } from "../utils/Colors";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';


const Tab = createBottomTabNavigator();

const Navigation = () : JSX.Element => {

  /**
   * Los colores y las propiedades tabien se pueden definir directamente en cada elemento
   * Loca colores que se pasan a traves de la función es el definido en el objeto de options
   */
  return (
    <Tab.Navigator initialRouteName="Pokedex" screenOptions={{
      header: ()=> false,
      tabBarActiveBackgroundColor : grayLight,
      tabBarActiveTintColor: purple,
    }}>

      <Tab.Screen 
        name="Account" 
        options={{
          tabBarLabel :()=> (false),
          tabBarIcon : ({color, size })=> (<Icon name="user" size={size} color={color} />),
        }} 
        component={AccountNavigation}
      />

      <Tab.Screen 
        name="Pokedex" 
        children={PokedexNavigation}
        options={{
          tabBarLabel :()=> (false),
          tabBarIcon : ({color, size })=> (<PokemonImg size={size}/>),
          tabBarActiveBackgroundColor : orange,
        }}
      />

      <Tab.Screen 
        name="Favorites"
        children={FavoriteNavigation}
        options={{
          tabBarLabel :()=> (false),
          tabBarIcon : ({color, size })=> (<Icon name="heart" size={size} color={color} />),
        }}
      />

    </Tab.Navigator>
  );
}

/**
 * Funcion para retornar una imagen del pokemon
 */
const PokemonImg = ({size}:{size:number,}) : JSX.Element => {
  
  return (
    <Image 
      source={require('../assets/pikachu-2.png')}
      style={{
        width: size * 4.5,
        height: size * 4.5,
        top: -size * 1.44
      }}
    />
  )
}

export default Navigation;