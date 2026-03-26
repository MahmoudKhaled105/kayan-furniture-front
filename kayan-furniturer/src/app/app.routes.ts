import { Routes } from '@angular/router';
import { SuppliersList } from './features/suppliers/suppliers-list/suppliers-list';
import { SupplierDetails } from './features/suppliers/supplier-details/supplier-details';
import { AddSupplier } from './features/suppliers/add-supplier/add-supplier';
import { ShipmentsList } from './features/shipments/shipments-list/shipments-list';
import { ShipmentDetails } from './features/shipments/shipment-details/shipment-details';
import { AddShipment } from './features/shipments/add-shipment/add-shipment';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'suppliers', component: SuppliersList, canActivate: [AuthGuard] },
  { path: 'suppliers/add', component: AddSupplier, canActivate: [AuthGuard] },
  { path: 'suppliers/:id', component: SupplierDetails, canActivate: [AuthGuard] },
  { path: 'shipments', component: ShipmentsList, canActivate: [AuthGuard] },
  { path: 'shipments/add', component: AddShipment, canActivate: [AuthGuard] },
  { path: 'shipments/:id', component: ShipmentDetails, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/dashboard' },
];
