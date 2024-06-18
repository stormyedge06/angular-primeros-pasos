import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div>
    <h1>Componente Counter</h1>
    <hr>
<p>Counter con unica funcion</p>
<h3>Counter: {{counter}}</h3>
<button (click)="increaseDecreaseBy(+1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseDecreaseBy(-1)">-1</button>
  </div>
  `
})

export class CounterComponent {

  //acostumbrarse a colocar el tipado de datos

  // increaseBy(value: number): void {
  //   this.counter += value;
  // }

  // decreaseBy(value: number): void {
  //   this.counter -= value;
  // }
  //HACER esta logica en un unico METODO -- MEJORA DE LINEAS DE CODIGO
  // increaseDecreaseBy(value: number) {
  //   this.counter2 += value;
  // }

  public counter: number = 10;
  increaseDecreaseBy(value: number) {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
