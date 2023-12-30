import { POKEMON_TYPE_COLORS } from "./Colors"


export const getPokemonColorByType = (type:string):string => {
  return POKEMON_TYPE_COLORS[type.toLowerCase()];
}