import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  constructor(private weatherService: WeatherService) { }

  metarData: any = [];
  icao: string = '';


  getMetar() {
    this.weatherService.getWeatherData(this.icao).subscribe({
      next: (res: any) => {
        if (res.results >= 1) {
          this.metarData.push(res);
          this.icao = '';  
        } else {
          alert('No data found for this ICAO');
        }
      },
      error: (error) => {
        console.error(error);
        alert('No data found for this ICAO');
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
