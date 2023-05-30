import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor(private weatherService: WeatherService) { }

  metar: any = [];
  icao: string = '';
  // name: string = '';


  onSubmit() {
    this.weatherService.getWeatherData(this.icao).subscribe({
      next: (data) => {
        console.log(data);
        this.metar = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
