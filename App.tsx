// componentes de terceros
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
// componentes react Native
import { StatusBar } from 'expo-status-bar';
import { JSX } from 'react';

import Navigation from './src/navigation/Navigation';
// PROVEEDOR DEL CONTEXTO DE AUTENTICACION
import { AuthProvider } from './src/context/AuthContext';


export default function App() : JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
