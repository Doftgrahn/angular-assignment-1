import { Component, OnInit } from '@angular/core';
import { Wowclasses } from '../wowclasses';
import { ListService } from '../list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title: string = 'world of warcraft classes';
  character: Wowclasses[];
  selectedIndex: number;
  newCharacter = new Wowclasses();

  constructor(private wowClasses: ListService) { }

  addCharacter() {
    this.wowClasses.addCharacter(this.newCharacter);
    this.newCharacter = new Wowclasses;
  }

  removeCharacter(character: any) {
    this.wowClasses.removeItem(character);
    console.log(character)
  }

  get allCharacters() {
    return this.wowClasses.getAllCharacters();
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }

  ngOnInit() {
  }


}
