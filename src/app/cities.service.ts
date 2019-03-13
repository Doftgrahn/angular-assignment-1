import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cities: City[] = ['Göteborg', 'Paris', 'Buenos Aires', 'Copenhagen'].map(city => ({ city: city }));



  constructor() { }
}
