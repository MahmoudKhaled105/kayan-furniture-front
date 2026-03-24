import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-supplier',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './add-supplier.html',
  styleUrl: './add-supplier.scss',
})
export class AddSupplier {
  status = signal<'active' | 'inactive'>('active');

  setStatus(status: 'active' | 'inactive') {
    this.status.set(status);
  }
}
