// librerias externas
import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
// utilidades
import { FAVORITE_STORAGE } from "../utils/Constants";
// interfaces
import { PokemonDetails } from "../models/PokemonDetails.interface";

/**
 * Agregar pokemons a los favoritos en el localStorage
 * @param pokemonId number
 * @returns Promise<void>
 */
export const addPokemonFavoriteApi = async (pokemonId:PokemonDetails['id']) : Promise<void> => {
    try {
        // obteniendo la lista de favoritos desde el localStorage
        const favorites : Array<PokemonDetails['id']> = await getPokemonFavoriteApi();
        // agregar a favoritos en caso de que no se encuentre el id del pokemon
        if(!includes(favorites, pokemonId)) favorites.push(pokemonId);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        console.log('[-] Add favorite storage error');
        throw error;
    }
};

/**
 * Obtener los favoritos desde el localStorage
 * @returns Promise<Array<PokemonDetails['id']>>
 */
export const getPokemonFavoriteApi =async () : Promise<Array<PokemonDetails['id']>> => {
    try {
        const resp = await AsyncStorage.getItem(FAVORITE_STORAGE);
        if(resp !== null) return (JSON.parse(resp) as Array<PokemonDetails['id']>);
        return [];
    } catch (error) {
        console.log('[-] Get favorite storage error');
        throw error;
    }
};

/**
 * Determinar si el pokemon ya existe en la lista de favoritos
 * @param pokemonId number
 * @returns Promise<boolean>
 */
export const isPokemonFavoriteApi =async (pokemonId:PokemonDetails['id']) : Promise<boolean> => {
    try {
        // obteniendo la lista de favoritos desde el localStorage
        const favorites : Array<PokemonDetails['id']> = await getPokemonFavoriteApi();
        const result = includes(favorites, pokemonId);
        return result;
    } catch (error) {
        console.log('[-] Is valid favorite storage error');
        throw error;
    }
};

/**
 * Eliminar un pokemon de los favoritos del localStorage
 * @param pokemonId number
 */
export const deletePokemonFavoriteApi = async (pokemonId:PokemonDetails['id']) : Promise<void> => {
    try {
        const favorites : Array<PokemonDetails['id']> = await getPokemonFavoriteApi();
        const newFavorites : Array<PokemonDetails['id']> = pull(favorites, pokemonId);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
    } catch (error) {
        console.log('[-] Delete favorite storage error');
        throw error;
    }
}