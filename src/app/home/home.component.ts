import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  Observable,
  filter,
  find,
  first,
  from,
  interval,
  map,
  take,
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  timer = from([1, 2, 3]);

  constructor(private myhttp: HttpClient) {}

  ngOnInit() {
    let apiURL = 'assets/config.json';

    this.myhttp.get(apiURL).subscribe({
      next: (success) => {
        console.log(success);
      },
      error: (error) => {
        console.log(error);
      },
    });

    //  this.myhttp.get('http://hee.com')
    //  .subscribe( {
    //   next: (success) => {
    //     console.log(`m ==> ${success}`);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });

    let numbers = [20, 45, 50, 10, 1, 4];
    let final = numbers.filter((val) => val > 20);
    console.log(final);

    //let timer = from([1,2,3]); // creating strem of values called observable by rxjs
    this.timer.subscribe((values) => console.log(values));

    let myInternal = interval(1).pipe(
      take(100),
      map((val) => val * 2),
      filter((val) => val > 20)
      // find((value) => value > 99)
    ); // emit strean if values // obser

    // myInternal.subscribe({
    //   next: (success) => {
    //     console.log(`I am out put of stream ==> ${success}`);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
  }
}
