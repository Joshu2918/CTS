import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
}
