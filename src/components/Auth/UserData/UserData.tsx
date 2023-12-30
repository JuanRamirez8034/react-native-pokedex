import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StatusBar, Alert, ScrollView } from 'react-native';
// librerias externas
import Icon from 'react-native-vector-icons/FontAwesome5';
// hooks personalizados
import useAuth from '../../../hooks/useAuth';
// utils
import { orange } from '../../../utils/Colors';
// estilos
import Styles from './UserData.styles';
// componentes
import MenuListItem from '../../MenuListItem/MenuListItem';
import { PokemonDetails } from '../../../models/PokemonDetails.interface';
import { getPokemonFavoriteApi } from '../../../api/favoriteAsyncStorage.api';
import { size } from 'lodash';
import { useFocusEffect } from '@react-navigation/native';


const UserData : React.FC = () => {

  // estado para el numero de favoritos
  const [totalFavorite, setTotalFavorite] = useState<number>(0);

  // estado para determinar la apertura de la modal
  const [showProfileImage, setShowProfileImage] = useState<boolean>(false);

  // obteniendo informacion del contexto de autenticacion
  const { user, logup } = useAuth();

  // obteneindo la cantidad de favoritos cada vez que se accede a la vista
  useFocusEffect(
    ()=>{
      (async () => {
        await getAndCountFavorites();
      })()
    }
  );

  // funcion para cerrar la modal de visualizacion de imagen
  const closeModalPreviewProfileImage = () => setShowProfileImage(false);

  // funcion para opcion de cambiar imagen (no implementada)
  const replaceProfileImage = () => Alert.alert('Warning!', 'Feature under development');

  // funcion para obtener la longitud de valores (pokemons) en favoritos
  const getAndCountFavorites = async () : Promise<void> => {
    try {
      const resp : Array<PokemonDetails['id']> = await getPokemonFavoriteApi();
      setTotalFavorite(size(resp));
    } catch (error) {
      setTotalFavorite(0);
    }
  }

  // funcion para desloguearse
  const handleLogup = () : void => {
    console.log('[+] Promp logup!');
    
    Alert.alert(
      'Warning!', 
      'You are sure?', 
      [
        {
          text: 'Done',
          onPress: () => logup()
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('[+] Loguo cancel')
        
      }
    );
  };

  return (
    <ScrollView style={Styles.container}>

      <Text style={Styles.title}>Account Data</Text>

      <Text style={Styles.subTitle}>Welcome!</Text>

      <View style={Styles.profileImageContainer}>
        <View style={Styles.profileImageContent}>
          <TouchableOpacity onPress={()=>setShowProfileImage(true)}>
            <Image style={Styles.profileImage} source={require('../../../assets/profile-pokemon-picture.jpg')} />
          </TouchableOpacity>
        </View>
      </View>

      <MenuListItem label='First Name' value={user!.firstName} />
      <MenuListItem label='Last Name' value={user!.lastName} />
      <MenuListItem label='Email' value={user!.email} />
      <MenuListItem label='Favorites' value={totalFavorite + ' Pokemons'} />

      <TouchableOpacity style={Styles.logupButton} onPress={handleLogup}>
        <Text style={Styles.logupButtonText}>Logup</Text>
        <Icon style={Styles.logupButtonText} name='sign-out-alt'/>
      </TouchableOpacity>


      {/* modal para ver la imagen de perfil!!!!!! */}
      <Modal visible={showProfileImage}>
        <StatusBar backgroundColor={orange} />
        <View style={Styles.modalPreviewImageContainer}>
          <View style={Styles.modalPreviewImageToolBar}>
            <Icon onPress={replaceProfileImage} style={Styles.modalPreviewImageToolBarIcon} name='edit' />
            <Icon onPress={closeModalPreviewProfileImage} style={{...Styles.modalPreviewImageToolBarIcon, fontSize: 20}} name='times' />
          </View>
          <Image style={{width: '100%', resizeMode: 'contain'}} source={require('../../../assets/profile-pokemon-picture.jpg')} />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default UserData;