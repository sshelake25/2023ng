import { Directive, ElementRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTestImage]',
})
export class TestImageDirective {
  constructor(private ele: ElementRef<any>) {}

  ngOnInit() {
    console.log(this.ele);

    this.ele.nativeElement.backgroudColor = 'red';
  }
}
