import { Injectable } from '@angular/core';
import { Wowclasses } from './wowclasses';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  listClasses: Wowclasses[] = ['Warrior', 'Paladin', 'Hunter', 'Rouge', 'Priest', 'Death Knight', 'Shaman', 'Monk', 'Druid', 'Demon Hunter'].map((classes, id) => ({ character: classes, id: id }));

  lastinArray: number = 0;

  addCharacter(character: Wowclasses): ListService {
    if (!character.character) {
      character.id = ++this.lastinArray;
    } else {
      this.listClasses.push(character)
    }
    return this;
  }


  /*Using Filter*/
  // removeItem(id: number): ListService {
  //   this.listClasses = this.listClasses.filter(character => character.id !== id);
  //   return this;
  // }


  /*Using Splice*/
  removeItem(character: Wowclasses): ListService {
    const index: number = this.listClasses.indexOf(character);
    if (index !== -1) {
      this.listClasses.splice(index, 1);
    }
    return this;
  }


  getAllCharacters(): Wowclasses[] {
    return this.listClasses;
  }

  updateById(id: number, values: Object = {}): Wowclasses {
    let classes = this.getCharacterById(id);
    if (!classes) {
      return null;
    }
    Object.assign(classes, values);
    return classes;
  }

  getCharacterById(id: number): Wowclasses {
    return this.listClasses.filter(char => char.id === id).pop();
  }





  constructor() { }
}
