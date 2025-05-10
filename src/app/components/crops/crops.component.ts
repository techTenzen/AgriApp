import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Crop } from '../../models/crop.model';
import { CROPS } from '../../data/crops.data';

@Component({
  selector: 'app-crops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css']
})
export class CropsComponent implements OnInit {
  crops: Crop[] = [];
  selectedCrop: Crop | null = null;

  ngOnInit(): void {
    this.crops = CROPS;
    if (this.crops.length > 0) {
      this.selectedCrop = this.crops[0];
    }
  }

  selectCrop(crop: Crop): void {
    this.selectedCrop = crop;
  }
}
