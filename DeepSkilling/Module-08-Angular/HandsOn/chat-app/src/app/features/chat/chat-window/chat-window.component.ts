import { ChangeDetectionStrategy, Component, computed, inject, input, signal, AfterViewInit, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ChatService } from '../../../core/services/chat.service';
import { MOCK_ROOMS } from '../../../core/services/mock-rooms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindowComponent implements AfterViewInit, OnDestroy {
  readonly roomId = input.required<string>();
  private readonly chat = inject(ChatService);
  private scrollSubscription?: Subscription;

  readonly messageControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.maxLength(250)],
  });

  readonly room = computed(() => MOCK_ROOMS.find((room) => room.id === this.roomId()));
  readonly roomMessages = computed(() => this.chat.messagesForRoom(this.roomId()));

  // UX Enhancement signals
  readonly isTyping = signal<string | null>(null);
  readonly showTypingIndicator = signal(false);
  readonly isLoading = signal(false);
  readonly reactions = signal<Map<string, string[]>>(new Map());

  ngAfterViewInit(): void {
    // Auto-scroll to bottom when new messages arrive
    this.scrollSubscription = this.chat.messagesUpdated$.subscribe(() => {
      this.scrollToBottom();
    });

    // Initial scroll to bottom
    setTimeout(() => this.scrollToBottom(), 100);
  }

  ngOnDestroy(): void {
    this.scrollSubscription?.unsubscribe();
  }

  send(): void {
    if (this.messageControl.invalid) {
      this.messageControl.markAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.chat.sendMessage(this.roomId(), this.messageControl.getRawValue());
    this.messageControl.reset();
    this.isLoading.set(false);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    } else if (event.key === 'Enter' && event.shiftKey) {
      // Allow Shift+Enter for new lines
      return;
    }

    // Simulate typing indicator for demo purposes
    this.handleTyping();
  }

  private handleTyping(): void {
    const currentUser = 'Current User'; // In real app, this would come from auth service
    this.isTyping.set(currentUser);
    this.showTypingIndicator.set(true);

    // Reset typing indicator after 3 seconds of inactivity
    clearTimeout(this.typingTimeout);
    this.typingTimeout = window.setTimeout(() => {
      this.showTypingIndicator.set(false);
    }, 3000);
  }

  private typingTimeout: any = null;

  private scrollToBottom(): void {
    const messagesContainer = document.querySelector('.messages');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  // Reaction handling
  toggleReaction(messageId: string, reaction: string): void {
    const currentReactions = this.reactions().get(messageId) || [];
    const reactionIndex = currentReactions.indexOf(reaction);

    if (reactionIndex > -1) {
      // Remove reaction
      currentReactions.splice(reactionIndex, 1);
    } else {
      // Add reaction
      currentReactions.push(reaction);
    }

    this.reactions.set(new Map([...this.reactions(), [messageId, currentReactions]]));
  }

  hasReaction(messageId: string, reaction: string): boolean {
    return this.reactions().get(messageId)?.includes(reaction) || false;
  }

  getReactionCount(messageId: string, reaction: string): number {
    const reactions = this.reactions().get(messageId) || [];
    return reactions.filter(r => r === reaction).length;
  }

  // Time formatting helper
  getRelativeTime(timestamp: string | Date): string {
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