import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  
import { Hero } from '../interface/hero';
import { HEROES } from '../mock/heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes  = of(HEROES);
    this.messageService.add("Hero service: fetched data");
    return heroes;
  }
}