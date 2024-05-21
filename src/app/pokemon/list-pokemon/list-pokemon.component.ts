import { Component, OnInit } from '@angular/core';
import { BorderCardDirective } from '../border-card.directive';
import { TitleDirective } from '../../title.directive';
import { PokemonDayPipe } from '../../pokemon-day.pipe';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Pokemon } from '../../pokemon';
import { POKEMONS } from '../mock-pockemon-list';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: false,
  templateUrl: './list-pokemon.component.html',
  styles: ``
})

export class ListPokemonComponent implements OnInit {


  pokemonList: Pokemon[];

  constructor(
    private router :Router,
    private pokemonService :PokemonService

  ){}
  ngOnInit(){
    this.pokemonList = this.pokemonService.getPokemonList() ;
  }
  
  goDetail(id:number) {
    this.router.navigate(["pokemons/pokemon/"+id])
    }

}
