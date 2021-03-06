import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../../city';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  indexFinder: any;


  @Input() city: string;
  @Input() typeOfTravel: string;
  @Input() worthSeeing:string;
  @Output() onSelected = new EventEmitter<City>();

  constructor() {
  }

  ngOnInit() { }

  handleClick() {
    this.onSelected.emit({
      city: this.city,
      typeOfTravel: this.typeOfTravel,
      worthSeeing:this.worthSeeing,
    });
  }

}
