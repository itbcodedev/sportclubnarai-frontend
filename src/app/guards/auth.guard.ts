// src/app/guards/auth.guard.ts
import { CanActivateFn, CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';

const checkAuth = (): boolean => {
  // const isLoggedIn = !!localStorage.getItem('token');
  // if (!isLoggedIn) {
  //   inject(Router).navigate(['/']);
  //   return false;
  // }
  return true;
};

export const canActivateGuard: CanActivateFn = (route, state) => {
  return checkAuth();
};

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  return checkAuth();
};
