import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ChatService } from '../../../core/services/chat.service';
import { MOCK_ROOMS } from '../../../core/services/mock-rooms';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindowComponent {
  readonly roomId = input.required<string>();
  private readonly chat = inject(ChatService);

  readonly messageControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.maxLength(250)],
  });

  readonly room = computed(() => MOCK_ROOMS.find((room) => room.id === this.roomId()));
  readonly roomMessages = computed(() => this.chat.messagesForRoom(this.roomId()));

  send(): void {
    if (this.messageControl.invalid) {
      this.messageControl.markAsTouched();
      return;
    }

    this.chat.sendMessage(this.roomId(), this.messageControl.getRawValue());
    this.messageControl.reset();
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }
}
