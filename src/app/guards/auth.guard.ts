import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/auth.service';

const canActiveIsLogin: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) => {
     const userService = inject(UserService);
     const router = inject(Router);

     if (userService.isAuthenticated()) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
};


const canActivateIsLogout: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const userService = inject(UserService);
  const router = inject(Router)

  if (userService.isAuthenticated()) {
    history.back()
    return false
  } else {
    return true
  }


}




export {canActiveIsLogin, canActivateIsLogout}