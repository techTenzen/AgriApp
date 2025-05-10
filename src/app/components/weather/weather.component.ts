import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WeatherData {
  location: string;
  date: string;
  condition: string;
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  iconClass: string;
}

interface ForecastDay {
  day: string;
  condition: string;
  highTemp: number;
  lowTemp: number;
  rainChance: number;
  iconClass: string;
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  currentWeather: WeatherData = {
    location: 'Hyderabad',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    condition: 'Partly Cloudy',
    temperature: 32,
    humidity: 55,
    rainfall: 0,
    windSpeed: 12,
    iconClass: 'partly-cloudy'
  };

  forecast: ForecastDay[] = [
    {
      day: 'Tomorrow',
      condition: 'Sunny',
      highTemp: 33,
      lowTemp: 25,
      rainChance: 5,
      iconClass: 'sunny'
    },
    {
      day: this.getDayName(2),
      condition: 'Partly Cloudy',
      highTemp: 31,
      lowTemp: 24,
      rainChance: 20,
      iconClass: 'partly-cloudy'
    },
    {
      day: this.getDayName(3),
      condition: 'Thunderstorm',
      highTemp: 29,
      lowTemp: 23,
      rainChance: 70,
      iconClass: 'thunderstorm'
    },
    {
      day: this.getDayName(4),
      condition: 'Windy',
      highTemp: 30,
      lowTemp: 22,
      rainChance: 10,
      iconClass: 'windy'
    },
    {
      day: this.getDayName(5),
      condition: 'Sunny',
      highTemp: 32,
      lowTemp: 24,
      rainChance: 0,
      iconClass: 'sunny'
    }
  ];

  farmingTips: string[] = [
    'Consider irrigation if rainfall is below 5mm for consecutive days in Hyderabad',
    'Protect young crops from strong winds exceeding 20km/h during monsoon season',
    'For Hyderabad climate, ideal planting of kharif crops in early June before monsoon',
    'During high humidity periods (>80%), watch for fungal diseases in rice and vegetables',
    'Apply fertilizers early morning or late evening to reduce evaporation in hot weather',
    'Cover nursery plants when temperatures exceed 38°C in summer months'
  ];

  ngOnInit(): void {
  }

  private getDayName(daysFromNow: number): string {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }
}
