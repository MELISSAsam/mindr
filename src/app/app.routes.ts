import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    loadComponent: () =>
      import('./start/start.page').then((m) => m.StartPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.page').then((m) => m.ProfilePage),
  },
  {
    path: 'matches',
    loadComponent: () =>
      import('./matches/matches.page').then((m) => m.MatchesPage),
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./chat/chat.page').then((m) => m.ChatPage),
  },
];
