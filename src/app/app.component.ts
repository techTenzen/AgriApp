import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CropsComponent } from './components/crops/crops.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MarketComponent } from './components/market/market.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CropsComponent,
    WeatherComponent,
    MarketComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgriAPP';
  currentView = 'home';

  onViewChange(view: string): void {
    this.currentView = view;
  }
}
