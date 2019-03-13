import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrafficlightComponent } from './trafficlight/trafficlight.component';
import { BooktravelComponent } from './booktravel/booktravel.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficlightComponent,
    BooktravelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
