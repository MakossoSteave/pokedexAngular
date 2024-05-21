// feature.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

const Pokemonroutes: Routes = [
    {path :'pokemon', component : ListPokemonComponent},
    {path :'pokemon/:id', component : DetailPokemonComponent},
  ]
  
@NgModule({
  imports: [RouterModule.forChild(Pokemonroutes)],
  exports: [RouterModule]
  
})
export class PokemonRoutingModule {}
