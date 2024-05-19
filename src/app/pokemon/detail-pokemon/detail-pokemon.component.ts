import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pokemon } from '../../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { POKEMONS } from '../mock-pockemon-list';


@Component({
  selector: 'app-detail-pokemon',
  standalone: false,
  templateUrl: './detail-pokemon.component.html',
})

export class DetailPokemonComponent implements OnInit {

  pokemonList : Pokemon[];
  pokemon : Pokemon|undefined;

  constructor(private route : ActivatedRoute , private routers : Router){}


  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId : string|null = this.route.snapshot.paramMap.get('id')
    if(pokemonId){
       this.pokemon= this.pokemonList.find(pokemon =>pokemon.id == +pokemonId)
    }
  }
  Goback() {
    this.routers.navigate(['/pokemon'])
    }
    

}
