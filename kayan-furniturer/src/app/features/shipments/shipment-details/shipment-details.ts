import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Installment {
  id: number;
  date: string;
  amount: string;
  type: string;
  status: 'paid' | 'pending';
  receiptNumber: string;
}

@Component({
  selector: 'app-shipment-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shipment-details.html',
  styleUrl: './shipment-details.scss',
})
export class ShipmentDetails {
  shipment = signal({
    number: 'CNT-2024-075',
    supplier: 'إيطاليان ديزاين',
    arrivalDate: '28 يناير 2024',
    totalValue: '820,000',
    paidValue: '300,000',
    remainingValue: '520,000',
    itemCount: 28,
    status: 'in-transit',
    statusLabel: 'في الطريق (البحر)'
  });

  installments = signal<Installment[]>([
    { id: 1, date: '01 فبراير 2024', amount: '150,000', type: 'تحويل بنكي', status: 'paid', receiptNumber: 'REC-99201' },
    { id: 2, date: '15 فبراير 2024', amount: '150,000', type: 'كاش', status: 'paid', receiptNumber: 'REC-99450' },
    { id: 3, date: '01 مارس 2024', amount: '200,000', type: 'شيك', status: 'pending', receiptNumber: '---' },
    { id: 4, date: '15 مارس 2024', amount: '320,000', type: 'شيك', status: 'pending', receiptNumber: '---' }
  ]);

  constructor(private route: ActivatedRoute) {}
}
