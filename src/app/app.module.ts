import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminNavigationComponent } from './Admin/admin-navigation/admin-navigation.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutComponent } from './layout/layout.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './Admin/user-management/user-management.component';
import { FrontManagerNavComponent } from './FrontManager/front-manager-nav/front-manager-nav.component';
import { FrontManagerDashboardComponent } from './FrontManager/front-manager-dashboard/front-manager-dashboard.component';
import { ManagerNavComponent } from './hotelManager/manager-nav/manager-nav.component';
import { ManageDashboardComponent } from './hotelManager/manage-dashboard/manage-dashboard.component';
import { StaffNavComponent } from './FrontStaff/staff-nav/staff-nav.component';
import { StaffDashboardComponent } from './FrontStaff/staff-dashboard/staff-dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { VenueComponent } from './Client/venue/venue.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { SupportComponent } from './Admin/support/support.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';  // Correct import
import { RoombookingComponent } from './Client/roombooking/roombooking.component';
import { ReservationManagementComponent } from './FrontManager/reservation-management/reservation-management.component';
import { PaymentProcessingComponent } from './FrontManager/payment-processing/payment-processing.component';
import { StaffManagementComponent } from './FrontManager/staff-management/staff-management.component';
import { CommunicationCenterComponent } from './FrontManager/communication-center/communication-center.component';
import { ReportAnalyticsComponent } from './FrontManager/report-analytics/report-analytics.component';
import { RoomVenueConfigurationComponent } from './FrontManager/room-venue-configuration/room-venue-configuration.component';
import { StaffReservationComponent } from './FrontStaff/staff-reservation/staff-reservation.component';
import { StaffCheckinOutComponent } from './FrontStaff/staff-checkin-out/staff-checkin-out.component';
import { StaffCommunicationComponent } from './FrontStaff/staff-communication/staff-communication.component';
import { StaffReportsComponent } from './FrontStaff/staff-reports/staff-reports.component';
import { StaffProcessingComponent } from './FrontStaff/staff-processing/staff-processing.component';
import { StaffGuestComponent } from './FrontStaff/staff-guest/staff-guest.component';
import { StaffTaskComponent } from './FrontStaff/staff-task/staff-task.component';
import { ManageFinancialComponent } from './hotelManager/manage-financial/manage-financial.component';
import { ManageOparationComponent } from './hotelManager/manage-oparation/manage-oparation.component';
import { ManagerStaffManagementComponent } from './hotelManager/manager-staff-management/manager-staff-management.component';
import { ManagerPaymentComponent } from './hotelManager/manager-payment/manager-payment.component';
import { ManagerReportComponent } from './hotelManager/manager-report/manager-report.component';
import { AdminRoomVenueConfigurationComponent } from './Admin/admin-room-venue-configuration/admin-room-venue-configuration.component';
import { ReportGenerationComponent } from './Admin/report-generation/report-generation.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingDialogComponent } from './Client/booking-dialog/booking-dialog.component';
import { VenuebookingComponent } from './Client/venuebooking/venuebooking.component';
import { ImageDialogComponent } from './Admin/image-dialog/image-dialog.component';
import { RegistrationComponent } from './Client/registration/registration.component';
import { FrontManagerComponent } from './Admin/front-manager/front-manager.component';
import { FrontStaffManagerComponent } from './Admin/front-staff-manager/front-staff-manager.component';
import { BookingDialogVenueComponent } from './Client/booking-dialog-venue/booking-dialog-venue.component';





@NgModule({
  declarations: [
    AppComponent,
    RoombookingComponent,
    
    AdminNavigationComponent,
    AdminDashboardComponent,
    LayoutComponent,
    VenuebookingComponent,
    LoginComponent,
    UserManagementComponent,
    FrontManagerNavComponent,
    FrontManagerDashboardComponent,ReportGenerationComponent,
    ManagerNavComponent,
    ManageDashboardComponent,
    StaffNavComponent,AdminRoomVenueConfigurationComponent,
    StaffDashboardComponent,VenueComponent,
    SupportComponent, ReservationManagementComponent, 
    PaymentProcessingComponent, StaffManagementComponent, CommunicationCenterComponent,
    ReportAnalyticsComponent, RoomVenueConfigurationComponent, StaffReservationComponent, 
    StaffCheckinOutComponent, StaffCommunicationComponent, StaffReportsComponent, 
    StaffProcessingComponent, StaffGuestComponent, StaffTaskComponent, ManageFinancialComponent,
    ManageOparationComponent, ManagerStaffManagementComponent, ManagerPaymentComponent, 
    ManagerReportComponent, AdminRoomVenueConfigurationComponent, ReportGenerationComponent,
    
    BookingDialogComponent,
    ImageDialogComponent,
    RegistrationComponent, FrontManagerComponent,FrontStaffManagerComponent, BookingDialogVenueComponent, 
  ],
  imports: [
    BrowserModule,MatExpansionModule,MatSelectModule,
    AppRoutingModule,MatSidenavModule,MatListModule,MatIconModule,MatToolbarModule,MatButtonModule,
    MatCardModule,MatGridListModule,MatTabsModule,MatFormFieldModule,MatInputModule,MatTableModule,
    FormsModule,ReactiveFormsModule,BrowserAnimationsModule,CommonModule,MatDatepickerModule,MatOptionModule,
    MatProgressBarModule,MatNativeDateModule,HttpClientModule,MatDialogModule,    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
    
  ],
  bootstrap: [AppComponent],
  
  

})
export class AppModule { }
