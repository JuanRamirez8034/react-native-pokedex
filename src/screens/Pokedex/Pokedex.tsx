import { JSX, useEffect, useState } from "react";
import { Text, SafeAreaView, Alert } from 'react-native';
// estilos
import styles from './Pokedex.styles';
// importaciones de interfaces
import { getLimitedPokemons, getOnePokemoDetailsByUrl } from "../../api/pokemons.api";
import { LightPokemon } from "../../models/PokemonLightDetails.interface";
// componentes
import PokemosList from "../../components/PokemosList/PokemonList";
import { StatusBar } from "expo-status-bar";

export default function Pokedex() : JSX.Element {

  // estado para almacenar los pokemons con su información
  const [pokemons, setPokemons] = useState<Array<LightPokemon>>([]);
  // estado para almacenar la url de la siguiente consulta al endPoint
  const [nextUrl, setNextUrl] = useState<string|null>(null);

  useEffect(()=>{
    // ejecutando la busqueda de los pokemons y mostrandolos de forma asincrona
    (async () => {await loadPokemons();})();

  }, []);

  // conseguir los pokemons
  const loadPokemons = async () : Promise<void> => {
    const resp = await getLimitedPokemons(nextUrl);
    console.log(nextUrl);
    setNextUrl(resp?.next ?? null);
    
    
    // validando que la respuesta se haya ejecutado con exito 
    if(resp === null ) {
      Alert.alert('Aviso', 'Error al obtener los pokemons');
      return;
    };

    const pokemonsTemp : Array<LightPokemon> = [];

    for await (const _pokemon of resp.results) {
      
      // buscando información
      const pokemonData = await getOnePokemoDetailsByUrl(_pokemon.url);
      // validando respuesta valida
      if(pokemonData === null ){
       throw Error('[Fecth Array Error] Error al obtener los detalles de un pokemon');
      }
      // agregando la información al arreglo temporal
      pokemonsTemp.push({
        id: pokemonData.id,
        name: pokemonData.name,
        type: pokemonData.types[0].type.name,
        order: pokemonData.order,
        image: pokemonData.sprites.other?.["official-artwork"].front_default ?? ''
      });
    }
    // agregando la información al arreglo
    setPokemons([...pokemons ,...pokemonsTemp]);
    console.log(pokemons.length);
    
  }
  
  return (
   <SafeAreaView>
    <StatusBar  hidden/>
    <PokemosList 
      pokemons={pokemons}
      getMorePokemons={loadPokemons}
      isNext={nextUrl}
    />
   </SafeAreaView>
  );
}