import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { WeatherComponent } from './weather/weather.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    WeatherComponent,
    HeroDetailComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
