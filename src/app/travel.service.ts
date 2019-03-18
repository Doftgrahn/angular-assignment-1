import { Injectable } from '@angular/core';
import { City } from './city';


@Injectable({
  providedIn: 'root'
})
export class TravelService {

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

  getAllCities(): City[] {
    return this.cities
  };

  constructor() { }

}
