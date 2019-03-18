import { Injectable } from '@angular/core';
import { City } from './city';


@Injectable({
  providedIn: 'root'
})
export class TravelService {

  cities: City[] = [{
    city: 'Göteborg',
    typeOfTravel: 'Bike',
    worthSeeing: 'Vasa Parken',
  }, {
    city: 'Paris',
    typeOfTravel: 'Train',
    worthSeeing: 'snobby french people',
  }, {
    city: 'Buenos Aires',
    typeOfTravel: 'Airplane',
    worthSeeing: 'Eat good meat'
  },
  {
    city: 'Hålanda',
    typeOfTravel: 'Häst and Vagn',
    worthSeeing: 'The countryside',
  },
  {
    city: 'Copenhagen',
    typeOfTravel: 'Train',
    worthSeeing: 'Drink beer all day long',
  },
  {
    city: 'London',
    typeOfTravel: 'Airplane',
    worthSeeing: 'Big ben'
  },
  {
    city: 'Mumbai',
    typeOfTravel: 'Airplane',
    worthSeeing: 'Elephant Island'
  },
  {
    city: 'New Delhi',
    typeOfTravel: 'Awesome Train',
    worthSeeing: 'Food!'
  },
  {
    city: 'New York',
    typeOfTravel: 'Airplane',
    worthSeeing: 'Empire State Building'
  }
  ];

  getAllCities(): City[] {
    return this.cities
  };

  constructor() { }

}
