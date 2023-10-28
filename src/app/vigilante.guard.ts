import { CanActivateFn } from '@angular/router';

export const vigilanteGuard: CanActivateFn = (route, state) => {
  return true;
};
