/*Modules from Angular*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*components and routing*/
import { AppComponent } from './app.component';
import { TrafficlightComponent } from './trafficlight/trafficlight.component';
import { BooktravelComponent } from './booktravel/booktravel.component';
import { TravelComponent } from './booktravel/travel/travel.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';

/*Services*/
import { ListService } from './list.service';
import { TravelService } from './travel.service';
import { NavigationService } from './navigator.service';

@NgModule({
  declarations: [
    AppComponent,
    TrafficlightComponent,
    BooktravelComponent,
    TravelComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ListService, TravelService, NavigationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
