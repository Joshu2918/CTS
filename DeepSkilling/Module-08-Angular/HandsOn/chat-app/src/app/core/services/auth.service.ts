import { Injectable, computed, signal } from '@angular/core';
import { AppUser } from '../models/user.model';

const STORAGE_KEY = 'chatflow.currentUser';

/**
 * AuthService — simulated authentication.
 *
 * Why Signals here instead of a BehaviorSubject?
 * `currentUser` is plain synchronous UI state — components just need
 * to *read* the latest value (often straight in the template). Signals
 * give us that with automatic, fine-grained change detection and no
 * subscribe/unsubscribe management. RxJS still owns the *asynchronous*
 * parts of the app (the mock WebSocket stream, typing events, search).
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _currentUser = signal<AppUser | null>(this.restoreSession());

  readonly currentUser = this._currentUser.asReadonly();
  readonly isAuthenticated = computed(() => this._currentUser() !== null);

  login(name: string): void {
    const user: AppUser = {
      id: crypto.randomUUID(),
      name,
      avatar: this.initialsAvatar(name),
      status: 'online',
      lastSeen: new Date(),
      role: 'member',
    };
    this._currentUser.set(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }

  logout(): void {
    this._currentUser.set(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  private restoreSession(): AppUser | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw) as AppUser;
      return { ...parsed, lastSeen: new Date(parsed.lastSeen) };
    } catch {
      return null;
    }
  }

  private initialsAvatar(name: string): string {
    return name.trim().slice(0, 2).toUpperCase();
  }
}
