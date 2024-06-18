import { Component } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.componente.html'
})

export class MainPageComponent {

  constructor(
    private dbzService: DbzService
  ) { }

  get characters(): ICharacter[] { return [...this.dbzService.characters] }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: ICharacter): void {
    this.dbzService.addCharacter(character);
  }

}
