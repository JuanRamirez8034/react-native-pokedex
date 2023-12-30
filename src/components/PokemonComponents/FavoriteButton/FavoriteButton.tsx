import React, { useEffect, useState } from 'react';
// librerias externas
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconFA from 'react-native-vector-icons/FontAwesome';
// utils
import { addPokemonFavoriteApi, deletePokemonFavoriteApi, isPokemonFavoriteApi } from '../../../api/favoriteAsyncStorage.api';
// estilos
import Styles from './FavoriteButton.styles';
// interfaces
import { PokemonDetails } from '../../../models/PokemonDetails.interface';

interface Props {
  pokemonId : PokemonDetails['id'];
}

const FavoriteButton : React.FC<Props> = ({pokemonId}) => {
  // estado para el icono de si esta o no en favorito
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  // estado para actualizar el 'useEfect' cada vez que se precione el boton (tecnica del interruptor)
  const [reloadCheck, setRealoadCheck] = useState<boolean>(false);

  // comprobar cada vez que se cambie la id de pokemon
  useEffect(()=>{
    (async ()=>{
      try {
        const resp = await isPokemonFavoriteApi(pokemonId);
        setIsFavorite(resp);
      } catch (error) {
        console.log('[-] Determine favorite button status');
        setIsFavorite(false);
      }
    })();
  }, [pokemonId, reloadCheck]);

  // resolver agregar a favoritos
  const handleFavorite = async () => {
    try {
      // si no se encuentra en favoritos se agrega
      if(!isFavorite){
        console.log('[*] Add favorite', pokemonId);
        await addPokemonFavoriteApi(pokemonId);
        onReloadCheck(); // actualizar estado del boton
        console.log('[+] Added favorite');
        return;
      }
      // si se encuentra en favoritos se elimina
      console.log('[*] Delete favorite',  pokemonId);
      await deletePokemonFavoriteApi(pokemonId);
      onReloadCheck();
      console.log('[+] Deleted favorite');
      
      
    } catch (error) {
      console.log('[-] Handle favorite error');
      onReloadCheck(); // actualizar estado del boton
    }
  };

  // actualizar funcion para recargar boton
  const onReloadCheck = () => setRealoadCheck(!reloadCheck);

  return (
    (isFavorite) 
    ? <IconFA style={[Styles.icon]} name='heart' onPress={handleFavorite}/>
    : <IconFA5 style={[Styles.icon]} name='heart' onPress={handleFavorite}/>
  );
};

export default FavoriteButton;