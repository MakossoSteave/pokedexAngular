import { Component } from '@angular/core';
import { BorderCardDirective } from '../border-card.directive';
import { TitleDirective } from '../../title.directive';
import { PokemonDayPipe } from '../../pokemon-day.pipe';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Pokemon } from '../../pokemon';
import { POKEMONS } from '../mock-pockemon-list';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  standalone: false,
  templateUrl: './list-pokemon.component.html',
  styles: ``
})

export class ListPokemonComponent {


  pokemonLists: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined

  constructor(private route:Router){}
  
  goDetail(id:number) {
    this.route.navigate(["pokemon/"+id])
    }

}
