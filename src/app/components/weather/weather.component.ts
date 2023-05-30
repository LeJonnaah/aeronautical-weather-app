import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.getWeatherData(this.icao);
  }

  onSubmit() {
    this.getWeatherData(this.icao);
    this.icao = '';
  }

  private getWeatherData(icao: string) {
    this.weatherService.getWeatherData(icao).subscribe({
      next: (data) => {
        this.metar = data
        console.log(data);
      }
    })
  }
}
