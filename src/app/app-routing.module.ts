import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TrafficlightComponent } from './trafficlight/trafficlight.component';
import { BooktravelComponent } from './booktravel/booktravel.component';
import { ListComponent } from './list/list.component';




const appRoutes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'trafficlight', component: TrafficlightComponent, data: { num: 2 } },
  { path: 'bookTravel', component: BooktravelComponent, data: { num: 1 } },
  { path: 'listCharacters', component: ListComponent, data: { num: 2 } },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
