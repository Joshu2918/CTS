import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <h1>404</h1>
      <p>This page doesn't exist.</p>
      <a routerLink="/chat">Back to chat</a>
    </div>
  `,
  styles: [`
    .not-found {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: var(--color-bg);
      color: var(--color-text-primary);
    }
    h1 { font-size: 3rem; }
    a { color: var(--color-accent); font-weight: 600; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
