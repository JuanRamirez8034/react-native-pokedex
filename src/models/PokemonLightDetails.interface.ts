import { PokemonDetails } from "./PokemonDetails.interface";

export interface LightPokemon {
  id : PokemonDetails['id'];
  name:PokemonDetails['name'];
  type: string;
  order: PokemonDetails['order'];
  image: string;
}