import { Component } from '@angular/core';
import { BorderCardDirective } from '../border-card.directive';
import { TitleDirective } from '../title.directive';
import { PokemonDayPipe } from '../pokemon-day.pipe';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pockemon-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [ BorderCardDirective,PokemonDayPipe,TitleDirective,PokemonTypeColorPipe,CommonModule],
  templateUrl: './list-pokemon.component.html',
  styles: ``
})

export class ListPokemonComponent {

  pokemonLists: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined
  
  selectPokemon(pokemonId: String) {
    const index: number = + pokemonId;
    const pokemon: Pokemon | undefined = this.pokemonLists.find(pokemon => pokemon.id == +pokemonId)
    console.log(pokemon)
    if (pokemon) {
      console.log(`vous avez clické sur ${pokemon?.name}`)
      this.pokemonSelected = pokemon;
    } else {
      console.log(`vous avez demandé un pokemon qui n'existe pas `)
      this.pokemonSelected = pokemon;
    }



  }
}
