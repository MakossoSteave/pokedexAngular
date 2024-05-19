import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';


export const routes: Routes = [
    {path :'pokemon', component : ListPokemonComponent},
    {path :'pokemon/:id', component : DetailPokemonComponent},
    {path : '', redirectTo : 'pokemon', pathMatch : 'full'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports : [RouterModule],
    providers:[]
})
export class AppRoutingModule{}
