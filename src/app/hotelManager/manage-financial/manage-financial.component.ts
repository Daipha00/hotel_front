import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-financial',
  templateUrl: './manage-financial.component.html',
  styleUrl: './manage-financial.component.css'
})
export class ManageFinancialComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
 // Revenue data (mocked)
 dailyEarnings = 2500;
 weeklyEarnings = 15000;
 monthlyEarnings = 60000;

 // Expenses data (mocked)
 operationalExpenses = 20000;
 maintenanceExpenses = 5000;

 // Budget data
 operationsBudget = 75; // 75% of allocated budget
 maintenanceBudget = 50; // 50% of allocated budget
 marketingBudget = 30; // 30% of allocated budget
}
