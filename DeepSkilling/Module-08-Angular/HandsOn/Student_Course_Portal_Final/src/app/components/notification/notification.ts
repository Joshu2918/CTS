import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [AsyncPipe],
  providers: [NotificationService],
  templateUrl: './notification.html'
})
export class NotificationComponent {
  readonly notificationService = inject(NotificationService);
}
