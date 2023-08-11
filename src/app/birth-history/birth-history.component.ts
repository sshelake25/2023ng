import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-birth-history',
  templateUrl: './birth-history.component.html',
  styleUrls: ['./birth-history.component.css'],
})
export class BirthHistoryComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //data value from rouet
    this.route.data.subscribe(
      (value) => {
        console.log(value);
      },
      (error) => {}
    );

    //New sytnex for

    this.route.data.subscribe({
      next: () => { console.log('i ma sunncess ')},
      error: () => { console.log('i ma error ')},
      complete: () => { console.log('i ma complete ')},
    });

    this.route.paramMap.subscribe( (value) => { console.log(value) }, (error) => { });


    this.route.queryParams.subscribe(
      (params) => {
        console.log(params);
      },
      (error) => {}
    );
  }
}
