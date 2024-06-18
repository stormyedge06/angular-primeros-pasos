import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input()
  public characterList: ICharacter[] = [
    { name: 'Trunks', power: 10 }
  ];

  //ANTES DEL UUID
  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   console.log({ index });
  //   this.onDelete.emit(index);
  // }

  //DESPUES DEL UUID
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }

}
