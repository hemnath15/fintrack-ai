import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';

import { MainLayout } from './layouts/main-layout/main-layout';

import { authGuard } from './features/auth/guards/auth-guard';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },
{
  path: 'register',
  loadComponent: () =>
    import('./features/auth/register/register').then(
      (m) => m.Register
    )
},
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [

      {
        path: 'dashboard',
        component: Dashboard
      }

    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];