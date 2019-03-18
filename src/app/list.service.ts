import { Injectable } from '@angular/core';
import { Wowclasses } from './wowclasses';
@Injectable({
  providedIn: 'root'
})

export class ListService {
  listClasses: Wowclasses[] = ['Warrior', 'Paladin', 'Hunter', 'Rouge', 'Priest', 'Death Knight', 'Shaman', 'Monk', 'Druid', 'Demon Hunter'].map((classes, id) => ({ id: id, character: classes }));
  lastId: number = this.listClasses.length + 1;

  addCharacter(character: Wowclasses): ListService {
    if (!character.character || !character.id) {
      character.id = ++this.lastId;
    }
    this.listClasses.push({ id: character.id, character: character.character })
    return this;
  }

  /*Using Filter*/

  removeItem(id: number): ListService {
    this.listClasses = this.listClasses.filter(character => character.id !== id);
    return this;
  }

  /*Update them with id, aka index*/

  updateById(id: number, values: Object = {}): Wowclasses {
    let classes = this.getCharacterById(id);
    if (!classes) {
      return null;
    }
    Object.assign(classes, values);
    return classes;
  }

  /*Send characters */

  getAllCharacters(): Wowclasses[] {
    return this.listClasses;
  }

  getCharacterById(id: number): Wowclasses {
    return this.listClasses.filter(char => char.id === id).pop();
  }

  constructor() { }

}
