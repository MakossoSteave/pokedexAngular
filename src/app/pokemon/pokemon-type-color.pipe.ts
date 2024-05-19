import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: false
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(value:string):string {
    let color = 'string'

    switch (value) {
      case "Feu":
         color = 'red lighten-1';
        break;
      case "Electrik"  :
        color = 'lime darken-1';
        break;
      case "Poison":
        color = 'purple darken-1';
        break;
      case "Eau":
        color = 'light-blue';
        break
      default:
        color = 'blue-grey lighten-5';
        break;
    }
    console.log(color)
    return 'chip ' + color;
  }

}
