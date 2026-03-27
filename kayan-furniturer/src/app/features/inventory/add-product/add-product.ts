import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InventoryService } from '../../../shared/services/inventory.service';
import { ShipmentService, Shipment } from '../../../shared/services/shipment.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
})
export class AddProduct implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private inventoryService = inject(InventoryService);
  private shipmentService = inject(ShipmentService);

  isLoading = signal(false);
  itemType = signal<'product' | 'bulk'>('product');
  
  locations = signal<any[]>([]);
  shipments = signal<Shipment[]>([]);
  
  itemForm: FormGroup;

  constructor() {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      category: [''],
      location_id: [null, Validators.required],
      // Product specific
      shipment_id: [null],
      purchase_value: [0],
      sale_price: [0],
      description: [''],
      // Bulk specific
      quantity: [0],
      unit_price: [0]
    });
  }

  ngOnInit() {
    this.loadData();
    this.updateValidators();
  }

  loadData() {
    this.inventoryService.getLocations().subscribe((l: any[]) => this.locations.set(l));
    this.shipmentService.getShipments().subscribe((s: any[]) => this.shipments.set(s));
  }

  setType(type: 'product' | 'bulk') {
    this.itemType.set(type);
    this.updateValidators();
  }

  updateValidators() {
    const pVal = this.itemForm.get('purchase_value');
    const sPrice = this.itemForm.get('sale_price');
    const qty = this.itemForm.get('quantity');
    const uPrice = this.itemForm.get('unit_price');

    if (this.itemType() === 'product') {
      pVal?.setValidators([Validators.required, Validators.min(0)]);
      sPrice?.setValidators([Validators.required, Validators.min(0)]);
      qty?.clearValidators();
      uPrice?.clearValidators();
    } else {
      qty?.setValidators([Validators.required, Validators.min(1)]);
      uPrice?.setValidators([Validators.required, Validators.min(0)]);
      pVal?.clearValidators();
      sPrice?.clearValidators();
    }

    pVal?.updateValueAndValidity();
    sPrice?.updateValueAndValidity();
    qty?.updateValueAndValidity();
    uPrice?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.itemForm.valid) {
      this.isLoading.set(true);
      const val = this.itemForm.value;

      const obs: Observable<any> = this.itemType() === 'product'
        ? this.inventoryService.createItem(val)
        : this.inventoryService.createInventoryItem(val);

      obs.subscribe({
        next: () => {
          this.isLoading.set(false);
          this.router.navigate(['/inventory']);
        },
        error: (err: any) => {
          console.error('Failed to create item:', err);
          this.isLoading.set(false);
          alert('فشل في حفظ البيانات');
        }
      });
    } else {
      this.itemForm.markAllAsTouched();
    }
  }
}
