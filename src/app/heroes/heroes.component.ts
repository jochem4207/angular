import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
  constructor(private heroService: HeroService) { }

  // Mockdata
  heroes: Hero[] = [];

  // Get Heroes from backend
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  add(name: string): void{
    name = name.trim();
    if (!name) {return;}
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        // TODO: Fix name bug
        this.heroes.push(hero);
      });
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
