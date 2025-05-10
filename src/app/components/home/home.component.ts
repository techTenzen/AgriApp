import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Features of the application
  features = [
    {
      title: 'Hyderabad Crop Guide',
      description: 'Access detailed information about crops suitable for Hyderabad region, including best practices for cultivation in Telangana.',
      icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/icons/flower1.svg'
    },
    {
      title: 'Hyderabad Weather Updates',
      description: 'Get real-time Hyderabad weather information to plan your agricultural activities based on local conditions in Telangana.',
      icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/icons/cloud-sun.svg'
    },
    {
      title: 'Hyderabad Market Prices',
      description: 'Check daily prices from Hyderabad agricultural markets including Bowenpally, Malakpet, and other local Telangana markets.',
      icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/icons/cash-coin.svg'
    },
    {
      title: 'Telangana Farming Schemes',
      description: 'Stay updated on government initiatives like Rythu Bandhu, Rythu Bima, and other support schemes for Telangana farmers.',
      icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/icons/clipboard-check.svg'
    }
  ];
}