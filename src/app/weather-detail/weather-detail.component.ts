import { Component, Input } from '@angular/core';
import { Weather } from '../interface/weather';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent {
  @Input() weather?: Weather; 
}
