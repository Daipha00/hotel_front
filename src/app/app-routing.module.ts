import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';


import { UserManagementComponent } from './Admin/user-management/user-management.component';
import { HomeComponent } from './Client/home/home.component';
import { VenuebookingComponent } from './Client/venuebooking/venuebooking.component';
import { SupportComponent } from './Admin/support/support.component';
import { FrontManagerDashboardComponent } from './FrontManager/front-manager-dashboard/front-manager-dashboard.component';
import { ReservationManagementComponent } from './FrontManager/reservation-management/reservation-management.component';
import { CommunicationCenterComponent } from './FrontManager/communication-center/communication-center.component';
import { RoomVenueConfigurationComponent } from './FrontManager/room-venue-configuration/room-venue-configuration.component';
import { PaymentProcessingComponent } from './FrontManager/payment-processing/payment-processing.component';
import { StaffManagementComponent } from './FrontManager/staff-management/staff-management.component';
import { ReportAnalyticsComponent } from './FrontManager/report-analytics/report-analytics.component';
import { StaffDashboardComponent } from './FrontStaff/staff-dashboard/staff-dashboard.component';
import { StaffReservationComponent } from './FrontStaff/staff-reservation/staff-reservation.component';
import { StaffCheckinOutComponent } from './FrontStaff/staff-checkin-out/staff-checkin-out.component';
import { StaffCommunicationComponent } from './FrontStaff/staff-communication/staff-communication.component';
import { StaffReportsComponent } from './FrontStaff/staff-reports/staff-reports.component';
import { StaffProcessingComponent } from './FrontStaff/staff-processing/staff-processing.component';
import { StaffGuestComponent } from './FrontStaff/staff-guest/staff-guest.component';
import { StaffTaskComponent } from './FrontStaff/staff-task/staff-task.component';
import { ManageDashboardComponent } from './hotelManager/manage-dashboard/manage-dashboard.component';
import { ManageFinancialComponent } from './hotelManager/manage-financial/manage-financial.component';
import { ManageOparationComponent } from './hotelManager/manage-oparation/manage-oparation.component';
import { ManagerStaffManagementComponent } from './hotelManager/manager-staff-management/manager-staff-management.component';
import { ManagerPaymentComponent } from './hotelManager/manager-payment/manager-payment.component';
import { ManagerReportComponent } from './hotelManager/manager-report/manager-report.component';
import { AdminRoomVenueConfigurationComponent } from './Admin/admin-room-venue-configuration/admin-room-venue-configuration.component';
import { ReportGenerationComponent } from './Admin/report-generation/report-generation.component';
import { VenueComponent } from './Client/venue/venue.component';
import { RoombookingComponent } from './Client/roombooking/roombooking.component';
import { ImageDialogComponent } from './Admin/image-dialog/image-dialog.component';
import { RegistrationComponent } from './Client/registration/registration.component';
import { FrontManagerComponent } from './Admin/front-manager/front-manager.component';
import { FrontStaffManagerComponent } from './Admin/front-staff-manager/front-staff-manager.component';

import { CustomerPaymentComponent } from './Client/customer-payment/customer-payment.component';

import { ClientFormsComponent } from './Client/client-forms/client-forms.component';
import { ReservationFormComponent } from './Client/reservation-form/reservation-form.component';
import { AdminNavigationComponent } from './Admin/admin-navigation/admin-navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { PaymentComponent } from './Client/payment/payment.component';
import { HeaderComponent } from './Client/header/header.component';
import { CustoerComponent } from './Admin/custoer/custoer.component';
import { ClientComponent } from './Admin/client/client.component';
import { ReservationComponent } from './Admin/reservation/reservation.component';
import { ReservationlistComponent } from './Admin/reservationlist/reservationlist.component';



const routes: Routes = [
  //Admin
 
{path:'',component:HomeComponent},
  {path: 'adminDashboard', component: AdminDashboardComponent},
  {path: 'userManagement', component: UserManagementComponent},
  {path:'support',component:SupportComponent},
  {path:'adminRoomVenueConfiguration',component:AdminRoomVenueConfigurationComponent},
  {path:'adminReport',component:ReportGenerationComponent},
  {path:'imageDialog',component:ImageDialogComponent},
  {path:'adminFrontManager',component:FrontManagerComponent},
  {path:'adminFrontStaff',component:FrontStaffManagerComponent},
    {path: 'customer-list',component:ClientComponent},
    {path: 'reser',component:ReservationComponent},
    {path: 'reserve',component:ReservationlistComponent},
  // {path:'admin-nav',component:AdminNavigationComponent},


  
  
  
  //Client
{path:'home',component:HomeComponent},
  {path: 'roombooking', component: RoombookingComponent},
  {path: 'venuebooking', component: VenuebookingComponent},
  {path: 'venue',component:VenueComponent},
  {path:'reservation-form',component:ReservationFormComponent},
  {path:'payment',component:PaymentComponent},

  {path:'client-forms',component:ClientFormsComponent},
  {path: 'header', component:HeaderComponent},
  // {path: 'booking-dialog', component:BookingDialogComponent},
  {path: 'registration',component:RegistrationComponent},
  {path: 'customerPayment',component:CustomerPaymentComponent},
  
{path:'layout',component:LayoutComponent},
  {path: 'frontManagerDashboard', component: FrontManagerDashboardComponent},
  {path: 'reservationManagement', component: ReservationManagementComponent},
  {path: 'communicationCenter', component: CommunicationCenterComponent},
  {path: 'roomVenueConfig',component:RoomVenueConfigurationComponent},
  {path:'payment-processing',component:PaymentProcessingComponent},
  {path: 'staffManagement', component: StaffManagementComponent},
  {path: 'reportAnalytics', component: ReportAnalyticsComponent},

  //staff
  {path: 'staffDashboard', component: StaffDashboardComponent},
  {path: 'staffReservation',component:StaffReservationComponent},
  {path: 'staffCommunication',component:StaffCommunicationComponent},
  {path: 'staffReport',component:StaffReportsComponent},
  {path: 'CheckIn-CheckOut',component:StaffCheckinOutComponent},
  {path: 'staffProcessing',component:StaffProcessingComponent},
  {path: 'staffGuest',component:StaffGuestComponent},
  {path: 'staffTask',component:StaffTaskComponent},


  //hotelManager
  {path: 'managerDashboard',component:ManageDashboardComponent},
  {path: 'managerFinancial',component:ManageFinancialComponent},
  {path: 'managerOparational',component:ManageOparationComponent},
  {path: 'managerStaffManagement',component:ManagerStaffManagementComponent},
  {path:'managerPayment',component:ManagerPaymentComponent},
  {path:'managerReport',component:ManagerReportComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
