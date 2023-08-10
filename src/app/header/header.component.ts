import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  //templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css'],
  template: `<h1>I am header <h1>`,
  styles: [
    'h1 { font-size: 30px; }'
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  //component , directirve 
  //lifecyclye hooks

  constructor() {
    console.log(`I am in constructor`);
  }

  ngOnInit() {
    console.log(`I am in ngOnInit`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy`);
  }

}
