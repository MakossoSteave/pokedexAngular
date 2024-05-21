import { Component, Directive, OnInit, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './pokemon/mock-pockemon-list';
import { Pokemon } from './pokemon';
import { PokemonModule } from './pokemon/pokemon.module';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,CommonModule,PokemonModule ],
  templateUrl: 'app.component.html',
  styles: [],
})


export class AppComponent {
  pokemonLists: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined



 



}
