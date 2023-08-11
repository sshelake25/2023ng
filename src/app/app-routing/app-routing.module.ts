import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BirthHistoryComponent } from '../birth-history/birth-history.component';
import { PatientHistoryComponent } from '../patient-history/patient-history.component';

const routes: Routes = [
  {
    path: 'birth-history',
    component: BirthHistoryComponent,
  },
  {
    path: 'patient-history',
    component: PatientHistoryComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
