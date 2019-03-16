import { Component, OnInit } from '@angular/core';
import { Wowclasses } from '../wowclasses';
import { ListService } from '../list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ListService],
})
export class ListComponent implements OnInit {
  title: string = 'world of warcraft classes';
  selectedIndex: number;

  newCharacter: Wowclasses = new Wowclasses();

  constructor(private wowClasses: ListService) { }
  /*Set index on class so i can pinpoint them and add class.*/
  setIndex(index: number) {
    this.selectedIndex = index;
  }

  /*add,remove(not done yet) and a function to get all the characters*/

  addCharacter() {
    this.wowClasses.addCharacter(this.newCharacter, this.newCharacter);
    this.newCharacter = new Wowclasses;
  }

  removeCharacter(character: any) {
    console.log(character)
    this.wowClasses.removeItem(character.id);
  }

  /*Get the array-- and the id*/
  get allCharacters() {
    return this.wowClasses.getAllCharacters();
  }



  ngOnInit() { }


}
