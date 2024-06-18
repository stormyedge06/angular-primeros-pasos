import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<ICharacter> = new EventEmitter();

  //TwoWayDataBinding - Es decir, los cambios se pueden producir
  //desde ambas direcciones (TS o HTML)
  public character: ICharacter = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    console.log(this.character)
    if (this.character.name.length === 0) return;

    //Si lo mando asi, le estoy mandando en verdad una REFERENCIA, por lo tanto, tambien se manda el binding
    // this.onNewCharacter.emit(this.character);

    //Para solucionarlo se usa el OPERADOR SPREAD (...) para que se haga una copia y no se envie la referencia
    this.onNewCharacter.emit({ ...this.character });

    //En dos lineas
    this.character.name = '';
    this.character.power = 0

    //En una sola linea y algo mas eficiente
    this.character = { name: '', power: 0 };
  }

}
