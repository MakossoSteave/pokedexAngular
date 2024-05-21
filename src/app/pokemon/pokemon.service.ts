import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from './mock-pockemon-list';

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS
  }
  getPokemonById(pokemonId:number):Pokemon|undefined{
    return POKEMONS.find(pokemon =>pokemon.id == pokemonId)
  }
  getPokemonType():string[]{
    return ['Plante','Feu','Eau','Insecte','Normal','Electrik','Poison']
  }
}
