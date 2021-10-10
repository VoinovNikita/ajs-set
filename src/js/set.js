/* eslint-disable linebreak-style */
// eslint-disable-next-line max-classes-per-file
export default class Team {
  constructor() {
    this.members = new Set();
  }


  add(character) {
    if (this.members.has(character)) {
      throw new Error('Данный персонаж есть в команде');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }
}


export class Character {
  constructor(name) {
    this.name = name;
  }
}

export const char1 = new Character('Character1');
export const char2 = new Character('Character2');
export const char3 = new Character('Character3');
