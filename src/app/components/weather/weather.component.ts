import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor(private weatherService: WeatherService) { }

  metarData: any = [];
  icao: string = '';


  getMetar() {
    this.weatherService.getWeatherData(this.icao).subscribe({
      next: (data) => {
        this.metarData.push(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  deleteCard(item: any) {
    const index = this.metarData.indexOf(item);
    if (index >= 0) {
      this.metarData.splice(index, 1);
    }
  }

}
