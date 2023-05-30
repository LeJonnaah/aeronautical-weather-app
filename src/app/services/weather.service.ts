import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(icao: string) {
    return this.http.get(`https://api.checkwx.com/metar/${icao}/decoded?x-api-key=1b4c5108e36b4d05a7748a3769`);
  }
}

