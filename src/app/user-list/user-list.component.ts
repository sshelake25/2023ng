import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, startWith, switchMap, catchError, map, of } from 'rxjs';
import { UserService } from '../user.service';

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];

  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userSrv: UserService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    this.userSrv
      .getRepoIssues(
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex
      )
      .subscribe({
        next: (result: GithubApi) => {
          this.resultsLength = result.total_count;
          this.data = result.items;
        },
        error: (error) => {
          console.log(error);
        },
      });
   
  }
}