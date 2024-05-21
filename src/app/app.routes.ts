import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pokemon/page-not-found/page-not-found.component';


export const routes: Routes = [
    {path : '', redirectTo : 'pokemons/pokemon', pathMatch : 'full'},
    {path : 'pokemons',loadChildren:()=>import('./pokemon/pokemon.module').then(m=>m.PokemonModule)},
    {path : '**', component: PageNotFoundComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports : [RouterModule],
    providers:[]
})
export class AppRoutingModule{}
