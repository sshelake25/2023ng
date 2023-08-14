import { Component, OnInit } from '@angular/core';
import { Observable, find, first, from, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  timer = from([1, 2, 3]);

  ngOnInit() {
    //let timer = from([1,2,3]); // creating strem of values called observable by rxjs
    this.timer.subscribe((values) => console.log(values));

    let myInternal = interval(1).pipe(
      take(100),
      map((val) => val *2),
      find((value) => value > 99)
    ); // emit strean if values // obser

    myInternal.subscribe({
      next: (success) => {
        console.log( `I am out put of stream ==> ${success}`);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
