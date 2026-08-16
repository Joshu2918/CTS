import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NotificationService {
  private readonly messageSubject = new BehaviorSubject<string>('');
  readonly message$ = this.messageSubject.asObservable();

  show(message: string): void {
    this.messageSubject.next(message);
  }

  clear(): void {
    this.messageSubject.next('');
  }
}
