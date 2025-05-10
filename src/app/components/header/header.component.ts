import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() viewChange = new EventEmitter<string>();
  activeView = 'home';
  
  changeView(view: string): void {
    this.activeView = view;
    this.viewChange.emit(view);
  }
}
