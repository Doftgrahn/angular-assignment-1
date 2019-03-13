import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrafficlightComponent } from './trafficlight/trafficlight.component';
import { BooktravelComponent } from './booktravel/booktravel.component';
import { TravelComponent } from './booktravel/travel/travel.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficlightComponent,
    BooktravelComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
