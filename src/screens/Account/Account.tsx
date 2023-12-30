import { JSX, useState } from "react";
import { SafeAreaView } from 'react-native';
// estilos
import styles from './Account.styles';
// hooks personalizados
import useAuth from "../../hooks/useAuth";
// componentes
import Login from "../../components/Auth/Login/Login";
import UserData from "../../components/Auth/UserData/UserData";

export default function Account(): JSX.Element {

  // accediendo a la informacion del contexto para facilitar los datos
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      {
        (user === null) ? <Login /> : <UserData />
      }
    </SafeAreaView>
  );
}
