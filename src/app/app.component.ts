import { Component } from '@angular/core';
import {routerTransition} from './animation';
import {NavigationService} from './navigator.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition(),
  ],
})

export class AppComponent {
  title = 'angular assignment 1';


constructor(private navigatorService:NavigationService){}


getRouteAnimation(outlet) {
  return this.navigatorService.animationValue;
}

}
