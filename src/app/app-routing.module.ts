import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TrafficlightComponent } from './trafficlight/trafficlight.component';
import { BooktravelComponent } from './booktravel/booktravel.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'trafficlight', component: TrafficlightComponent },
  { path: 'bookTravel', component: BooktravelComponent },
  { path: 'listCharacters', component: ListComponent },];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
