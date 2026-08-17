import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageSearchComponent } from '../../shared/components/message-search/message-search.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, MessageSearchComponent],
  template: `
    <app-message-search></app-message-search>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
      overflow: hidden;
    }
  `]
})
export class SearchPageComponent {}
