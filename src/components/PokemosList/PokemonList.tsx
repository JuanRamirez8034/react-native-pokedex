import { FlatList, ActivityIndicator, Platform } from 'react-native';
import { useNavigation } from "@react-navigation/native"

import type { StackNavigationProp } from '@react-navigation/stack';
import { grayBlue } from '../../utils/Colors';

import { LightPokemon } from '../../models/PokemonLightDetails.interface';
import PokemonCard from '../PokemonCard/PokemonCard';

// iterfaz de los props
interface PokeDexListProps {
  pokemons        : Array<LightPokemon>; // lista de pokemons
  getMorePokemons : ()=>void;            // funcion para obtener mas pokemons
  isNext          : null | string;       // existe siguiente lista de pokemons??
}

// lista de pokemons (componente)
const PokemosList = ({pokemons, getMorePokemons, isNext}:PokeDexListProps) : JSX.Element => {
  
  const navigation = useNavigation<StackNavigationProp<any>>();
  
  // cargar más pokemons
  const loadPokemons = async () => {
    await getMorePokemons();
  }

  // navegar hacia la pantalla de un pokemon
  const navigate = (id:number) : void =>{
    navigation.navigate('Pokemon', {id});
  }

 return (
  <FlatList 
    style={{gap:8}}
    data={pokemons}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor={(pkmn)=> `${pkmn.id}`}
    renderItem={({item})=> <PokemonCard item={item} navigate={navigate} />}
    onEndReached={isNext ? loadPokemons: undefined}
    onEndReachedThreshold={0.1}
    ListFooterComponent={
      isNext ? (<ActivityIndicator size={'large'} style={{ marginBottom: Platform.OS === "android" ? 34 : 24 }} color={grayBlue} />)
      : undefined
    }
  />
 )
};

export default PokemosList;
