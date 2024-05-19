import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './pokemon/page-not-found/page-not-found.component';


export const routes: Routes = [
    {path : '', redirectTo : 'pokemon', pathMatch : 'full'},
    {path : '**', component: PageNotFoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports : [RouterModule],
    providers:[]
})
export class AppRoutingModule{}
