import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../interface/hero';
import { HeroService } from '../services/hero.service';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    let idParam = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(Number(idParam))
      .subscribe(hero => this.hero = hero);
    this.messageService.add(`get hero details from hero ${idParam}`)
  }

  goBack(): void{
    this.location.back();
  }
}
