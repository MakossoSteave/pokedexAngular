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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,
    BorderCardDirective,PokemonDayPipe
    , TitleDirective, PokemonTypeColorPipe],
  templateUrl: 'app.component.html',
  styles: [],
})


export class AppComponent implements OnInit {
  pokemonLists: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined



  constructor(private sanitizer: DomSanitizer) { }
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  ngOnInit(): void {
  }

  selectPokemon(pokemonId: String) {
    const index: number = + pokemonId;
    const pokemon: Pokemon | undefined = this.pokemonLists.find(pokemon => pokemon.id == +pokemonId)
    if (pokemon) {
      console.log(`vous avez clické sur ${pokemon?.name}`)
      this.pokemonSelected = pokemon;
    } else {
      console.log(`vous avez demandé un pokemon qui n'existe pas `)
      this.pokemonSelected = pokemon;
    }



  }
}
