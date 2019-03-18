import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-trafficlight',
  templateUrl: './trafficlight.component.html',
  styleUrls: ['./trafficlight.component.scss']
})
export class TrafficlightComponent implements OnInit {
  carPic = '../../assets/cardone.png';
  title: string = 'Traffic Light';

  state: number = 0;

  activeClass: boolean = false;

  onClick() {
    if (this.state == 3) {
      this.state = 0;
    }
    else {
      this.state++;
    }
    setInterval(() => {
      this.activeClass = true;
    }, 1000);
    this.activeClass = false;
  };

  constructor() { }

  ngOnInit() { }
  
}
