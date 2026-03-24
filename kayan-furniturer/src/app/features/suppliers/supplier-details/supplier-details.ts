import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Shipment {
  id: string;
  number: string;
  arrivalDate: string;
  status: 'delivered' | 'in-transit';
  itemCount: number;
  totalValue: string;
}

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './supplier-details.html',
  styleUrl: './supplier-details.scss',
})
export class SupplierDetails {
  activeTab = signal<'shipments' | 'payments'>('shipments');
  
  supplier = signal({
    name: 'أثاث النور الفاخر',
    phone: '0122 456 7890',
    location: 'دمياط، المنطقة الصناعية',
    totalReceivables: '850,000',
    lastPaymentDelayedDays: 15,
    paidPercentage: 75,
    lifetimePaid: '2,420,000',
    lastPaymentAmount: '120,000',
    topSellingItem: 'كرسي "لويس" مذهب',
    topSellingItemPercentage: 30,
    showroomNote: 'المورد ده شغله نضيف جداً بس دايما بيتأخر في تسليم الحاويات اسبوعين، لازم نطلب بدري.'
  });

  shipments = signal<Shipment[]>([
    { id: '1', number: 'CNT-2024-081', arrivalDate: '15 فبراير 2024', status: 'delivered', itemCount: 42, totalValue: '320,000 ج.م' },
    { id: '2', number: 'CNT-2024-075', arrivalDate: '28 يناير 2024', status: 'in-transit', itemCount: 28, totalValue: '195,000 ج.م' },
    { id: '3', number: 'CNT-2023-142', arrivalDate: '12 ديسمبر 2023', status: 'delivered', itemCount: 56, totalValue: '540,000 ج.م' }
  ]);

  constructor(private route: ActivatedRoute) {}

  setTab(tab: 'shipments' | 'payments') {
    this.activeTab.set(tab);
  }
}
