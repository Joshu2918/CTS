import { ChangeDetectionStrategy, Component, effect, signal, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly theme = signal<Theme>('dark');
  private readonly router = inject(Router);

  constructor() {
    effect(() => document.documentElement.setAttribute('data-theme', this.theme()));
  }

  toggleTheme(): void {
    this.theme.update((value) => (value === 'dark' ? 'light' : 'dark'));
  }

  openSearch(): void {
    this.router.navigate(['/search']);
  }
}
