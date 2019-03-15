import { Injectable } from '@angular/core';
import { Wowclasses } from './wowclasses';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  listClasses: Wowclasses[] = ['Warrior', 'Paladin', 'Hunter', 'Rouge', 'Priest', 'Death Knight', 'Shaman', 'Monk', 'Druid', 'Demon Hunter'].map(classes => ({ character: classes }));

  lastinArray: number = this.listClasses.length;


  addCharacter(character: Wowclasses): ListService {
    if (!character.character) {
      character.id = ++this.lastinArray
    } else {
      this.listClasses.push(character)
    }
    return this;
  }

  removeItem(id: number): ListService {
    this.listClasses = this.listClasses.filter(char => char.id !== id);
    return this;
  }


  constructor() { }
}
