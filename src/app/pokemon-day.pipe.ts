import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonDay',
  standalone: true
})
export class PokemonDayPipe implements PipeTransform {

  private Day1:string = 'monday'
  private Day2:string =' tuesday'

  transform(day: number): string {
    console.log("first pipe")
    let jour ;
    switch (day) {
      case 1:
        jour =this.Day1
        break;
      case 2:
        jour =this.Day2
        break
      default:
        jour = this.Day1
        break;
    }

    return jour;
  }

}
