import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ShipmentService } from '../../../shared/services/shipment.service';
import { SupplierService, Supplier } from '../../../shared/services/supplier.service';

@Component({
  selector: 'app-add-shipment',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-shipment.html',
  styleUrl: './add-shipment.scss',
})
export class AddShipment implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private shipmentService = inject(ShipmentService);
  private supplierService = inject(SupplierService);

  currentStep = signal(1);
  isLoading = signal(false);
  suppliers = signal<Supplier[]>([]);
  
  shipmentForm: FormGroup;

  constructor() {
    this.shipmentForm = this.fb.group({
      container_number: ['', Validators.required],
      date_received: [new Date().toISOString().split('T')[0], Validators.required],
      estimated_arrival: [''],
      notes: [''],
      supplier_id: [null, Validators.required],
      declared_value: [0, [Validators.required, Validators.min(1)]],
      total_paid: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe({
      next: (data) => this.suppliers.set(data),
      error: (err) => console.error('Failed to load suppliers:', err)
    });
  }

  nextStep() {
    if (this.currentStep() < 3) {
      this.currentStep.update(s => s + 1);
    }
  }

  prevStep() {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
    }
  }

  setStep(step: number) {
    this.currentStep.set(step);
  }

  onSubmit() {
    if (this.shipmentForm.valid) {
      this.isLoading.set(true);
      const val = this.shipmentForm.value;
      
      // Determine payment status
      let payment_status: 'NOT_PAID' | 'PARTIAL' | 'FULL' = 'NOT_PAID';
      if (val.total_paid === 0) payment_status = 'NOT_PAID';
      else if (val.total_paid >= val.declared_value) payment_status = 'FULL';
      else payment_status = 'PARTIAL';

      const payload = {
        ...val,
        payment_status,
        status: 'PENDING'
      };

      this.shipmentService.createShipment(payload).subscribe({
        next: () => {
          this.isLoading.set(false);
          this.router.navigate(['/shipments']);
        },
        error: (err) => {
          console.error('Failed to create shipment:', err);
          this.isLoading.set(false);
          alert('فشل في حفظ الشحنة');
        }
      });
    } else {
      // Mark all as touched to show errors
      this.shipmentForm.markAllAsTouched();
    }
  }

  get selectedSupplier(): Supplier | undefined {
    const id = this.shipmentForm.get('supplier_id')?.value;
    return this.suppliers().find(s => s.id === Number(id));
  }
}
