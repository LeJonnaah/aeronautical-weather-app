import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
