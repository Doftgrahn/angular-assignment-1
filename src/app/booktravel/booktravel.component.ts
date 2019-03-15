import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { City } from '../city';
@Component({
  selector: 'app-booktravel',
  templateUrl: './booktravel.component.html',
  styleUrls: ['./booktravel.component.scss']
})
export class BooktravelComponent implements OnInit {
selectedIndex:number;


  cities: City[] = [{
    city: 'Göteborg',
    typeOfTravel: 'Bike'
  }, {
    city: 'Paris',
    typeOfTravel: 'Train'
  }, {
    city: 'Buenos Aires',
    typeOfTravel: 'Airplane'
  },
  {
    city: 'Hålanda',
    typeOfTravel: 'Häst and Vagn'
  },
  {
    city: 'Copenhagen',
    typeOfTravel: 'Train'
  },
  ];

  constructor() { }

  selectCity: City = null;
  @Output() onSelected = new EventEmitter<City>();
@Input() blue:string;

  ngOnInit() {
  }

  SelectedCity(city: City) {
    this.selectCity = city;
    this.onSelected.emit(city);
  }

  setIndex(index: number) {
this.selectedIndex = index;
}

}
