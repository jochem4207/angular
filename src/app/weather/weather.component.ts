import { Component } from '@angular/core';
import { Weather } from '../interface/weather';
import { WEATHER } from '../mock/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {
  // Mockdata
  weatherList = WEATHER


  //Select list
  selectedWeather?: Weather;
  onSelect(weather: Weather) {
    this.selectedWeather = weather;
  }
}
