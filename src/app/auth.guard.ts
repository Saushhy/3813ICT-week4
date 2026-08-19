import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);

  const token = localStorage.getItem('userAuthenticated');

  if (token == "valid") {
    return true;
  }

  return router.createUrlTree(['/login']);
};
