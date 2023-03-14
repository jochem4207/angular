import { Component } from '@angular/core';
import { Weather } from '../interface/weather';
import { WEATHER } from '../mock/weather';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {
  constructor(private messageService: MessageService) { }

  // Mockdata
  weatherList = WEATHER


  //Select list
  selectedWeather?: Weather;
  onSelect(weather: Weather) {
    this.selectedWeather = weather;
    this.messageService.add(`heroescomponent: selected hero is=${weather.day}`);
  }
}
