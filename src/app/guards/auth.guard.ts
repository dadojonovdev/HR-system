import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserService } from '../services/auth.service';

const canActivateTeam: CanActivateFn = (
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
  