import { useEffect, useState } from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
// librerias externas
import Icon from 'react-native-vector-icons/FontAwesome5';
// hooks personalizados
import useAuth from '../../hooks/useAuth';
// utils
import { white } from '../../utils/Colors';
import { getOnePokemoDetailsById } from '../../api/pokemons.api';
// estilos
import styles from './Pokemon.styles';
// componentes
import Header from '../../components/PokemonComponents/Header/Header';
import Type from '../../components/PokemonComponents/Type/Type';
import Stats from '../../components/PokemonComponents/Stasts/Stats';
import FavoriteButton from '../../components/PokemonComponents/FavoriteButton/FavoriteButton';
// interfaces
import { PokemonDetails } from '../../models/PokemonDetails.interface';

// tipo de la ruta con su nombre de pantalla
type PokemonParamList = {
  Pokemon: { id: number }
}
// tipo para la ruta
type PokemonRouteProp = RouteProp<PokemonParamList, 'Pokemon'>;
// tipo para el navegador
type PokemonNavigationProp = StackNavigationProp<PokemonParamList, 'Pokemon'>;
// interfaz de los props que recibirá el componente
interface Props {
  route: PokemonRouteProp;
  navigation: PokemonNavigationProp;
}

const Pokemon: React.FC<Props> = ({ route, navigation }: Props): JSX.Element => {

  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  // utilizando informacion del contexto
  const { user } = useAuth();

  // modificando los iconos del header para la navegacion
  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => (user!==null && pokemon) ? <FavoriteButton pokemonId={pokemon.id}/> : null,
      headerLeft: () => (
        <Icon 
          name='chevron-left' 
          size={24} 
          style={{marginLeft: 16, color: white}}
          onPress={()=> navigation.goBack()}
        />
      ),
    })
  },[navigation, route.params, pokemon, user]);

  // obteniendo los detalles del pokemos
  useEffect(()=>{
    getPokemonDetails();
  },[route.params.id]);

  // obtener los detalles del pokemos solicitado actualmente
  const getPokemonDetails = async () => {
    const pokemonResp = await getOnePokemoDetailsById(route.params.id);
    // validando respuesta
    if(pokemonResp === null ){
      alert('Error al obtener la información del pokeon');
      navigation.goBack();
      return;
    }
    console.log('[+]Pokemon data ->', pokemonResp);
    setPokemon(pokemonResp);
  }

  if(pokemon === null) return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loadingText}>Cargando...</Text>
    </SafeAreaView>
  );

  return (
    <ScrollView>
      
      <Header 
        name={pokemon.name}
        type={pokemon.types[0].type.name}
        image={pokemon.sprites.other?.["official-artwork"].front_default!}
        order={pokemon.order}
      />

      <Type types={pokemon.types} />

      <Stats stats={pokemon.stats} />

    </ScrollView>
  );
};

export default Pokemon;
