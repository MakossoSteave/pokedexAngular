import { Component, Directive, OnInit, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pockemon-list';
import { Pokemon } from './pokemon';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { BorderCardDirective } from './border-card.directive';
import { TitleDirective } from './title.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonDayPipe } from './pokemon-day.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,
    ListPokemonComponent ,DetailPokemonComponent],
  templateUrl: 'app.component.html',
  styles: [],
})


export class AppComponent {
  pokemonLists: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined



 



}
