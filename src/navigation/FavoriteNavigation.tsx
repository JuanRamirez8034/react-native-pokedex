import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "../screens/Favorite/Favorite";
import Pokemon from "../screens/Pokemon/Pokemon";

const Stack = createStackNavigator();


const FavoriteNavigation = () : JSX.Element => {

 return (
  <Stack.Navigator>
    <Stack.Screen 
      name="Favorite" 
      component={Favorite}
      options={{
        headerTitle: 'Favoritos',
        headerTitleAlign: 'center'
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


export default FavoriteNavigation;