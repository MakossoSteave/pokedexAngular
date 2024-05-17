import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  private initColor: string = '#808080';
  private borderColors:string = 'solid 4px ';
  private defaultSize: number = 220 ;
  private defaultColor : string = '#808080';
  private defaultWidth : number = 265;
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
    this.setHeight(250)
    this.setWidth();


  }
  @HostListener('mouseleave') onMouseLeave(){
    this.defaultHeight()
    this.initialColor()
    this.initWidth()
    this.setHeight(220)
    this.defaultWidthSize();
  }

  private initialColor(){
    this.el.nativeElement.style.border = this.borderColors+this.initColor
  
  }

  private initWidth(){
    this.el.nativeElement.style.width = this.Width
  }

  private setHeight(height : number){
    this.el.nativeElement.style.height = height+'px';
  }

  private defaultHeight (){
    this.el.nativeElement.style.height = this.defaultSize+'px'
  }
  private defaultColorBorder(border:string ,data:string){
  
    this.el.nativeElement.style.border = border+data;
  }
  private setWidth(){
    this.el.nativeElement.style.width =  this.defaultWidth + 'px';
  }
  private defaultWidthSize(){
    this.el.nativeElement.style.width =  this.Width + 'px';

  }
  private setBorder(color : string){
    let border = 'solid 4px ' + color
    this.el.nativeElement.style.border = border;
  }
}


