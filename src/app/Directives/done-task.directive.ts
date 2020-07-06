import { Directive,  ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appDoneTask]'
})


export class DoneTaskDirective {
  @Input() status : boolean;
  constructor( private el: ElementRef) {
      el.nativeElement.style.backgroundColor = "yellow";
  }

  ngOnInit(){
    if(!this.status){
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
