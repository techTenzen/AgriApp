export interface MarketPrice {
  id: number;
  cropName: string;
  price: number;
  unit: string;
  market: string;
  date: string;
  trend: 'up' | 'down' | 'stable';
}
