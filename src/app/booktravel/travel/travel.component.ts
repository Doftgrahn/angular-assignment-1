import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CitiesService } from '../../cities.service';
import { City } from '../../city';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  cities: City[];
  selectedCity: City = null;

  @Output() onSelected = new EventEmitter<City>();

  constructor(private cityService: CitiesService) {
    this.cities = cityService.cities;
  }

  ngOnInit() {
  }


  onSelectedCity(city: City) {
    this.selectedCity = city;
    this.onSelected.emit(city);
  }

}
