import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTitle]',
  standalone: true
})
export class TitleDirective {

  constructor( private el : ElementRef) {}

  @HostListener ('mouseenter') mouseEnter(){
    this.changeSize(200)
    this.changeColor('#008000')
  }

  @HostListener('mouseleave') mouseLeave(){
    this.changeColor('#000000')
    this.changeSize(180)
  }
  private changeSize(el:number) {
    this.el.nativeElement.style.height = el +'px';
  }
  private changeColor (el :string){
    this.el.nativeElement.style.color = el
  }
}
