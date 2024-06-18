import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: ICharacter[] = [
    { name: "Krillin", power: 1000, id: uuid() },
    { name: "Goku", power: 9500, id: uuid() },
    { name: "Vegeta", power: 9000, id: uuid() },
  ];

  addCharacter(character: ICharacter): void {
    console.log(character);
    //ANTES DEL UUID
    // this.characters.push(character);

    //DESPUES DEL UUID
    //Esta manera se utiliza si vamos a traer un objeto muy grande
    //para no tener que destructurizarlo, a menos que sea pequeño
    const newCharacter: ICharacter = { ...character, id: uuid() }
    this.characters.push(newCharacter);
  }

  //ANTES DEL UUID
  // onDeleteCharacter(index: number): void {
  //   console.log(index);
  //se ha borrado un elemento mediante el indice del array
  //   this.characters.splice(index, 1);
  // }

  //DESPUES DEL UUID
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
