import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppRoutingModule } from '../app.routes';
import { PokemonRoutingModule } from './pokemon-route';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    RouterOutlet,
    CommonModule,
    PokemonRoutingModule,FormsModule
 ],
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,BorderCardDirective,
    PokemonTypeColorPipe
  ],
  providers:[PokemonService]

})
export class PokemonModule { }
