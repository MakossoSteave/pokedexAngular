import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: false
})
export class BorderCardDirective {

  private initColor: string = '#808080';
  private borderColors:string = 'solid 4px ';
  private defaultSize: number = 185 ;
  private defaultColor : string = 'red';
  private defaultWidth : number = 260;
  private Width : number = 250

  constructor(private el :ElementRef) { 
    this.defaultColorBorder(this.defaultColor,this.defaultColor);
    this.defaultHeight();
    this.initialColor();
    this.initWidth();
  }
  @Input('pkmnBorderCard') type :string;
  
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.defaultColor);


  }
  @HostListener('mouseleave') onMouseLeave(){
    this.initialColor()
    this.initWidth()

  }

  private initialColor(){
    this.el.nativeElement.style.border = this.borderColors+this.initColor
  
  }

  private initWidth(){
    this.el.nativeElement.style.width = this.Width
  }


  private defaultHeight (){
    this.el.nativeElement.style.height = this.defaultSize+'px'
  }
  private defaultColorBorder(border:string ,data:string){
  
    this.el.nativeElement.style.border = border+data;
    this.el.nativeElement.style.marginTop = '15%'
  }

  private setBorder(color : string){
    let border = 'solid 4px ' + color
    this.el.nativeElement.style.border = border;
  }
}


