import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { MOCK_ROOMS } from '../../../core/services/mock-rooms';

@Component({
  selector: 'app-chat-layout',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './chat-layout.component.html',
  styleUrl: './chat-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatLayoutComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly currentUser = this.auth.currentUser;
  readonly searchControl = new FormControl('', { nonNullable: true });
  readonly rooms = MOCK_ROOMS;
  filteredRooms = MOCK_ROOMS;

  // Presence indicators for users in rooms
  readonly roomPresence = new Map<string, Set<string>>([
    ['general', new Set(['Alice', 'Bob', 'Charlie'])],
    ['angular', new Set(['David', 'Eve', 'Frank'])]
  ]);

  readonly isSearchFocused = signal(false);

  constructor() {
    this.searchControl.valueChanges
      .pipe(startWith(''), debounceTime(250), distinctUntilChanged())
      .subscribe((term) => {
        const query = term.trim().toLowerCase();
        this.filteredRooms = this.rooms.filter((room) => room.name.toLowerCase().includes(query));
      });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  // Get online users count for a room
  getOnlineUsersCount(roomId: string): number {
    return this.roomPresence.get(roomId)?.size || 0;
  }

  // Check if current user is in room
  isUserInRoom(roomId: string): boolean {
    const user = this.currentUser();
    if (!user) return false;
    return this.roomPresence.get(roomId)?.has(user.name) || false;
  }

  // Get presence tooltip text
  getPresenceTooltip(roomId: string): string {
    const users = this.roomPresence.get(roomId);
    if (!users || users.size === 0) return 'No one online';
    if (users.size === 1) return `${Array.from(users)[0]} is online`;
    return `${users.size} people online`;
  }
}