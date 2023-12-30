import { createStackNavigator } from "@react-navigation/stack";
import Pokedex from "../screens/Pokedex/Pokedex";
import Pokemon from "../screens/Pokemon/Pokemon";

const Stack = createStackNavigator();


const PokedexNavigation = () : JSX.Element => {

 return (
  <Stack.Navigator initialRouteName="Pokemons" screenOptions={{headerTitleAlign: 'center'}}>

    <Stack.Screen 
      name="Pokemons" 
      component={Pokedex}
      options={{
        headerTitle: 'Pokemons',
      }}
    />

    <Stack.Screen 
      name="Pokemon" 
      component={Pokemon}
      options={{
        headerTitle: '',
        headerTransparent: true
      }}
    />

  </Stack.Navigator>
 )
}


export default PokedexNavigation;