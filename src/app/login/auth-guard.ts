import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from './account-service.service';
// import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = this.accountService.getToken();
    
    // You may decode the token here to get user roles
    if (token) {
      const expectedRole = next.data['role'];
      // Implement a function to check role from token or stored user info
      const userRole = this.getUserRoleFromToken(token);

      if (userRole === expectedRole) {
        return true;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }

  private getUserRoleFromToken(token: string): string {
    // Implement JWT decoding logic to extract the user role
    // For now, mock the role
    return 'Admin'; // This is just for example
  }
  }
