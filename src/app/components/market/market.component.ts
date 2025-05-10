import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarketPrice } from '../../models/market-price.model';
import { MARKET_PRICES } from '../../data/market-prices.data';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  marketPrices: MarketPrice[] = [];
  filteredPrices: MarketPrice[] = [];
  searchTerm: string = '';
  sortColumn: string = '';
  sortDirection: string = 'asc';

  ngOnInit(): void {
    this.marketPrices = MARKET_PRICES;
    this.filteredPrices = [...this.marketPrices];
  }

  searchPrices(): void {
    if (!this.searchTerm.trim()) {
      this.filteredPrices = [...this.marketPrices];
    } else {
      const term = this.searchTerm.toLowerCase().trim();
      this.filteredPrices = this.marketPrices.filter(
        price => price.cropName.toLowerCase().includes(term) || 
                price.market.toLowerCase().includes(term)
      );
    }
    
    if (this.sortColumn) {
      this.sortPrices(this.sortColumn);
    }
  }

  sortPrices(column: string): void {
    if (this.sortColumn === column) {
      // Toggle direction if same column is clicked
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredPrices.sort((a: any, b: any) => {
      const aValue = a[column];
      const bValue = b[column];
      
      if (typeof aValue === 'number') {
        return this.sortDirection === 'asc' 
          ? aValue - bValue 
          : bValue - aValue;
      } else {
        const comparison = aValue.localeCompare(bValue);
        return this.sortDirection === 'asc' 
          ? comparison 
          : -comparison;
      }
    });
  }

  getTrendIcon(trend: string): string {
    if (trend === 'up') {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>`;
    } else if (trend === 'down') {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>`;
    } else {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>`;
    }
  }

  getTrendColor(trend: string): string {
    if (trend === 'up') return '#4CAF50';
    if (trend === 'down') return '#F44336';
    return '#757575';
  }
}
