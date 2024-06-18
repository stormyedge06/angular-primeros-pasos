import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 23;

  //getter y setters son propiedades

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 69
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 23;

    //Cambia el HTML directamente,
    //lo cual significa que no esta dentro del ciclo
    //del TS de angular

    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = `<h1>Desde Angular Todos</h1>`
    // });
  }

}
