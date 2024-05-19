import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styles: ``
})
export class PageNotFoundComponent {

  constructor(private router : Router){}

  notFound(){
    this.router.navigate(['/pokemon'])
  }
}
