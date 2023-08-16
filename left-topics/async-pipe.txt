import { Component } from '@angular/core';
import { of, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <div>{{ myObservable | async }}</div>
  `
})
export class AppComponent {
  myObservable = interval(1000).pipe(take(10));
}
