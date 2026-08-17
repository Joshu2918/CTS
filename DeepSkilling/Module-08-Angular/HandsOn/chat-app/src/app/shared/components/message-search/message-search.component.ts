import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs';
import { ChatService } from '../../../core/services/chat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './message-search.component.html',
  styleUrl: './message-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageSearchComponent {
  private readonly chat = inject(ChatService);
  private readonly router = inject(Router);

  readonly searchControl = new FormControl('');
  readonly searchResults = computed(() => this.chat.getSearchResults());
  readonly isSearching = signal(false);

  constructor() {
    // Set up search with debounce and distinctUntilChanged
    effect(() => {
      const value = this.searchControl.value;
      // Handle null case properly
    });

    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => {
          if (!term || term.trim() === '') {
            this.chat.clearSearch();
            return [];
          }

          this.isSearching.set(true);
          this.chat.setSearchTerm(term);

          // Return results after a small delay to simulate search
          return this.chat.getSearchResults();
        })
      )
      .subscribe(results => {
        this.isSearching.set(false);
      });
  }

  navigateToMessage(result: any): void {
    const { message } = result;
    this.router.navigate(['/chat', message.roomId]);

    // Scroll to and highlight the message after navigation
    setTimeout(() => {
      this.highlightMessage(message.id);
    }, 500);
  }

  private highlightMessage(messageId: string): void {
    const element = document.getElementById(`message-${messageId}`);
    if (element) {
      element.classList.add('highlight-message');

      // Remove highlight after 3 seconds
      setTimeout(() => {
        element.classList.remove('highlight-message');
      }, 3000);

      // Scroll element into view
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  clearSearch(): void {
    this.searchControl.reset('');
    this.chat.clearSearch();
  }

  // Helper methods for template
  highlightText(text: string, searchTerm: string): string {
    if (!searchTerm || !text) {
      return text;
    }

    const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  getRelativeTime(timestamp: Date | string): string {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 5) return 'just now';
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;

    return date.toLocaleDateString();
  }
}
