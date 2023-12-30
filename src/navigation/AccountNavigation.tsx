import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account";

const Stack = createStackNavigator();


const AccountNavigation = () : JSX.Element => {

 return (
  <Stack.Navigator>
    <Stack.Screen 
      name="AccountDetails" 
      component={Account}
      options={{
        headerTitle: 'Account',
        headerTitleAlign: 'center'
      }}
    />
  </Stack.Navigator>
 )
}


export default AccountNavigation;