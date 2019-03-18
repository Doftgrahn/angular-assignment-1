import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TravelService } from '../travel.service';
import { City } from '../city';

@Component({
  selector: 'app-booktravel',
  templateUrl: './booktravel.component.html',
  styleUrls: ['./booktravel.component.scss']
})

export class BooktravelComponent implements OnInit {
  selectedIndex: number;
  selectCity: City = null;
  @Output() onSelected = new EventEmitter<City>();

  constructor(private travelService: TravelService) { }

  get cities(): City[] {
    return this.travelService.getAllCities()
  }

  SelectedCity(city: City) {
    this.selectCity = city;
    this.onSelected.emit(city);
  }

  unSelect(): any {
    this.selectCity = null;
  }

  onClick(index: number) {
    this.selectedIndex = index;
  }

  ngOnInit() { }
}
