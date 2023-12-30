import { JSX, useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
// hooks personalizados
import useAuth from "../../hooks/useAuth";
// utils
import { getPokemonFavoriteApi } from "../../api/favoriteAsyncStorage.api";
import { getOnePokemoDetailsById } from "../../api/pokemons.api";
// estilos
import styles from './Favorite.styles';
// componentes
import PokemonList from '../../components/PokemosList/PokemonList';
// interfaces
import { PokemonDetails } from '../../models/PokemonDetails.interface';
import { LightPokemon } from "../../models/PokemonLightDetails.interface";
import NoSesionActive from "../../components/NoSesionActive/NoSesionActive";


export default function Favorite(): JSX.Element {
  // utilizando el hook de sesion para determinar la sesion activa
  const { user } = useAuth();
  // estado para los pokemons obtenidos
  const [pokemons, setPokemons] = useState<Array<LightPokemon>>([]);

  // se ejecuta cada vez que se cambia la vista de navegacion o segun el valor a observar (es semejante al useEfect)
  useFocusEffect(
    useCallback(()=>{
      (async () => {
        if (user) await loadFavoritePokemons();
      })();
    }, [user])
  );

  const loadFavoritePokemons = async () => {
    // obteniendo el arreglo de pokemons desde el local storage
    const resp: Array<PokemonDetails['id']> = await getPokemonFavoriteApi();

    // obtener toda la informacion de cada pokemon y resumirla
    const pokemonsTemp: Array<LightPokemon> = [];
    
    for await (const pokemonId of resp) {
      const pokemonData = await getOnePokemoDetailsById(pokemonId);
      // validando respuesta valida
      if (pokemonData === null) {
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
    
    // añadiendo los pokemons al estado
    setPokemons(pokemonsTemp)
  };


  return (
    (user)
      ?
      <PokemonList pokemons={pokemons} getMorePokemons={()=>{}} isNext={null}/>
      :
      <NoSesionActive />
  );
}