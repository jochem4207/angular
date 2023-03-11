import { Component } from '@angular/core';
import { Hero } from '../interface/hero';
import { HEROES } from '../mock/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  // Mockdata
  heroes = HEROES;

  // Select list
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}