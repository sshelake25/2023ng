import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AnimalHistoryComponent } from '../animal-history/animal-history.component';
import { BirthHistoryComponent } from '../birth-history/birth-history.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PatientHistoryComponent } from '../patient-history/patient-history.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: "home",
    }
  },
  {
    path: 'birth-history',
    component: BirthHistoryComponent,
    data: {
      title: "hell0",
      configs: "dadsa"
    }
  },
  {
    path: 'patient-history',
    component: PatientHistoryComponent,
    children: [
      {
        path: 'aminal-history',
        component: AnimalHistoryComponent
      }
    ]
  },

  { path: '**', component: NotFoundComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
