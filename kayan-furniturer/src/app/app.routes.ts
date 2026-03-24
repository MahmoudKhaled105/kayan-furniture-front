import { Routes } from '@angular/router';
import { SuppliersList } from './features/suppliers/suppliers-list/suppliers-list';
import { SupplierDetails } from './features/suppliers/supplier-details/supplier-details';
import { AddSupplier } from './features/suppliers/add-supplier/add-supplier';
import { ShipmentsList } from './features/shipments/shipments-list/shipments-list';
import { ShipmentDetails } from './features/shipments/shipment-details/shipment-details';
import { AddShipment } from './features/shipments/add-shipment/add-shipment';

export const routes: Routes = [
  { path: '', redirectTo: 'suppliers', pathMatch: 'full' },
  { path: 'suppliers', component: SuppliersList },
  { path: 'suppliers/add', component: AddSupplier },
  { path: 'suppliers/:id', component: SupplierDetails },
  { path: 'shipments', component: ShipmentsList },
  { path: 'shipments/add', component: AddShipment },
  { path: 'shipments/:id', component: ShipmentDetails },
];
