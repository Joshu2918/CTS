import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'chat/general' },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'chat',
    canActivate: [authGuard],
    loadComponent: () => import('./features/chat/chat-layout/chat-layout.component').then((m) => m.ChatLayoutComponent),
    children: [
      { path: ':roomId', loadComponent: () => import('./features/chat/chat-window/chat-window.component').then((m) => m.ChatWindowComponent) },
    ],
  },
  {
    path: 'search',
    loadComponent: () => import('./features/search/search-page.component').then((m) => m.SearchPageComponent),
  },
  { path: '**', loadComponent: () => import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent) },
];
