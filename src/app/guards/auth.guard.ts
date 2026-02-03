import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '@angular/fire/auth';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  return new Promise(resolve => {
    auth.onAuthStateChanged(user => {
      resolve(!!user);
    });
  });
};
