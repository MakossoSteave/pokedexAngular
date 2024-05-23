import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-detail-pokemon',
  standalone: false,
  templateUrl: './detail-pokemon.component.html',
})

export class DetailPokemonComponent implements OnInit {

  pokemonList : Pokemon[];
  pokemon : Pokemon|undefined;

  constructor(
    private route : ActivatedRoute ,
    private router : Router,
    private PokemonService : PokemonService
   ){}


  ngOnInit(): void {
    const pokemonId : string|null = this.route.snapshot.paramMap.get('id')
    if(pokemonId){
      this.pokemon=this.PokemonService.getPokemonById(+pokemonId);
    }
  }
  Goback() {
    this.router.navigate(['./pokemons/pokemon'])
    }
    goToEdit(pokemon:Pokemon){
      this.router.navigate(['./pokemons/edit/pokemon/'+pokemon.id])
    }

}
