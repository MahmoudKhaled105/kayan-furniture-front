import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Shipment {
  id: number;
  date: string;
  supplier: string;
  supplierInitial: string;
  supplierColor: string;
  totalValue: string;
  paidValue: string;
  remainingValue: string;
  status: 'fully-paid' | 'installments' | 'not-paid';
  statusLabel: string;
}

@Component({
  selector: 'app-shipments-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shipments-list.html',
  styleUrl: './shipments-list.scss',
})
export class ShipmentsList {
  shipments = signal<Shipment[]>([
    {
      id: 1,
      date: '24 مايو 2024',
      supplier: 'مصنع الشرق للأثاث',
      supplierInitial: 'م',
      supplierColor: 'primary',
      totalValue: '450,000 ج.م',
      paidValue: '450,000 ج.م',
      remainingValue: '0 ج.م',
      status: 'fully-paid',
      statusLabel: 'خالصة'
    },
    {
      id: 2,
      date: '18 مايو 2024',
      supplier: 'إيطاليان ديزاين',
      supplierInitial: 'إ',
      supplierColor: 'secondary',
      totalValue: '820,000 ج.م',
      paidValue: '300,000 ج.م',
      remainingValue: '520,000 ج.م',
      status: 'installments',
      statusLabel: 'متقسطة'
    },
    {
      id: 3,
      date: '12 مايو 2024',
      supplier: 'توريدات الرواد',
      supplierInitial: 'ت',
      supplierColor: 'tertiary',
      totalValue: '1,200,000 ج.م',
      paidValue: '0 ج.م',
      remainingValue: '1,200,000 ج.م',
      status: 'not-paid',
      statusLabel: 'لسه مدفعش'
    },
    {
      id: 4,
      date: '05 مايو 2024',
      supplier: 'مودرن هوم',
      supplierInitial: 'م',
      supplierColor: 'primary',
      totalValue: '215,000 ج.م',
      paidValue: '215,000 ج.م',
      remainingValue: '0 ج.م',
      status: 'fully-paid',
      statusLabel: 'خالصة'
    }
  ]);

  totalDebts = signal('1,450,200 ج.م');
}
