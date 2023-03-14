import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'weather', component: WeatherComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
