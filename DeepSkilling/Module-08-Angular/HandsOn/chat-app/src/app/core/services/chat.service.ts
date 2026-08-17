import { Injectable, computed, inject, signal } from '@angular/core';
import { Subject, delay, of } from 'rxjs';
import { ChatMessage } from '../models/message.model';
import { AuthService } from './auth.service';
import { ChatApiService } from './chat-api.service';

export interface SearchResult {
  message: ChatMessage;
  highlights: {
    content: boolean;
    sender: boolean;
    room: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private readonly auth = inject(AuthService);
  private readonly api = inject(ChatApiService);

  private readonly incomingMessage$ = new Subject<ChatMessage>();
  readonly messagesUpdated$ = new Subject<void>();

  private readonly _messages = signal<ChatMessage[]>([]);

  readonly messages = this._messages.asReadonly();

  readonly messageCount = computed(() => this._messages().length);

  // Search state
  private readonly searchTerms = signal<string>('');
  readonly searchResults = computed<SearchResult[]>(() => {
    const term = this.searchTerms().toLowerCase().trim();
    if (!term) return [];

    return this._messages()
      .filter(message => {
        const contentMatch = message.text.toLowerCase().includes(term);
        const senderMatch = message.senderName.toLowerCase().includes(term);
        // For room matching, we'd need to look up the room name - simplified for now
        const roomMatch = false; // Will implement room lookup if needed

        return contentMatch || senderMatch || roomMatch;
      })
      .map(message => ({
        message,
        highlights: {
          content: message.text.toLowerCase().includes(term),
          sender: message.senderName.toLowerCase().includes(term),
          room: false // Simplified
        }
      }));
  });

  constructor() {
    // Load initial messages from API
    this.loadMessages();

    // RxJS real-time stream
    this.incomingMessage$.subscribe((message) => {
      this._messages.update((messages) => [
        ...messages,
        message
      ]);
      // Notify that messages have been updated
      this.messagesUpdated$.next();
    });
  }

  // Search methods
  setSearchTerm(term: string): void {
    this.searchTerms.set(term);
  }

  getSearchResults(): SearchResult[] {
    return this.searchResults();
  }

  clearSearch(): void {
    this.searchTerms.set('');
  }

  private loadMessages(): void {

    this.api.getMessages().subscribe({

      next: (apiMessages) => {

        const messages: ChatMessage[] = apiMessages.map((message) => ({
          id: message.id.toString(),
          roomId: this.convertRoomId(message.roomId),
          senderId: message.sender.toLowerCase(),
          senderName: message.sender,
          text: message.text,
          createdAt: this.parseTime(message.time)
        }));

        this._messages.set(messages);
      },

      error: (error) => {
        console.error('Failed to load messages:', error);
      }

    });
  }

  messagesForRoom(roomId: string): ChatMessage[] {

    return this._messages().filter(
      (message) => message.roomId === roomId
    );

  }

  sendMessage(roomId: string, text: string): void {

    const user = this.auth.currentUser();

    if (!user || !text.trim()) {
      return;
    }

    const message: ChatMessage = {

      id: crypto.randomUUID(),

      roomId,

      senderId: user.id,

      senderName: user.name,

      text: text.trim(),

      createdAt: new Date()

    };

    // Immediately display user's message
    this._messages.update((messages) => [
      ...messages,
      message
    ]);

    // Simulate server response
    of(roomId)
      .pipe(delay(1200))
      .subscribe((id) => {

        this.incomingMessage$.next({

          id: crypto.randomUUID(),

          roomId: id,

          senderId: 'bot',

          senderName: 'ChatFlow Bot',

          text: 'Message received in real time 🚀',

          createdAt: new Date()

        });

      });

  }

  private convertRoomId(roomId: number): string {

    if (roomId === 1) {
      return 'general';
    }

    if (roomId === 2) {
      return 'angular';
    }

    return 'general';
  }

  private parseTime(time: string): Date {

    const today = new Date();

    const [timePart, period] = time.split(' ');

    const [hoursString, minutesString] = timePart.split(':');

    let hours = Number(hoursString);

    const minutes = Number(minutesString);

    if (period === 'PM' && hours !== 12) {
      hours += 12;
    }

    if (period === 'AM' && hours === 12) {
      hours = 0;
    }

    today.setHours(hours);
    today.setMinutes(minutes);
    today.setSeconds(0);

    return today;
  }
}