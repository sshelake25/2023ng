import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../reducers';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {
  constructor(private store: Store) {}
}
