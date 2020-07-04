import { Directive,  ElementRef} from '@angular/core';

@Directive({
  selector: '[appDoneTask]'
})

export class DoneTaskDirective {

  constructor( private el: ElementRef) { 
      el.nativeElement.style.backgroundColor = "yellow";
  }

}
