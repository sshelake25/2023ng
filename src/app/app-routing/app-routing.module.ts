import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AnimalHistoryComponent } from '../animal-history/animal-history.component';
import { BirthHistoryComponent } from '../birth-history/birth-history.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PatientHistoryComponent } from '../patient-history/patient-history.component';

const routes: Routes = [
  {
    path: 'birth-history/:patient-id',
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
