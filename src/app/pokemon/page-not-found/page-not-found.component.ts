import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: false,
  templateUrl: './page-not-found.component.html',
  styles: ``
})
export class PageNotFoundComponent {

  constructor(private router : Router){}

  notFound(){
    console .log("he")
    this.router.navigate(['/pokemons/pokemon'])
  }
}
