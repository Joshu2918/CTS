import { Injectable, computed, inject, signal } from '@angular/core';
import { Subject, delay, of } from 'rxjs';
import { ChatMessage } from '../models/message.model';
import { AuthService } from './auth.service';
import { ChatApiService } from './chat-api.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private readonly auth = inject(AuthService);
  private readonly api = inject(ChatApiService);

  private readonly incomingMessage$ = new Subject<ChatMessage>();

  private readonly _messages = signal<ChatMessage[]>([]);

  readonly messages = this._messages.asReadonly();

  readonly messageCount = computed(() => this._messages().length);

  constructor() {

    // Load initial messages from API
    this.loadMessages();

    // RxJS real-time stream
    this.incomingMessage$.subscribe((message) => {

      this._messages.update((messages) => [
        ...messages,
        message
      ]);

    });
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