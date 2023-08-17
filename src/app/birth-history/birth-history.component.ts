import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-birth-history',
  templateUrl: './birth-history.component.html',
  styleUrls: ['./birth-history.component.css'],
})
export class BirthHistoryComponent {
  birthdate = new Date(1988, 3, 15);
  name = 'hello world i am good';

  //create onbserval in rxjs
  persons = of([
    { name: 'hello', age: 20 },
    { name: 'bard', age: 30 },
  ]);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.persons.subscribe({
    //   next: (value) => {
    //     //collect vale from apis
    //     console.log(value);
    //   },
    // });

    //data value from rouet
    this.route.data.subscribe(
      (value) => {
        console.log(value);
      },
      (error) => {}
    );

    //New sytnex for

    this.route.data.subscribe({
      next: () => {
        console.log('i ma sunncess ');
      },
      error: () => {
        console.log('i ma error ');
      },
      complete: () => {
        console.log('i ma complete ');
      },
    });

    this.route.paramMap.subscribe(
      (value) => {
        console.log(value);
      },
      (error) => {}
    );

    this.route.queryParams.subscribe(
      (params) => {
        console.log(params);
      },
      (error) => {}
    );
  }
}
