import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../../city';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  @Input() city: string;
  @Input() typeOfTravel: string;
  @Output() onSelected = new EventEmitter<City>();

  constructor() { }

  ngOnInit() { }

  handleClick() {
    this.onSelected.emit({
      city: this.city,
      typeOfTravel: this.typeOfTravel,
    });
  }




}
