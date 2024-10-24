import { Component } from '@angular/core';
import { AccountService } from '../../login/account-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrl: './admin-navigation.component.css'
})
export class AdminNavigationComponent {
constructor(private accountService: AccountService, private router: Router) {}
  
    logout() {
      this.accountService.logout();
      this.router.navigate(['/login']);
    }
}
