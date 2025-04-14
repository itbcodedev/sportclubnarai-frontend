import { Routes } from '@angular/router';
import { MemberLayoutComponent } from './shared/components/memberlayout/memberlayout.component';
import { HomeComponent } from './features/home/home.component';


import { canActivateGuard, canActivateChildGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './features/admindashboard/admindashboard.component';
import { AdminLayoutComponent } from './shared/components/adminlayout/adminlayout.component';
import { MemberDashboardComponent } from './features/memberdashboard/memberdashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  // Member Routes
  {
    path: 'member',
    component: MemberLayoutComponent,
    canActivate: [canActivateGuard],
    canActivateChild: [canActivateChildGuard],
    children: [
      {
        path: '',
        component: MemberDashboardComponent
      }
    ]
  },

  // Admin Routes
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [canActivateGuard],
    canActivateChild: [canActivateChildGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];
