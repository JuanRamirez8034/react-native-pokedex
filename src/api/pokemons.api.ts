import { POKEMONS_API } from "../utils/API.PATH";
import { LimitPokemons } from "../models/LimitPokemonsResponse.interface";
import { PokemonDetails } from "../models/PokemonDetails.interface";

/**
 * Obtener 20 pokemons de la api de pokemons
 * @returns Promise<LimitPokemons | null>
 */
export const getLimitedPokemons = async (nextUrl: null | string) : Promise<LimitPokemons | null> => {
  try {
    const resp   : Response      = await fetch(nextUrl !== null ? nextUrl : `${POKEMONS_API}/pokemon/?limit=20&offset=0`);
    const result : LimitPokemons = await resp.json();    
    return result;
  } catch (error) {
    return logError(error);
  }
}

/**
 * Obtener toda la información de un pokemón a traves de su url
 * @param url  string
 * @returns Promise<LimitPokemons | null>
 */
export const getOnePokemoDetailsByUrl =async (url:string):Promise<PokemonDetails | null> => {
  try {
    const resp = await fetch(url);
    const result : PokemonDetails = await resp.json();
    return result;
  } catch (error) {
    return logError(error);
  }
}

/**
 * Obtener toda la información de un pokemón a traves de su id
 * @param id  number
 * @returns Promise<LimitPokemons | null>
 */
export const getOnePokemoDetailsById =async (id:PokemonDetails['id']):Promise<PokemonDetails | null> => {
  try {
    const resp = await fetch(`${POKEMONS_API}/pokemon/${id}`);
    const result : PokemonDetails = await resp.json();
    return result;
  } catch (error) {
    return logError(error);
  }
}


/**
 * Imprimior los errores
 * @param error unknown
 */
const logError =  (error:unknown) : null => {
  console.error('[FETCH ERROR]', error);
  return null;
}